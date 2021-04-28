Component({
  data:{
    imageURL:"../../utils/img/bg2.jpg"
  },
  methods:{
    goDetail(){
      wx.navigateTo({
        url: '../../Components/help-psyDetail/index',
      })
    }
  }
})