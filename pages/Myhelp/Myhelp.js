// pages/Myhelp/Myhelp.js
const app = getApp();
const url = app.globalData.url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepValue:3,
    steps:[
			{desc:'待审批'},
			{desc:'审批中'},
			{desc:'已审批'},
			{desc:'发布中'}
    ],
    show:false,
    find_list:[],
  },

  myHelp:function(event) {

    wx.navigateTo({
      url: '../helpDetail/helpDetail',
    })
  },
  findHelp:function(event){
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/Components/help-findDetail/index?id='+id,
    })
  },
  deleteFind(event){
    let id = event.currentTarget.dataset.id;
    wx.showModal({
      title: '删除此寻人启事',
      content: '您确定要删除此寻人启事吗？',
      success :res=> {
        if (res.confirm) {
          wx.request({
            url: url+"/api/user/missingdelete",
            method:"POST",
            data:{
              id:id
            },
            success:res=>{
              if(res.data.code === 200){
                this.getFindList()
                wx.showToast({
                  title: '删除成功！',
                })
              }
            },
            fail:err=>{
              console.log(err);
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  remove:function() {
      this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
getFindList(){
  wx.request({
    url: url+"/api/user/missingshow",
    data:{
      openid:"123"
    },
    success:res=>{
      // console.log(res);
      this.data.find_list=res.data.data
      this.setData({
        find_list:this.data.find_list
      })

    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFindList()
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