// index.js
// 获取应用实例
const app = getApp();
const url = app.globalData.url;
var utils = require('../../utils/util');
Page({
  data: {
    value:'',
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 4000,
    duration: 800,
    // 导航active 
    active:0,
    // swiper高度
    swiper_height:0,
    // 显示遮盖层
    show: false,
    // 屏幕大小
    screen_height:0,
    // 选择数组
    choose_list:[
      {src:"../../utils/img/tabBarImg/fire.png",name:"消防安全",url:"./../fire/fire"},
      {src:"../../utils/img/tabBarImg/swimming.png",name:"防溺水",url:"./../drowning/drowning"},
      {src:"../../utils/img/tabBarImg/earthquake.png",name:"防地震",url:"./../earthquke/earthquke"},
      {src:"../../utils/img/tabBarImg/typhoon.png",name:"防台风",url:'./../typhoon/typhoon'},
    ],
    choose_list2:[
      {src:"../../utils/img/tabBarImg/fight.png",url:"./../schoolForce/schoolForce",name:"校园欺凌"},
      {src:"../../utils/img/tabBarImg/defraud.png",url:"./../phoneFraud/phoneFraud",name:"电信诈骗"},
      {src:"../../utils/img/tabBarImg/food.png",url:"./../foodsafe/foodsafe",name:"食品安全"},
      {src:"../../utils/img/tabBarImg/provide.png",url:"./../provide/provide",name:"防校园贷"},
    ],
    hot:[],
    tab_list:[
      {title:"自然灾害"},
      {title:"心理教育"},
      {title:"疫情防控"},
      {title:"电信诈骗"}
    ],
    swiper_list:[],
    tabData_list:[]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 导航栏切换
  onChange(event){
    this.setData({
      active:event.detail.name
    })
    this.getTab(this.data.active);
  },
  // 改变swiper
  changeSwiper(event){
    this.setData({
      active:event.detail.current
    })
    this.getTab(this.data.active);
  },
  // 遮盖层的显示
  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },
  // 查看文章详情
  // 搜索指定的文章
  goAriticelDetail(event) {
    wx.navigateTo({
      url: `../newsDetail/newsDetail?article_id=${event.currentTarget.dataset.id}`,
    })
},
  // 进入搜索页
  goSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  // 获取轮播
  getSwiper(){
    let _this = this;
      wx.request({
        url:url+"/api/user/carousel",
        success(res){
          _this.setData({
            swiper_list:res.data.data
          })
        }
      })
  },
  // 热搜
  getHot() {
    let _this = this
    wx.request({
      url: url + "/api/user/hotsearch",
      success(res) {
        _this.setData({
          hot: res.data.data
        })
      },
      fail: {
      }
    }
    )
  },
  // 首页底部的展示

  getTab:utils.debounce(function(type){
    let _this = this ;
    // console.log(this.data.active);
    wx.request({
      url: url+"/api/user/show",
      data:{
        type:type+1
      },
      success(res){
        _this.setData({
          tabData_list:res.data.data
        })
      }
    })
  },100)
,
// 搜索指定的文章
goAriticelDetail(event) {
  wx.navigateTo({
    url: `../newsDetail/newsDetail?article_id=${event.currentTarget.dataset.id}`,
  })
},
  onLoad() {
      wx.getSystemInfo({
        success:(res)=>{
          // console.log(res);
          this.setData({
            swiper_height:res.windowHeight,
            screen_height:res.screenHeight
          })
        }
      });
      this.getSwiper();
      this.getHot();
      this.getTab(0);
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  
})
