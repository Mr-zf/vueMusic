import Vue from 'vue'
import Router from 'vue-router'
// 推荐
import Recommend from '@/components/recommend/recommend'
// 搜索
import Search from '@/components/search/search'
//歌手
import Singer from '@/components/singer/singer'
//排行
import Rank from '@/components/rank/rank'
//歌手详情页
// import SingerDetail from '@/components/singer-detail/singer-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/singer'
    },
    {
      path: '/recommend', //推荐页面
      component: Recommend
    },{
      path: '/singer',   //歌手页面
      component: Singer,
      // children:[
      //   {
      //     path:':id',
      //     component:SingerDetail //歌手详情页
      //   }
      // ]
    },{
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
