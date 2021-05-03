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
    find_list:{},
  },
  methods: {
    // 跳转发布页面
    goPublish() {
      wx.navigateTo({
        url: '../../Components/help-publish/index',
      })
    },
    // 跳转详情页
    goFindDetail(event) {
      let id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/Components/help-findDetail/index?id='+id,
      })
    },
    // 拨打电话
    makePhone(event) {
      let phone = event.currentTarget.dataset.phone;
      wx.makePhoneCall({
        phoneNumber: phone,
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
    getList(){
      wx.request({
        url: url+"/api/user/showmissall",
        method:"POST",
        success:res=>{
          console.log(res);
          this.setData({
            find_list:res.data.data.data
          })
        }
      })
    },

  },
  // 

  /**
   * 生命周期函数--监听页面加载
   */
  created: function () {
    this.getList();
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
