Component({
  data:{
    imageURL:"../../utils/img/bg2.jpg"
  },
  methods:{
    // 拨打电话
    makePhone(){
      wx.makePhoneCall({
        phoneNumber: '11164648498',
        success: (res) => {},
        fail: (res) => {
          wx.showToast({
            icon:"none",
            title: '您取消了拨打此电话',
          })

        },
        complete: (res) => {},
      })
    }

  }
 
})