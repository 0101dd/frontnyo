<template>
<div id="users">
  <div class="container">
    <div class="row">
      <div class="col left-info">
        <h1 class="account-title">帳號：</h1>
        <h1 class="pl-5">{{ user.account }}</h1>
        <h1 class="email-title">信箱：</h1>
        <h1 class="pl-5">{{ user.email }}</h1>
      </div>
      <div class="col">
         <!-- <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="created"
          lazy-validation
          >
          <div class="row">
            <div class="col">
              <v-text-field
                v-model="this.nickName"
                :counter="10"
                :rules="nameRules"
                label="暱稱"
              ></v-text-field>
            </div>
            <div class="col">
              <v-radio-group v-model="form.gender" row>
                性別：&emsp;
                <v-radio
                  label="男"
                  :value="true"
                ></v-radio>
                <v-radio
                  label="女"
                  :value="false"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <v-text-field
                v-model="this.age"
                :rules="emailRules"
                label="年齡"
              ></v-text-field>
            </div>
            <div class="col">
              <v-text-field
                v-model="this.birthday"
                :rules="emailRules"
                label="生日"
              ></v-text-field>
            </div>
          </div>
              <v-text-field
                v-model="this.address"
                :rules="emailRules"
                label="地址"
              ></v-text-field>

              <v-text-field
                v-model="this.phone"
                :rules="emailRules"
                label="電話"
              ></v-text-field>

              <v-btn
                color="error"
                class="mr-4"
                @click="reset"
              >
                重填
              </v-btn>

              <v-btn
                color="secondary"
                @click="submitModal"
              >
                修改
              </v-btn>
        </v-form> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      users: [],
      editedIndex: -1,
      form: {
        nickName: '',
        age: '',
        phone: '',
        address: '',
        birthday: '',
        gender: false,
        _id: '',
        index: -1
      }
    }
  },
  methods: {
    reset () {
      this.$refs.form.reset()
      this.form = {
        nickName: '',
        age: '',
        phone: '',
        address: '',
        birthday: '',
        gender: false,
        _id: '',
        index: -1
      }
    },
    async submitModal () {
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        const { data } = await this.api.patch('/users/' + this.form._id, fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        console.log(data)
        this.users[this.form.index] = this.form
        this.reset()
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
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.users = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得資料失敗'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#users {
  h1 {
    font-family: Arial;
    &::before {
      display: none;
    }
  }
}
.account-title, .email-title {
  color: var(--info) !important;
  font-size: 2rem;
  font-family: 'HanyiSentyTang' !important;
  font-weight: normal;
}

.container {
  width: 100%;
}

.left-info {
  background: var(--secondary);
  border-radius: 10px;
  margin: 10px;
  h1 {
    color: var(--accent);
  }
}
.col:last-child {
  background: white;
  border-radius: 10px;
  margin: 10px;
  padding: 50px;
}
</style>
