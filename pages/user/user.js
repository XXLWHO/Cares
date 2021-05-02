// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avaterUrl:'',
    nickName:'未登录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id =  wx.getStorageSync('openid');
    console.log(id);
  },
  bindtapArticle:function() {
    wx.navigateTo({
      url: './../article/article',
    })
  },
  bindtapMyhelp:function() {
    wx.navigateTo({
      url: './../Myhelp/Myhelp',
    })
  },
  Message() {
    var index = wx.getStorageSync('userinfo')
  },
  onTabItemTap() {
    var index = wx.getStorageSync('userinfo')
    this.setData({
      avaterUrl : index.avatarUrl,
      nickName: index.nickName
    })
    if(!index){
      wx.login({
        success:(res) => {
          const code = res.code
          wx.request({
            method:'POST',
            url: 'https://applets.cwp.cool/api/user/login',
            data:{
              code:code
            },
            success:(res) => {
              const Openid = res.data.openid
              wx.setStorageSync('openid', Openid)
            },
            fail:(res) => {
              console.log(res);
            }
          })
        }
      })
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
         const userInfo = res.userInfo
         wx.setStorageSync('userinfo', userInfo)
         this.setData({
          avaterUrl : userInfo.avatarUrl,
          nickName: userInfo.nickName
         })
        var openid = wx.getStorageSync('openid')
         wx.request({
           url: 'https://applets.cwp.cool/api/user/adduser',
           method:'POST',
           data:{
             name:userInfo.nickName,
             openid:openid
           },
           success:(res) => {
             console.log(res);
           }
         })
        }
      })
    }
  },
})