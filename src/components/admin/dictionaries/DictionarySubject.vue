<template>
  <el-row id="dictionary">
    <el-col>
      <el-button @click="addDialog = true" type="success">
        <i class="el-icon-plus"></i>
      </el-button>
      <!--ADD-->
      <el-dialog :title="`Добавить: ${title}`" :visible.sync="addDialog" width="50%">
        <el-input v-model="item"></el-input>
        <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">Отмена</el-button>
        <el-button @click="addDictionaryItem" type="success">Добавить</el-button>
      </span>
      </el-dialog>
      <!--DELETE-->
      <el-dialog :title="`Удалить ${item} ?`" :visible.sync="deleteDialog" width="50%">
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteDialog = false">Отмена</el-button>
          <el-button type="danger" @click="deleteDictionaryItem">Удалить</el-button>
        </span>
      </el-dialog>

      <el-select filterable value="" v-model="item" :placeholder="title" v-if="dictionary">
        <el-option v-for="val in dictionary" :key="val" :label="val" :value="val"></el-option>
      </el-select>

      <el-button type="danger" @click="deleteDialog = true" :disabled="!item">
        <i class="el-icon-delete"></i>
      </el-button>
      <span v-if="item" id="dictionary_title">{{ title }}</span>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'DictionarySubject',
    props: {
      title: {type: String, required: true},
      name: {type: String, required: true}
    },
    data() {
      return {
        item: '',
        addDialog: false,
        deleteDialog: false
      }
    },
    methods: {
      addDictionaryItem() {
        this.addDialog = false
        let items = this.dictionary
        if (items.indexOf(this.item) === -1) {
          items.push(this.item)
        }
        this.$store.dispatch('uploadDictionary', {name: this.name, data: items})
      },
      deleteDictionaryItem() {
        this.deleteDialog = false
        let items = this.dictionary
        items.splice(items.indexOf(this.item), 1)
        this.item = ''
        this.$store.dispatch('uploadDictionary', {name: this.name, data: items})
      }
    },
    computed: {
      dictionary() {
        return this.$store.getters.dictionaries[this.name]
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-select {
    width: 300px !important;
  }

  #dictionary {
    display: flex;
    margin: 10px;
  }

  #dictionary_title {
    font-size: 12px;
    color: $color-info;
    margin-left: 12px;
  }
</style>
