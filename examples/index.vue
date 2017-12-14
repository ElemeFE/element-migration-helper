<template>
  <div class="template">
    <el-dialog
      v-model="true" size="large">
      this is template body
      <el-rate text-template="{ value }"></el-rate>
      <el-dropdown menu-align="left"></el-dropdown>
      <el-transfer
        footer-format="{}"></el-transfer>
      <el-switch on-text="ON"
                 off-text="OFF"></el-switch>
      <el-tag type="primary"></el-tag>
      <el-tag type="gray"></el-tag>
      <el-menu theme="dark"></el-menu>
      <el-input icon="el-icon-infomation"
                :on-icon-click="clickEvent" @click="clickEvent"
                @change="inputEvent"></el-input>
      <el-autocomplete custom-item="my-item" :props="{}"></el-autocomplete>
      <el-steps :center="true"></el-steps>
      <el-date-picker @change="changeEvent"></el-date-picker>
      <el-table inline-template="inline"></el-table>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  export default {
    data() {
      return {
      };
    },
    methods: {
      clickEvent() {
        console.log('clicked');
      },
      inputEvent() {
        console.log('inputed');
      }
    }
  };
</script>
<style lang="scss" type="text/scss">
  .template {
    background-color: #ff0000;
  }
</style>