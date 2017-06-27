<template>
  <div>
    <input type="text" v-model="data"/>
    <input type="button" value="add" @click="showData(data)"/>
  </div>
</template>

<script>
import store from '../vuex/store'
import  { ADD_DATA }  from '../vuex/mutations'
export default{
  name:"Home",
  data(){
    return{
      data:''
    }
  },
  store,
vuex:{
  mutations:{
    ADD_DATA
  }
},
methods:{
  showData(data){
    store.dispatch("ADD_DATA",data)
  }
}
}

</script>
<style>
</style>
