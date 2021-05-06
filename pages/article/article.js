// pages/article/article.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    MyArticle: [],
    value: '',
    time: '',
    stepValue: 3,
    steps: [{
        desc: '待审批'
      },
      {
        desc: '审批中'
      },
      {
        desc: '已审批'
      },
      {
        desc: '发布中'
      }
    ],
    step: [{
        desc: '待审批'
      },
      {
        desc: '审批中'
      },
      {
        desc: '未通过'
      },
    ],
    show: false,
  },
  remove: function (e) {
    let _this = this;
    wx.showModal({
      title: '提示',
      content: '你确定删除这篇文章吗?',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: 'https://applets.cwp.cool/api/user/articledelete',
            method: 'POST',
            data: {
              article_id: e.currentTarget.dataset.id
            },
            success :(res1) =>{
              _this.getList();
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onClose() {
    this.setData({
      show: false
    });
  },

  Myshare: function () {
    wx.navigateTo({
      url: '../shareDetail/shareDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },

  getList: function () {
    const openid = wx.getStorageSync('openid')
    wx.request({
      url: 'https://applets.cwp.cool/api/user/articleshow',
      data: {
        openid: openid
      },
      success: (res) => {
        console.log(res);
        this.setData({
          MyArticle: res.data.data,
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  removes:function(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: './../shareDetail/shareDetail?article_id='+id,
    })
  }
})