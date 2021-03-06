import jsonp from 'common/js/jsonp'
import config from 'api/config'
import { commonParams, options } from './config';
import axios from 'axios'
// 轮播图接口
export function getRecommend(){
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    const data = Object.assign({},commonParams,{
        platfrom:'h5',
        uin:0,
        needNewCode:1
    })
    return jsonp(url,data,options)
}
//歌单列表
export function getDiscList(){
    const url = '/api/getDiscLists';
    const data = Object.assign({},commonParams,{
        platfrom:'yqq',
        hostUin:0,
        sin:0,
        ein:29,
        sortId:5,
        needNewCode:0,
        categoryId:10000000,
        rnd:Math.random(),
        format:'json'
    })
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}