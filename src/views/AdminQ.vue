<template>
<div id="adminQ">
  <h1 class="text-center mt-16 mb-10">常見問題管理</h1>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="arrayQ"
      :items-per-page="10"
      ref="table"
      class="elevation-3"
    >
      <!-- <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
      <!-- 編輯按鈕-------------------------------------------- -->
      <template v-slot:item.actions>
      <v-icon
        middle
        class="mr-5"
        color="primary"
        @click="editDialog = true"
      >
        mdi-pencil
      </v-icon>
      <!-- 刪除按鈕-------------------------------------------- -->
      <v-icon
        middle
        color="error"
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
          class="mx-2"
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
          <div class="container" style="display: block; width: 500px; height: 500px;">
            <v-card-title>
              <p class="text-h5 mt-6 mx-auto font-weight-black">常見問題新增</p>
            </v-card-title>
            <v-form ref="form" v-model="valid" @submit.prevent="createQuestion">
              <v-textarea
                v-model="form.question"
                label="請輸入問題"
                counter
                maxlength="200"
                full-width
                single-line
                required
                :rules="[v => v.length >= 5 || '至少輸入 5 個字']"
              ></v-textarea>
              <v-textarea
                v-model="form.answer"
                label="請輸入回答"
                counter
                maxlength="500"
                full-width
                single-line
                required
                :rules="[v => v.length >= 5 || '至少輸入 5 個字']"
              ></v-textarea>
            </v-form>
          </div>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :ripple="false"
            @click="reset"
            class="mb-5"
          >
            關閉
          </v-btn>
          <v-btn
            color="secondary"
            :ripple="false"
            @click="createQuestion"
            class="mb-5 mr-5"
            type="submit"
          >
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- 編輯框 ----------------------------------------------------------- -->
  <v-dialog
      v-model="editDialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-text>
          <div class="container" style="display: block; width: 500px; height: 500px;">
            <v-card-title>
              <p class="text-h5 mt-6 mx-auto font-weight-black">常見問題編輯</p>
            </v-card-title>
            <v-form ref="form" v-model="valid" @submit.prevent="editQuestion2">
              <v-textarea
                v-model="form.question"
                label="請輸入問題2"
                counter
                maxlength="200"
                full-width
                single-line
                required
                :rules="[v => v.length >= 5 || '至少輸入 5 個字']"
              ></v-textarea>
              <v-textarea
                v-model="form.answer"
                label="請輸入回答2"
                counter
                maxlength="500"
                full-width
                single-line
                required
                :rules="[v => v.length >= 5 || '至少輸入 5 個字']"
              ></v-textarea>
            </v-form>
          </div>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :ripple="false"
            @click="reset"
            class="mb-5"
          >
            關閉
          </v-btn>
          <v-btn
            color="secondary"
            :ripple="false"
            @click="editQuestion2"
            class="mb-5 mr-5"
            type="submit"
          >
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      dialogDelete: false,
      editDialog: false,
      valid: true,
      // modalSubmitting: false,
      form: {
        question: '',
        answer: '',
        index: -1
      },
      arrayQ: [],
      test: [],
      headers: [
        {
          text: '問題敘述',
          align: 'start',
          sortable: false,
          value: 'question'
        },
        { text: '回答敘述', value: 'answer' },
        { text: 'actions', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
  },
  methods: {
    async createQuestion () {
      try {
        const { data } = await this.api.post('/questions', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.arrayQ.push(data.result)
        this.dialog = false
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '新增錯誤',
          text: error.response.data.message
        })
      }
      // this.modalSubmitting = false
    },
    async editQuestion2 () {
      // const fd = new FormData()
      // for (const key in this.form) {
      //   if (key !== '_id') {
      //     fd.append(key, this.form[key])
      //   }
      // }
      try {
        const { data } = await this.api.patch('/questions/' + this.form._id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.arrayQ[this.form.index] = { question: data.question, answer: data.answer }
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '修改錯誤',
          text: error.response.data.message
        })
      }
    },
    reset () {
      this.dialog = false
      this.editDialog = false
      this.$refs.form.reset()
    },
    editQuestion (item) {
      this.from.index = this.arrayQ.indexOf(item)
      this.form = Object.assign({}, item)
      this.editDialog = false
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
h1::before {
  content: '';
  display: none;
}

.container {
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
</style>
