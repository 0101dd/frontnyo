<!-- 登入******************************************************************* -->
<template>
<v-app>
  <div id="login">
    <div class="overlay">
      <v-img
        src="../assets/zhuzi.png"
        width="40%"
        height="100%"
        style="position: relative; left: 62%;"
        id="zhuzi"
       >
      </v-img>
      <!-- 【v-model綁定】 -->
      <v-form v-model="valid" @submit.prevent="login" ref="form">
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
          :rules="[passwordRules.required]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="請輸入密碼"
          counter
          color="primary"
          @click:append="show1 = !show1"
        >
        </v-text-field>
        <v-btn
          type="submit"
          color="primary"
          rounded
          :ripple="false"
          class="mt-6"
        >
          登入
        </v-btn>
      </div>
      </v-form>
    </div>
  </div>
</v-app>
</template>

<script>

export default {
  data () {
    return {
      valid: true,
      show1: false,
      form: {
        account: '',
        password: ''
      },
      passwordRules: {
        required: value => !!value || '密碼爲必填',
        length: v => (v.length >= 4 && v.length <= 20) || '帳號至少 4 個字數'
      },
      nameRules: [
        v => !!v || '帳號爲必填',
        v => (v.length >= 4 && v.length <= 20) || '帳號至少 4 個字數'
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
    login () {
      this.$store.dispatch('user/login', this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
#login,
.overlay::before {
  background:
  url(../assets/zhuce-beging.jpg) no-repeat fixed 0 0 / cover;
}

#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#zhuzi {
  transition: 2s ease-in-out;
  transform-origin: bottom;
}

.overlay {
  height: 60%;
  width: 60%;
  overflow: hidden;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  // display: flex;
  // justify-content: flex-end;
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

  &:hover #zhuzi{
    transform-origin: bottom;
    transition: 2s ease-in-out;
    transform: rotate(-3deg);
  }
}

.form-text {
  width: 30%;
  color: var(--primary);
  font-weight: bolder;
  position: absolute;
  top: 20%;
  left: 17%;
}

</style>
