// pages/helpDetail/helpDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HelpMessage:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://applets.cwp.cool/api/user/showinfo',
      method:'POST',
      data:{
        id:options.id
      },
      success:(res) => {
        this.setData({
          HelpMessage:res.data.data[0]
        })
      }
    })
  },
})