<!-- 註冊******************************************************************* -->
<template>
<v-app>
  <div id="register">
    <div class="overlay">
      <v-img
      src="../assets/meihua.png"
      width="70%"
      height="100%"
      style="position: relative; right: 100px;"
      id="hua"
      >
      </v-img>
      <!-- 【v-model綁定】 -->
      <v-form v-model="valid" @submit.prevent="register" ref="form">
      <div class="form-text">
        <p>帳號</p>
        <v-text-field
          v-model="form.account"
          :rules="nameRules"
          :counter="15"
          label="請輸入帳號"
          required
        ></v-text-field>
        <p>密碼</p>
        <v-text-field
          v-model="form.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.length]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="請輸入密碼"
          counter
          color="primary"
          @click:append="show1 = !show1"
        >
        </v-text-field>
        <p>信箱</p>
        <v-text-field
          v-model="form.email"
          :rules="emailRules"
          label="請輸入信箱"
          required
        ></v-text-field>
        <v-btn
          type="submit"
          color="primary"
          rounded
          :ripple="false"
          style="align-self: flex-end;"
        >
          註冊
        </v-btn>
      </div>
      </v-form>
    </div>
  </div>
</v-app>
</template>

<script>
import validator from 'validator'

export default {
  data () {
    return {
      valid: true,
      show1: false,
      form: {
        account: '',
        password: '',
        email: ''
      },
      passwordRules: {
        required: value => !!value || '密碼爲必填',
        length: v => (v.length >= 4 && v.length <= 20) || '帳號至少 4 個字數'
      },
      nameRules: [
        v => !!v || '帳號爲必填',
        v => (v.length >= 4 && v.length <= 20) || '帳號至少 4 個字數'
      ],
      emailRules: [
        v => !!v || '信箱爲必填',
        v => (validator.isEmail(v)) || '信箱格式不正確'
      ]
    }
  },
  computed: {
    progress () {
      return Math.min(100, this.value.length * 10)
    },
    color () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    }
  },
  methods: {
    async register () {
      const valid = this.$refs.form.validate()
      if (!valid) return
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          iconColor: '#202938',
          title: '註冊成功',
          buttonsStyling: false,
          background: '#DED7B9',
          confirmButtonText: '關閉',
          width: '20rem'
        })
        this.$router.push('/')
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
#register,
.overlay::before {
  background:
  url(../assets/zhuce-beging.jpg) no-repeat fixed 0 0 / cover;
}

#register {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hua {
  transition: 2s ease-in-out;
  transform-origin: left;
}

.overlay {
  height: 60%;
  width: 60%;
  overflow: hidden;
  position: relative;
  z-index: 0;
  // background-color: #ffffff7e;
  border-radius: 10px;
  // display: flex;
  &::before {
    content: '';
    filter: blur(5px);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #ded7b9b2;
    z-index: -1;
  }

  &:hover #hua{
    transform-origin: left;
    transition: 2s ease-in-out;
    transform: rotate(3deg);
  }
}

.form-text {
  width: 30%;
  color: var(--primary);
  font-weight: bolder;
  position: absolute;
  top: 20%;
  right: 7%;
  display: flex;
  flex-direction: column;
}

.v-input {
  color: red;
}
</style>
