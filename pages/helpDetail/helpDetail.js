const app = getApp();
const url = app.globalData.url;
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

    console.log(options);
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