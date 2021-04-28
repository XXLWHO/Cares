// pages/guidance/guidance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // swiper设置
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 4000,
    duration:1000,
    swiper_height:0,
    // 提示层上的消息
    info:"第一块滑块",
    info_lists:["","2","3","4","5","6"],
    // 进入按钮是否显示
    showBtn:false,
  },
  // 进入主页
  goIndex(e) {
    console.log(e);
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // 当图片到最后一个关闭自动播放
  closeAuto(event){
    let index = event.detail.current ;
    this.setData({
      info:this.data.info_lists[index]
    })
    console.log(event.detail.current);
    if(event.detail.current === 2){
      this.setData({
        autoplay:false,
        showBtn:true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取设备高度
    wx.getSystemInfo({
      success :(res) =>{
        this.setData({
          swiper_height:res.windowHeight
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