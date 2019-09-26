<template>
  <div>
    <PersonalInfo v-model="phoneInfo"
                  :zip-code.sync="zipCode"

                  required
                  :validate="validate"
                  message="手机号不合法1"
    />


    <!--下面的方法，属性的传递，事件的回调来进行数据更新。这也是 v-model 双向绑定的形式-->
    <!-- :zip-code.sync == @update:zipCode 语法糖-->
    <PersonalInfo
      :phone-info="phoneInfo"
      :zip-code="zipCode"
      @change="val => (phoneInfo = val)"
      @update:zipCode="val => (zipCode = val)"

      required
      :validate="validate"
      message="手机号不合法2"
    />

    phoneInfo: {{ phoneInfo }}
    <br/>
    zipCode: {{ zipCode }}

  </div>
</template>


<script>
  import PersonalInfo from "./PersonalInfo"

  export default {
    components: {
      PersonalInfo
    },

    data() {
      return {
        phoneInfo: {
          areaCode: "+86",
          phone: ""
        },
        zipCode: ""
      };
    },

    methods: {
      validate(phone = "") {
        return phone && /^1[0-9]{10}$/.test(phone);
      }
    }


  }
</script>
