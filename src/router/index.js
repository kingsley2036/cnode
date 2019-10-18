import Vue from 'vue'
import Router from 'vue-router'
import PostList from "../components/PostList";
import Article from "../components/Article";
import SlideBar from "../components/SlideBar";
import Userinfo from "../components/Userinfo";
Vue.use(Router)

export default new Router({
  routes: [{
    name:'post_content',
    path:'/topic/id=:id&author=:name',
    components:{
      main:Article,
      slidebar:SlideBar
    }
  },{
    name: 'root',
    path: '/',
    components: {
      main: PostList,

    }
  },{
    name:'user_info',
    path:'/userinfo/:name',
    components:{
      main:Userinfo
    }
  }

  ]
})
