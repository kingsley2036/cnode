import Vue from 'vue'
import Router from 'vue-router'
import PostList from "../components/PostList";
import Article from "../components/Article";
Vue.use(Router)

export default new Router({
  routes: [{
    name:'post_content',
    path:'/topic/id=:id&author=:name',
    components:{
      main:Article
    }
  },{
    name: 'root',
    path: '/',
    components: {
      main: PostList
    }
  }

  ]
})
