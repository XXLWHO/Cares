// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
          url:"https://applets.cwp.cool",
          nonetwork: false   //判断是否有网络
  },
  onShow() {
    this.onNetworkStatusChange()  //开启检测
  },
  // 监听网络状态
  onNetworkStatusChange() {
    var that = this
    //获取网络类型
    wx.getNetworkType({
      success: function (res) {
        const networkType = res.networkType
        //不为none代表有网络
        if ('none' != networkType) {
          that.globalData.nonetwork = true
          //网络状态变化事件的回调函数   开启网络监听，监听小程序的网络变化
          wx.onNetworkStatusChange(function (res) {
            if (res.isConnected) {
              //网络变为有网
              that.globalData.nonetwork = true
            } else {
              //网络变为无网
              wx.showToast({
                title: '请确保您的网络状态',
                icon:"loading",
                duration:2000
              })
              that.globalData.nonetwork = false
              
            }
          })
        } else {
           //无网状态
          wx.onNetworkStatusChange(function (res) {
            if (res.isConnected) {
              that.globalData.nonetwork = true
            } else {
              wx.showToast({
                title: '请确保您的网络状态',
                icon:"loading",
                duration:2000
              })
              that.globalData.nonetwork = false
            }
          })
        }
      },
    })
  }
})
