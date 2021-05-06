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
})