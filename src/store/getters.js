export default {
  getGoodsList(state){
    return state.shop_car;
  },
  getGoodsCount(state, getters){
    return getters.getGoodsList.length;
  }
};
