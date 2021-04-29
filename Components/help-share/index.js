// Components/help-share/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    shareDetail:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ShareMe:function() {
      wx.navigateTo({
        url: "./../../pages/share/share",
      })
    },
    UserShare:function(id) {
      wx.navigateTo({
        url: './../../pages/shareDetail/shareDetail?article_id=' + id,
      })
    }
  },
  lifetimes:{
    attached:function() {
      wx.request({
        url: 'https://applets.cwp.cool/api/user/showuseratall',
        method:'POST',
        success:(res) => {
          console.log(res.data.data.data);
          this.setData({
            shareDetail:res.data.data.data
          })
        }
      })
    }
  }
})
