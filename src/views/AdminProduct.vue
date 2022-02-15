<template>
<div id="adminQ">
  <h1 class="text-center mt-16 mb-10">商品管理</h1>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="10"
      ref="table"
      class="elevation-3"
    >
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
        @click="dialogDelete = true"
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
              <p class="text-h5 mt-6 mx-auto font-weight-black">商品新增</p>
            </v-card-title>
            <v-form ref="form" v-model="valid" @submit.prevent="create">
              <img-inputer
                v-model="file"
                theme="light"
                size="large"
                bottom-text="點選或拖拽圖片以修改"
                hover-text="點選或拖拽圖片以修改"
                placeholder="點選或拖拽選擇圖片"
                :max-size="1024"
                exceed-size-text="檔案大小不能超過"
              />
              <v-text-field
                v-model="form.name"
                label="商品名稱"
              ></v-text-field>
              <v-text-field
                v-model="form.price"
                label="商品價格"
              ></v-text-field>
              <v-textarea
                v-model="form.description"
                label="敘述"
                counter
                maxlength="200"
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
    <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text>Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="dialogDelete = false">OK</v-btn>
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
      dialog: false,
      dialogDelete: false,
      editDialog: false,
      valid: true,
      // modalSubmitting: false,
      form: {
      },
      products: [],
      headers: [
        {
          text: '商品圖片',
          align: 'center',
          sortable: false,
          value: 'image'
        },
        { text: '名稱', value: 'name' },
        { text: '價格', value: 'price' },
        { text: '敘述', value: 'description' },
        { text: 'actions', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
  },
  methods: {
    reset () {
      this.dialog = false
      this.editDialog = false
      this.$refs.form.reset()
    }
  },
  async created () {}
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
