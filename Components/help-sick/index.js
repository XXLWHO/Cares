// Components/help-sick/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    HelpMe:function() {
      wx.navigateTo({
        url: '../../pages/releseSick/releseSick',
      })
    },
    UserSick:function() {
      wx.navigateTo({
        url: '../../pages/helpDetail/helpDetail',
      })
    }
  }
})
