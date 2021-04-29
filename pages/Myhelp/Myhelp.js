// pages/Myhelp/Myhelp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myHelpList:[],
    myMissList:[],
    stepValue:3,
    steps:[
			{desc:'待审批'},
			{desc:'审批中'},
			{desc:'已审批'},
			{desc:'发布中'}
    ],
    step:[
			{desc:'待审批'},
			{desc:'审批中'},
			{desc:'未通过'},
    ],
    show:false,
    show: false,
  },

  Myshare:function(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../helpDetail/helpDetail?id='+id,
    })
  },
  // 删除大病求助
  remove:function(e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '你确定删除这篇文章吗?',
      success(res) {
        if (res.confirm) {
         wx.request({
           url: 'https://applets.cwp.cool/api/user/helpdelete',
           method:'POST',
           data:{
             id:e.currentTarget.dataset.id
           },
           success:(res) => {
            that.getList()
           }
         })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //删除寻人启事
  removeMiss:function(e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '你确定删除这篇文章吗?',
      success(res) {
        if (res.confirm) {
         wx.request({
           url: 'https://applets.cwp.cool/api/user/missingdelete',
           method:'POST',
           data:{
             id:e.currentTarget.dataset.id
           },
           success:(res) => {
            that.getMissList()
           }
         })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onLoad:function() {
    this.getList()
  },
  //获取大病求助列表
  getList:function() {
    const openid = wx.getStorageSync('openid')
    wx.request({
      url: 'https://applets.cwp.cool/api/user/helpshow',
      method:'GET',
      data:{
        openid:openid
      },
      success:(res) => {
        console.log(res);
        this.setData({
          myHelpList:res.data.data
        })
      }
    })
  },
  // 展示寻人启事所有
  getMissList:function() {
    const openid = wx.getStorageSync('openid')
    wx.request({
      url: 'https://applets.cwp.cool/api/user/missingshow',
      method:'GET',
      data:{
        openid:openid
      },
      success:(res) => {
        console.log(res);
        this.setData({
          myMissList:res.data.data
        })
      }
    })
  },

  // 点击寻人启示
  search1:function(e) {
    if(e.detail.name == 'a'){
      this.getList()
    }else{
      this.getMissList()
    }
  }
})