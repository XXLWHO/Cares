// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否展示搜索消息
    search_show:true
    
  },
    // 关闭分类

  onClose(event) {
    this.setData({
      [`show.${event.target.id}`]: false,
    });
  },
  // 输入内容变化时触发
  onChange(event){
    if(event.detail){
      this.setData({
        search_show:false
      })
    }else{
      this.setData({
        search_show:true
      })
    }
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