export default {
  add_good(context, payload) {
    // if (state.shop_car.length == 0) {
    //   payload.data.count = 1;
    //   payload.data.index = payload.data.length;
    //   state.shop_car.push(payload.data);
    // } else {
    //   state.shop_car.forEach((data, index) => {
    //     if (data.only.indexOf(payload.data.only) != -1) {
    //       data.count += 1;
    //       return;
    //     } else if (index == state.shop_car.length - 1) {
    //       payload.data.count = 1;
    //       state.shop_car.push(payload.data);
    //     }
    //   });
    // }

    return new Promise(resolve => {
      let init_data = context.state.shop_car;
      let oldProduct = init_data.find(data => {
        return data.only === payload.only;
      });

      if (oldProduct) {
        context.commit("add_good_sum", oldProduct);
        resolve("添加成功");
      } else {
        payload.count = 1;
        payload.index = init_data.length + 1;
        payload.checked = true;
        context.commit("add_good", payload);
        resolve("添加成功");
      }
      context.commit("updata_state", init_data);
    });
  }
};
