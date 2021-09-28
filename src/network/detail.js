import { request } from "./request";

function gainGoodData(key) {
  return request({
    url: "/detail/" + key,
    method: "GET"
  });
}

function goodInfo(result) {
  let goodBasicInfo = {};
  goodBasicInfo["title"] = result.title;
  goodBasicInfo["original_cost"] = result.original_cost;
  goodBasicInfo["discount"] = result.discount;
  goodBasicInfo["service"] = result.service;
  goodBasicInfo["sale_num"] = result.sale_num;
  goodBasicInfo["collect"] = result.collect;
  return goodBasicInfo;
}

function storeInfo(result) {
  let storeInfo = {};
  storeInfo["merchant_name"] = result.merchant_name;
  storeInfo["merchant_face"] = result.merchant_face;
  storeInfo["goods_number"] = result.goods_number;
  storeInfo["gross_sales"] = result.gross_sales;
  let grade = [];

  grade.push({ grade: result.describe_grade, name: "描述相符" });
  grade.push({ grade: result.price_grade, name: "价格合理" });
  grade.push({ grade: result.quality_grade, name: "质量满意" });

  storeInfo["grade"] = grade;

  return storeInfo;
}

function paramInfo(result){
  let info = {};
  info["describe"] = result.goods_describe;
  info["details"] = result.goods_details;
  return info;
}

export { gainGoodData, goodInfo, storeInfo, paramInfo };
