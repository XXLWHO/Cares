const app = getApp();
const url  = app.globalData.url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detail_list:{}
  },
    getData(id){
      wx.request({
        url: url+"/api/user/missingdetail",
        data:{
          id:id
        },
        success:res=>{
          // console.log(res);
          this.setData({
            detail_list:res.data.data[0]
          })
        }
      })
    },
    makePhone(event){
      let phone = event.currentTarget.dataset.phone;
      wx.makePhoneCall({
        phoneNumber: phone,
        fail:err=>{
            wx.showToast({
              title: '您取消了拨打电话',
              icon:"none"
            })
        }
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    let id = Number(event.id);
    this.getData(id);
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