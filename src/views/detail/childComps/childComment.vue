<template>
  <div class="comment">
    <div class="comment_top">
      <div class="left">用户评论</div>
      <div class="right">
        <a href="javascript:;">更多</a>
      </div>
    </div>
    <div class="user_comment">
      <div class="user_info">
        <img
          class="user_photo"
          src="https://s11.mogucdn.com/mlcdn/5abf39/180929_16jd3d0k16a78h4je763l0jcg28k5_132x132.jpg_64x64.jpg"
          alt=""
        />
        <span class="user_name">缘香2020</span>
      </div>
      <div class="content">
        <div class="text">
          货也收到，质量和颜色，和图案上的不一样，图案上的颜色白，薄，是麻莎布料，收到货后打开看，颜色偏黑，布料有点厚，不是麻莎布料，不过款式是和图案上的款式一样的，希望商家发货与莫特上的一致！！！
        </div>
        <div class="info">2020年08月09日 颜色:白色 尺码:XL</div>
        <div class="good_img">
          <img
            src="https://s5.mogucdn.com/mlcdn/c45406/200809_8a18dh5c6c7lf691df1ba426f6kge_1080x810.jpg_100x100.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.comment {
  padding-bottom: 20px;
  border-bottom: 5px solid rgb(236, 236, 236);
}

.comment_top {
  height: 50px;
  border-bottom: 2px solid rgb(236, 236, 236);
  line-height: 50px;
}

.comment_top .left {
  margin-left: 5px;
}

.comment_top .right {
  font-size: 15px;
  margin-right: 10px;
}

.user_comment {
  padding: 0 5px;
}

.user_info {
  height: 60px;
  line-height: 60px;
}

.user_info div {
  float: left;
}

.user_info div::after {
  content: "";
  display: block;
  clear: both;
}

.user_info .user_photo {
  width: 40px;
  border-radius: 50%;
  vertical-align: middle;
}

.user_info .user_name {
  margin-left: 15px;
  vertical-align: middle;
}

.content {
  font-size: 14px;
}

.content .text {
  color: rgb(145, 145, 145);
  margin: 10px 0;
}

.content .info {
  margin: 10px 0;
  color: rgb(187, 187, 187);
}

.content .good_img img {
  width: 60px;
}

</style>
