import { request } from "./request";

function getHomeData() {
  return request({
    url: "/port/home",
    method: "GET"
  });
}

function getHomeChildNavData(config) {
  return request(config);
}

export { getHomeData, getHomeChildNavData };
