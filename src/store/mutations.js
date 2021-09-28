export default {
  add_good_sum(state, payload) {
    payload.count += 1;
  },
  add_good(state, payload) {
    state.shop_car.push(payload);
  },
  updata_state(state, payload) {
    state.shop_car = JSON.parse(JSON.stringify(payload));
  }
};
