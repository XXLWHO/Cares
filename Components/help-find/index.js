// Components/help-find/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
// 跳转发布页面
goPublish(){
wx.navigateTo({
  url: '../../Components/help-publish/index',
})
},
// 跳转详情页
goFindDetail(){
  wx.navigateTo({
    url: '../../Components/help-findDetail/index',
  })
},
// 拨打电话
makePhone(){
  wx.makePhoneCall({
    phoneNumber: '11164648498',
    success: (res) => {},
    fail: (res) => {
      wx.showToast({
        icon:"none",
        title: '您取消了拨打此电话',
      })

    },
    complete: (res) => {},
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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