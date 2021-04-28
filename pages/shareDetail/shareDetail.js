// pages/shareDetail/shareDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    share:[],
    date:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.article_id
    wx.request({
      url: 'https://applets.cwp.cool/api/user/showuseraticalinfo',
      method:'POST',
      data:{
        article_id:id
      },
      success:(res) => {
        this.setData({
          share:res.data.data[0],
          date:res.data.data[0].created_at.split(' ')[0]
        })
      },
      fail:(res) => {
        console.log(res);
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