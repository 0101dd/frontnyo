<template>
<div id="adminQ">
  <h1 class="text-center">常見問題管理</h1>
  <router-link to="/admin/adminPro">會員管理</router-link>
  <router-link to="/admin/adminOrder">訂單管理</router-link>
  <router-link to="/admin/adminProduct">商品管理</router-link>
  <router-link to="/admin/adminQ">常見問題</router-link>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="arrayQ"
      :items-per-page="5"
      :loading="loadTable"
      loading-text="加載中......."
      ref="table"
      class="elevation-3"
    >
      <!-- 編輯按鈕-------------------------------------------- -->
      <template v-slot:item.operate="{ item }">
      <v-icon
        middle
        class="mr-5"
        color="primary"
        @click="editQuestion(item)"
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
      max-width="600px"
    >
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
          <div class="container form-container" style="display: block; width: 500px; height: 500px;">
            <v-card-title>
              <p class="text-h5 mt-6 mx-auto font-weight-black">常見問題新增</p>
            </v-card-title>
            <v-form ref="form" v-model="valid" @submit.prevent="created">
              <v-textarea
                v-model="form.question"
                label="請輸入問題"
                counter
                maxlength="200"
                full-width
                single-line
                :rule="state.question"
              ></v-textarea>
              <v-textarea
                v-model="form.answer"
                label="請輸入回答"
                counter
                maxlength="500"
                full-width
                single-line
                :rule="state.answer"
              ></v-textarea>
            </v-form>
          </div>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :ripple="false"
            @click="close"
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
  </v-row>
    <v-dialog v-model="dialogDelete" max-width="400px">
        <v-card class="delete-card">
            <v-card-text class="delete-title">
              確定要刪除問題嗎？
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
                @click="deleteQuestion"
              >
                刪除
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-dialog>
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
      // modalSubmitting: false,
      editedIndex: -1,
      form: {
        question: '',
        answer: '',
        _id: '',
        index: -1
      },
      arrayQ: [],
      headers: [
        {
          text: '問題敘述',
          align: 'center',
          sortable: false,
          class: 'primary white--text subtitle-1',
          width: '350px',
          value: 'question'
        },
        { text: '回答敘述', align: 'center', class: 'primary white--text subtitle-1', width: '450px', value: 'answer' },
        { text: '操作', align: 'center', class: 'primary white--text subtitle-1', value: 'operate', sortable: false }
      ]
    }
  },
  computed: {
    state () {
      return {
        question: this.form.question.length === 0 ? null : true,
        answer: this.form.answer.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitModal (event) {
      event.preventDefault()
      if (!this.state.question || !this.state.answer) {
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
          const { data } = await this.api.post('/questions', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.arrayQ.push(data.result)
          this.dialog = true
        } else {
          const { data } = await this.api.patch('/questions/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          console.log(data)
          const obj = this.form
          if (data.result.image) {
            obj.image = data.result.image
          }
          // this.arrayQ[this.form.index] = obj
          this.arrayQ.splice(this.form.index, 1, obj)
        }
        this.dialog = false
      } catch (error) {
        if (error.response) {
          this.$swal({
            icon: 'error',
            title: '新增錯誤',
            text: error.response.data.message
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error
          })
        }
      }
      // this.modalSubmitting = false
    },
    async deleteQuestion () {
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        const { data } = await this.api.patch('/questions/deleteQuestion/' + this.form._id, fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data)
        this.arrayQ.splice(this.form.index, 1)
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
    },
    close () {
      this.dialog = false
      this.form = {
        question: '',
        answer: '',
        _id: '',
        index: -1
      }
    },
    editQuestion (item) {
      this.form = Object.assign({}, item)
      this.form.index = this.arrayQ.indexOf(item)
      this.dialog = true
    },
    deleteItem (item) {
      this.form = Object.assign({}, item)
      this.form.index = this.arrayQ.indexOf(item)
      this.dialogDelete = true
    },
    closeDelete () {
      this.dialogDelete = false
      this.form = {
        question: '',
        answer: '',
        _id: '',
        index: -1
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/questions/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.arrayQ = data.result
      this.loadTable = false
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得失敗'
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
