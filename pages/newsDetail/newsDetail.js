const app = getApp();
const url = app.globalData.url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据
    data_list:{}
  },
// 回到案例首页
goBack(){
wx.navigateBack({
  delta:1
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this ;
    wx.request({
      url: url+"/api/user/searchone",
      data:{
        article_id:Number(options.article_id)
      },
      success(res){
        _this.setData({
          data_list:res.data.data[0]
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