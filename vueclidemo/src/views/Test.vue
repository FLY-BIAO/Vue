<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="级联选择框" prop="checkPass">
        <el-cascader
          ref="cascader1"
          v-model="ruleForm.checkPass"
          :options="options"
          @change="handleChange"
          :append-to-body="false"
          :show-all-levels="false"
          clearable
        ></el-cascader>
      </el-form-item>
      <el-form-item label="级联选择框2" prop="checkPass2">
        <el-cascader
          ref="cascader2"
          v-model="ruleForm.checkPass2"
          :options="options2"
          @change="()=>{}"
          :append-to-body="false"
          :show-all-levels="false"
          clearable
        ></el-cascader>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import Mock from "mockjs";

export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        checkPass: "",
        checkPass2: "",
      },
      rules: {
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
      options: Mock.mock({
        "options|50-100": [
          {
            value: "@guid",
            label: "@cname",
            "children|10-20": [
              {
                value: "@guid",
                label: "@cname",
                level: '1'
              },
            ],
          },
        ],
      }).options,
      options2: []
    };
  },
  methods: {
    handleChange(){
      let value1 = this.$refs.cascader1.values
      let value2 = this.$refs.cascader2.values
      console.log(this.ruleForm,value1,value2)
      this.$refs.cascader2.$refs.panel.clearCheckedNodes()   // 清除选中项
      this.$refs.cascader2.$refs.panel.activePath = []       // 清除激活的菜单
      this.ruleForm.checkPass2 = []
      this.options2 = Mock.mock({
        "options|0-2": [
          {
            value: "@guid",
            label: "@cname",
            "children|100-200": [
              {
                value: "@guid",
                label: "@cname",
              },
            ],
          },
        ],
      }).options;
      this.$nextTick(() => {
      const $el = document.querySelectorAll('.el-cascader-panel .el-cascader-node[aria-owns]');
        Array.from($el).map((item) => item.removeAttribute('aria-owns'));
      });
    }
    
  },
  mounted(){
    // // 先清除选中项和激活的项
    // this.$refs.cascader2.$refs.panel.clearCheckedNodes()   // 清除选中项
    // this.$refs.cascader2.$refs.panel.activePath = []       //  清除激活的菜单
    // // 再清空选项或赋值新的选项
    // this.select = []
    // this.options = []
    // this.$nextTick(() => {
    //   const $el = document.querySelectorAll('.el-cascader-panel .el-cascader-node[aria-owns]');
    //   Array.from($el).map((item) => item.removeAttribute('aria-owns'));
    // });
  }
};
</script>

<style>
.el-input {
  width: 620px;
}
.el-popper.el-cascader__dropdown{
  margin: 0;
  left: 0 !important;
  width: 620px;
}
.el-popper .popper__arrow {
  display: none;
}
.el-cascader-menu {
  width: 100%;
}
</style>