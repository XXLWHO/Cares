// index.js
// 获取应用实例
const app = getApp()

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
    hot:[
      {title:"东哥",url:"",src:"../../utils/img/tabBarImg/new.png",id:1},
      {title:"东哥",url:"",src:"../../utils/img/tabBarImg/new.png",id:2},
      {title:"东哥",url:"",src:"../../utils/img/tabBarImg/new.png",id:3},
    ]
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
  },
  // 改变swiper
  changeSwiper(event){
    this.setData({
      active:event.detail.current
    })
  },
  // 遮盖层的显示
  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },
  // 查看文章详情
  goDetail(){
    wx.navigateTo({
      url: '../index-detail/index-detail',
    })
  },
  // 进入搜索页
  goSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  onLoad() {
      wx.getSystemInfo({
        success:(res)=>{
          console.log(res);
          this.setData({
            swiper_height:res.windowHeight,
            screen_height:res.screenHeight
          })
        }
      })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  
})
