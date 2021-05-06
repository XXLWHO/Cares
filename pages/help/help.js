// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
// 侧边导航栏index

activeKey:3,
// 侧边栏题目加需要跳转的url
tabList:[
  {title:"心理寻助",show:true},
  {title:"政府热线",show:false},
  {title:"寻人启事",show:false},
  {title:"大病求助",show:false},
  {title:"推聊天",show:false},
  {title:"分享",show:false},
  {title:"投诉",show:false},
]
  },
// 改变侧边栏index
changeActive(event){
  this.setData({
    activeKey:event.detail
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
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