<template>
  <div class="PostList">
    <div class="loading" v-if="isloading">
      <img alt="xxx" src="../assets/loading.gif">
    </div>

    <div class="posts">
      <ul>
        <li>
          <div class="topbar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="item in posts">
          <img :src="item.author.avatar_url" alt="">
          <span>
              <span class="reply_count">{{item.reply_count}}</span>/{{item.visit_count}}
            </span>
          <span
            :class="[{put_good:(item.good===true),put_top:(item.top===true),'topiclist-tab':(item.good !== true && item.top !== true)}]">
              {{item|tabFormatter}}
            </span>
          <!--            标题-->
          <router-link :to="{name:'post_content',params:{
                        id:item.id,
                        name: item.author.loginname
                        }}">
            <span>{{item.title}}</span>
          </router-link>
          <span class="last_reply">{{item.last_reply_at|formatDate}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "PostList",
        data: function () {
            return {
                isloading: false,
                posts: []
            }
        },
        methods: {
            getdata() {
                this.$http.get('https://cnodejs.org/api/v1/topics', {
                    page: 1,
                    limit: 20
                })
                    .then(res => {
                        this.isloading = false;
                        console.log(res.data.data);
                        this.posts = res.data.data
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        },
        beforeMount() {
            this.isloading = true;
            this.getdata()
        }
    }
</script>

<style scoped>
  .PostList {
    background-color: #e1e1e1;
  }

  .posts {
    margin-top: 10px;
  }

  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .topbar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .topbar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .topbar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
