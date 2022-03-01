<template>
<div id="user-works">
  <h1 class="text-center">作品管理</h1>
  <router-link to="/dashboard/users">會員主頁</router-link>
  <router-link to="/dashboard/cart">購物清單</router-link>
  <router-link to="/dashboard/order">訂單查詢</router-link>
  <router-link to="/dashboard/userWorks">作品管理</router-link>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="works"
      :items-per-page="5"
      :loading="loadTable"
      loading-text="加載中......."
      ref="table"
      class="elevation-3"
    >
    <!-- 圖片 slot ------------------------------------- -->
      <template v-slot:item.image="{ item }">
        <img :src="item.image" style="width: 100px; vertical-align: middle; padding: 5px 0;">
      </template>
    <!-- show slot ------------------------------------ -->
      <template v-slot:item.show="{ item }">
          <v-icon
            v-if="item.show"
            color="primary"
          >
            mdi-check
          </v-icon>
          <v-icon
            v-if="!item.show"
            color="error"
          >
            mdi-close
          </v-icon>
        </template>
        <!-- 編輯按鈕-------------------------------------------- -->
        <template v-slot:item.operate="{ item }">
        <v-icon
          middle
          class="mr-5"
          color="primary"
          @click="editWork(item)"
        >
          mdi-pencil
        </v-icon>
        <!-- 刪除按鈕-------------------------------------------- -->
        <v-icon
          middle
          color="error"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="650px"
      color="white"
      style="background: white;"
    >
      <!-- 新增按鈕 plus----------------------------- -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2 plus"
          fab
          icon
          large
          absolute
          :ripple="false"
          v-bind="attrs"
          v-on="on"
          color="accent"
          style="background: var(--primary); bottom: 40px; right: 50px;"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <!-- 新增框 --------------------------------------------------- -->
      <v-card>
        <v-card-text>
          <div class="container form-container" style="display: block; width: 500px; height: 650px;">
            <v-card-title>
              <p class="text-h5 mt-6 mx-auto font-weight-black">
                <!-- {{ form._id.length > 0 ? '商品編輯' : '商品新增' }} -->
              </p>
            </v-card-title>
            <v-form ref="form" v-model="valid" @submit.prevent="created">
              <img-inputer
                v-model="form.image"
                theme="light"
                size="large"
                bottom-text="點選或拖拽圖片以修改"
                hover-text="點選或拖拽圖片以修改"
                placeholder="點選或拖拽選擇圖片"
                :max-size="1024"
                exceed-size-text="檔案大小不能超過"
              />
              <div class="row">
                <div class="col">
                  <v-text-field
                    v-model="form.name"
                    :rule="state.name"
                    label="作品標題"
                   ></v-text-field>
                </div>
              </div>
              <v-textarea
                v-model="form.description"
                label="介紹"
                counter
                maxlength="200"
                full-width
                single-line
                required
                rows="3"
                row-height="25"
              ></v-textarea>
              <v-radio-group
                  v-model="form.show"
                  row
                >
                  <v-radio
                    label="發佈"
                    :value="true"
                  ></v-radio>
                  <v-radio
                    label="草稿"
                    :value="false"
                  ></v-radio>
                </v-radio-group>
            </v-form>
          </div>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :ripple="false"
            @click="close"
            bottom
            class="mb-5"
          >
            關閉
          </v-btn>
          <v-btn
            color="secondary"
            :ripple="false"
            @click="submitModal"
            class="mb-5 mr-5"
            type="submit"
          >
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 刪除框 ----------------------------------------- -->
      <v-dialog v-model="dialogDelete" max-width="400px">
          <v-card class="delete-card">
            <v-card-text class="delete-title">
              確定要刪除作品嗎？
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                :ripple="false"
                absolute
                bottom
                style="right: 210px;"
                @click="closeDelete"
              >
                取消
              </v-btn>
              <v-btn
                color="error"
                :ripple="false"
                absolute
                bottom
                style="right: 120px;"
                @click="deleteWorks"
              >
                刪除
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </v-row>
</div>
</template>

<script>

export default {
  data () {
    return {
      loadTable: true,
      dialog: false,
      dialogDelete: false,
      valid: true,
      editedIndex: -1,
      works: [],
      form: {
        name: '',
        image: null,
        description: '',
        show: false,
        _id: '',
        index: -1
      },
      headers: [
        { text: '作品圖片', align: 'center', sortable: false, value: 'image', class: 'primary white--text subtitle-1' },
        { text: '標題', align: 'center', sortable: false, value: 'name', class: 'primary white--text subtitle-1' },
        { text: '介紹', align: 'center', sortable: false, value: 'description', class: 'primary white--text subtitle-1', width: '280px' },
        { text: '顯示', align: 'center', class: 'primary white--text subtitle-1', value: 'show' },
        { text: '操作', align: 'center', class: 'primary white--text subtitle-1', value: 'operate', sortable: false }
      ]
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true
      }
    }
  },
  methods: {
    close () {
      this.dialog = false
      this.form = {
        name: '',
        image: null,
        description: '',
        show: false,
        _id: '',
        index: -1
      }
    },
    editWork (item) {
      this.form = Object.assign({}, item)
      this.form.index = this.works.indexOf(item)
      this.dialog = true
    },
    deleteItem (item) {
      this.form = Object.assign({}, item)
      this.form.index = this.works.indexOf(item)
      this.dialogDelete = true
    },
    closeDelete () {
      this.dialogDelete = false
      this.form = {
        name: '',
        image: null,
        description: '',
        show: false,
        _id: '',
        index: -1
      }
    },
    async submitModal () {
      if (!this.state.name) {
        this.$swal({
          icon: 'error',
          iconColor: '#7e2f28',
          title: '缺少必填欄位',
          buttonsStyling: false,
          background: '#DED7B9',
          confirmButtonText: '關閉',
          width: '20rem'
        })
        return
      }
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/userworks', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.works.push(data.result)
          this.dialog = true
        } else {
          const { data } = await this.api.patch('/userworks/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          console.log(data)
          const obj = this.form
          if (data.result.image) {
            obj.image = data.result.image
          }
          // this.works[this.form.index] = obj
          this.works.splice(this.form.index, 1, obj)
        }
        this.dialog = false
      } catch (error) {
        if (error.response) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: 'gg'
          })
        }
      }
    },
    async deleteWorks () {
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        const { data } = await this.api.patch('/userworks/deleteWorks/' + this.form._id, fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data)
        this.works.splice(this.form.index, 1)
        this.closeDelete()
      } catch (error) {
        if (error.response) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '錯誤'
          })
        }
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/userworks/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.works = data.result
      this.loadTable = false
    } catch (error) {
      if (error.response) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: this.data.result
      })
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: none;
}
h1 {
  margin: 100px 0 50px 0;
}
h1::before {
  content: '';
  display: none;
}
.container {
  width: 100%;
  height: 100%;
}
.v-data-table {
  width: 70%;
}
colgroup {
  &>col {
    width: 40% !important;
  }
}
.text-start {
  vertical-align: middle !important;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

.delete-card {
  background: var(--secondary);
  height: 170px;
}
.v-card__text.delete-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--accent);
  position: absolute;
  top: 30%;
  left: 18%;
  width: 300px;
}
</style>
