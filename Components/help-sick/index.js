Component({
  properties: {
   
  },

  data: {
    HelpSickList:[],
  },
  methods: {
    HelpMe:function() {
      wx.navigateTo({
        url: '../../pages/releseSick/releseSick',
      })
    },
  },
  lifetimes:{
    attached:function() {
      wx.request({
        url: 'https://applets.cwp.cool/api/user/showall',
        method:'POST',
        success:(res) => {
          console.log(res);
          this.setData({
            HelpSickList:res.data.data.data
          })
        },
        fail:(res) =>{
          console.log(res);
        }
      })
    }
  },
})
