<template>
<div id="admin-product">
  <h1 class="text-center">商品管理</h1>
  <router-link to="/admin/adminPro">會員管理</router-link>
  <router-link to="/admin/adminOrder">訂單管理</router-link>
  <router-link to="/admin/adminProduct">商品管理</router-link>
  <router-link to="/admin/adminQ">常見問題</router-link>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="3"
      :loading="loadTable"
      loading-text="加載中......."
      ref="table"
      class="elevation-3"
    >
      <template v-slot:item.image="{ item }">
        <img :src="item.image" style="width: 100px; vertical-align: middle; padding: 5px 0;">
      </template>
      <template v-slot:item.sell="{ item }">
        <v-icon
          v-if="item.sell"
          color="primary"
        >
          mdi-check
        </v-icon>
        <v-icon
          v-if="!item.sell"
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
        @click="editProduct(item)"
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
                    label="商品名稱"
                   ></v-text-field>
                </div>
                <div class="col">
                  <v-text-field
                    v-model="form.price"
                    :rule="state.price"
                    label="商品價格"
                    type="number"
                  ></v-text-field>
                </div>
              </div>
               <v-radio-group
                  v-model="form.category"
                  row
                >
                  <v-radio
                   v-for="n in category"
                   :key="n"
                   :label="n"
                   :value="n"
                   mandatory
                  ></v-radio>
                </v-radio-group>
              <v-textarea
                v-model="form.description"
                label="敘述"
                counter
                maxlength="200"
                full-width
                single-line
                required
                rows="3"
                row-height="25"
                :rules="[v => v.length >= 5 || '至少輸入 5 個字']"
              ></v-textarea>
              <v-radio-group
                  v-model="form.sell"
                  row
                >
                  <v-radio
                    label="上架"
                    :value="true"
                  ></v-radio>
                  <v-radio
                    label="下架"
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
              確定要刪除商品嗎？
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
                @click="deleteProducts"
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
      editDialog: false,
      valid: true,
      category: ['卡片', '文字設計', '書法作品'],
      // modalSubmitting: false,
      editedIndex: -1,
      form: {
        name: '',
        price: null,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      },
      products: [],
      headers: [
        {
          text: '商品圖片',
          align: 'center',
          sortable: false,
          value: 'image',
          class: 'primary white--text subtitle-1'
        },
        { text: '名稱', align: 'center', class: 'primary white--text subtitle-1', value: 'name' },
        { text: '價格', align: 'center', class: 'primary white--text subtitle-1', value: 'price' },
        { text: '類型', align: 'center', class: 'primary white--text subtitle-1', value: 'category' },
        { text: '敘述', align: 'center', class: 'primary white--text subtitle-1', width: '280px', value: 'description' },
        { text: '上架', align: 'center', class: 'primary white--text subtitle-1', value: 'sell' },
        { text: '操作', align: 'center', class: 'primary white--text subtitle-1', value: 'operate', sortable: false }
      ]
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        price: this.form.price === null ? null : this.form.price >= 0,
        category: this.form.category.length === 0 ? null : true
      }
    }
  },
  methods: {
    close () {
      // if (this.modalSubmitting) {
      //   event.preventDefault()
      //   return
      // }
      this.dialog = false
      this.form = {
        name: '',
        price: 0,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    },
    editProduct (item) {
      this.form = Object.assign({}, item)
      this.form.index = this.products.indexOf(item)
      this.dialog = true
    },
    deleteItem (item) {
      this.form = Object.assign({}, item)
      this.form.index = this.products.indexOf(item)
      this.dialogDelete = true
    },
    closeDelete () {
      this.dialogDelete = false
      this.form = {
        name: '',
        price: 0,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    },
    async submitModal (event) {
      event.preventDefault()
      if (!this.state.name || !this.state.price || !this.state.category) {
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
      // this.modalSubmitting = true
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
          this.dialog = true
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          console.log(data)
          const obj = this.form
          if (data.result.image) {
            obj.image = data.result.image
          }
          // this.products[this.form.index] = obj
          console.log(this.form)
          this.products.splice(this.form.index, 1, obj)
          // this.$refs.table.refresh()
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
      // this.modalSubmitting = true
    },
    async deleteProducts () {
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        const { data } = await this.api.patch('/products/deleteProducts/' + this.form._id, fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        // this.products[this.form.index] = [{ ...this.form, image: data.result.image }]
        console.log(data)
        this.products.splice(this.form.index, 1)
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
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
      this.loadTable = false
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
  // async updated () {
  //   try {
  //     const { data } = await this.api.get('/products/all', {
  //       headers: {
  //         authorization: 'Bearer ' + this.user.token
  //       }
  //     })
  //     this.products = data.result
  //   } catch (error) {
  //     this.$swal({
  //       icon: 'error',
  //       title: '錯誤',
  //       text: '取得商品失敗'
  //     })
  //   }
  // }
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
