const app = getApp();
const url = app.globalData.url;
// Components/help-find/index.js
Component({
  options: {
    styleIsolation: 'shared',
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  methods: {
    // 跳转发布页面
    goPublish() {
      wx.navigateTo({
        url: '../../Components/help-publish/index',
      })
    },
    // 跳转详情页
    goFindDetail() {
      wx.navigateTo({
        url: '../../Components/help-findDetail/index',
      })
    },
    // 拨打电话
    makePhone() {
      wx.makePhoneCall({
        phoneNumber: '11164648498',
        success: (res) => { },
        fail: (res) => {
          wx.showToast({
            icon: "none",
            title: '您取消了拨打此电话',
          })

        },
        complete: (res) => { },
      })
    },
    // 获取文章详情
    getFindDetail() {
      let openid = wx.getStorageSync('openid');
      console.log(openid);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  created: function () {
    this.getFindDetail();
    this.getFindDetail();
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
