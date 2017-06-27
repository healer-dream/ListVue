
export default{
  ADD_DATA(state ,data){
    state.listDatas.push(data);
    console.log(state.listDatas);
  }
}
