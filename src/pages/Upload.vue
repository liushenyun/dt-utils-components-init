<template>
  <div>
    <input type="file" accept=".xls" name="my-file" id="excel-file">
    <button @click="uploadExcel">上传excel</button>
    <input type="file" accept=".png" name="my-file" id="png-file" @change="onFileChange">
    <img :src="path" alt="">
    <button @click="uploadPicture">上传图片</button>
  </div>
</template>

<script>
import { formSend } from '../utils/formUploadData';
export default {
  data() {
    return {
      path: ''
    }
  },
  methods: {
    uploadExcel() {
      var _file = document.getElementById('excel-file').files[0];
      formSend('Uploadify/upload_file', { ' myfile': _file }); // { ' myfile': _file }  'myfile' 是与后台协商的名字
      console.log(_file);
    },
    uploadPicture() {
      var _file = document.getElementById('png-file').files[0]; // 上传图片
      formSend('Uploadify/upload_file', { ' myfile': _file }); // { ' myfile': _file }  'myfile' 是与后台协商的名字
    },
    onFileChange(e) {
      let _file = e.target.files[0]
      console.log(_file);
      let oFReader = new FileReader()
      oFReader.readAsDataURL(_file)
      oFReader.onload = ev => {
        this.path = ev.target.result; // 页面显示图片
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
