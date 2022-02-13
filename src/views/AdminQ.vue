<template>
<div id="adminQ">
  <h1 class="text-center mt-5">常見問題管理</h1>
  <v-data-table
    :headers="headers"
    :items="arrayQ"
    :items-per-page="5"
    ref="table"
    class="elevation-3"
  ></v-data-table>
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
          bottom
          right
          :ripple="false"
          v-bind="attrs"
          v-on="on"
          color="accent"
          style="background: var(--primary);"
        >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="container" style="display: block; width: 500px; height: 500px;">
            <v-card-title>
              <p class="text-h5 mt-6 mx-auto font-weight-black">常見問題編輯</p>
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
</div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      valid: true,
      // modalSubmitting: false,
      form: {
        question: '',
        answer: ''
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
        { text: '回答敘述', value: 'answer' }
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
          title: '錯誤',
          text: error.response.data.message
        })
      }
      // this.modalSubmitting = false
    },
    reset () {
      this.dialog = false
      this.$refs.form.reset()
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
</style>
