<template>
<div id="adminQ">
  <h1 class="text-center mt-5">常見問題管理</h1>
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
            @click="dialog = false"
            class="mb-5"
          >
            關閉
          </v-btn>
          <v-btn
            color="secondary"
            :ripple="false"
            @click="dialog = false"
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
      form: {
        question: '',
        answer: ''
      }
    }
  },
  methods: {
    async createQuestion () {
      try {
        await this.api.post('/questions', this.form)
        this.$swal({
          icon: 'success',
          iconColor: '#202938',
          title: '註冊成功',
          buttonsStyling: false,
          background: '#DED7B9',
          confirmButtonText: '關閉',
          width: '20rem'
        })
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message,
          background: '#DED7B9',
          confirmButtonText: '關閉'
        })
      }
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
