// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航下标
    activeKey: 0,
    // 导航list
    tab_list: [
      {
        title: "社区",
        src: "https://z3.ax1x.com/2021/04/27/g9zfdf.png"
      },
      {

        title: "灾害",
        src: "https://z3.ax1x.com/2021/04/27/g9ztMR.png"
      },
      {
        title: "健康",
        src: "https://z3.ax1x.com/2021/04/27/g9zXwV.png"
      },

      {
        title: "交通",
        src: "https://z3.ax1x.com/2021/04/27/g9zV2j.png"
      },
      {
        title: "疫情",
        src: "https://z3.ax1x.com/2021/04/27/g9x1gA.png"
      }

    ],
    rank_list: [
      {
        rank_src: "https://z3.ax1x.com/2021/04/26/gpM9QP.png"
      },
      {
        rank_src: "https://z3.ax1x.com/2021/04/26/gpMkdg.png"
      },
      {
        rank_src: "https://z3.ax1x.com/2021/04/26/gpMKyV.png"
      },
    ],
    swiper_height: 0
  },
  // 切换导航
  tabChange(event) {
    this.setData({
      activeKey: event.detail.name
    })
  },
  imgTabChange(event){
    this.setData({
      activeKey:event.currentTarget.dataset.index
    })
  },
  // 改变swiper
  changeSwiper(event) {
    this.setData({
      activeKey: event.detail.current
    })
  },
  // 跳转搜索页面
  goSearch() {
    wx.navigateTo({
      url: '../../pages/search/search',
    })
  },
  // 详情页
  goDetail(){
    wx.navigateTo({
      url: '../../pages/newsDetail/newsDetail',
    })
  },
  // 进入搜索页
  goSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          swiper_height: res.windowHeight,
          screen_height: res.screenHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})