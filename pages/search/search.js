const app = getApp();
const url = app.globalData.url;
var utils = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否展示搜索消息
    search_show: true,
    // 热搜列表
    hot_list: [],
    info_title: "",
    info_list: []

  },
  // 热搜
  getHot() {
    let _this = this
    wx.request({
      url: url + "/api/user/hotsearch",
      success(res) {
        _this.setData({
          hot_list: res.data.data
        })
      },
      fail: {
      }
    }
    )
  },

  // 搜索内容qq
  getSearchList(info) {
    let _this = this;
    wx.request({
      url: url + "/api/user/search",
      data: {
        tittle: info
      },
      success(res) {
        _this.setData({
          info_list: res.data.data
        })
      }
    })
    if (info) {
      this.setData({
        search_show: false,
      })
    } else {
      this.setData({
        search_show: true,
        info_list: [],
      })
    }
  },
  // 输入内容变化时触发
  onChange: utils.debounce(function (event) {
    this.getSearchList(event.detail)
  }, 500),
  // 搜索指定的文章
  goAriticelDetail(event) {
      wx.navigateTo({
        url: `../newsDetail/newsDetail?article_id=${event.currentTarget.dataset.id}`,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHot()
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