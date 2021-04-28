import provinceData from "../../utils/city-data/province";
import cityData from "../../utils/city-data/city";
import areaData from "../../utils/city-data/area";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    radio: "",
    input_list: [
      {
        title: "失散地点", name: "", type: "digit", autosize: "false",
        btn_show: true, tap: "showPickEare",
        value: ""
      },
      {
        title: "失散日期", name: "", type: "digit", autosize: "false",
        btn_show: true,
        tap: "showPickTime",
        value: ""
      },
      { title: "姓名", name: "", type: "number", autosize: "false" ,
      len:20
    },
      {
        title: "性别", name: "", autosize: "false",
        btn_show: true,
        tap: "showPickGen",
        value: ""
      },
      { title: "年龄", name: "", type: "digit", autosize: "false",
    len:3
    },
      {
        title: "身高", name: "",
        type: "digit", autosize: "false",
        len:6
      },
      {
        title: "特征描述", name: "",
        type: "textarea", autosize: "true",
        len:200
      },
      { title: "失散过程", name: "", type: "textarea", autosize: "true" ,
      len:200},
      {
        title: "家属附言", name: "",
        type: "textarea", autosize: "true",
        len:200
      },
    { title: "联系方式", name: "" ,
    len:11,type:"number"},
    ],
    // 图片
    fileList: [],
    // 地区
    columns: [
      { values: [...provinceData] },
      { values: [...cityData][0] },
      { values: [...areaData][0][0] },
    ],
    minDate: new Date((new Date().getFullYear() - 30), 1, 1).getTime(),
    maxDate: new Date().getTime(),
    currentDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    // 显示选择器
    showPickTime: false,
    showPickEare: false,
    showPickGen: false,
    gen_columns: ["男", "女"]

  },
  // 显示地区选择器
  showPickEare() {
    this.setData({
      showPickEare: true
    })
  },
  hidePickEare() {
    this.setData({
      showPickEare: false
    })
  },
  // 改变地区
  areaChange(event) {
    const { picker, value, index } = event.detail;
    let city_index = value[0].value;
    let area_index = value[1].value;
    let result_city = cityData.findIndex(item => {
      for (const i of item) {
        return i.value.slice(0, 2) === city_index
      }
    })
    let result_area = areaData[result_city].findIndex(item => {
      for (const i of item) {
        return i.value.slice(0, 4) === area_index;
      }
    })
    result_area = result_area === -1 ? 0 : result_area;
    picker.setColumnValues(1, [...cityData][result_city]);
    picker.setColumnValues(2, [...areaData][result_city][result_area]);
  },
  // 确认地区
  areaConfirm(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      showPickEare: false,
      ["input_list[0].value"]: value[0].text + "/" + value[1].text + "/" + value[2].text
    })
  },
  // 显示时间选择器
  showPickTime() {
    this.setData({
      showPickTime: true,
    })
  },
  hidePickTime() {
    this.setData({
      showPickTime: false,
    })
  },
  // 确认时间
  addZero(num) {
    if (parseInt(num) < 10) {
      num = '0' + num;
    }
    return num;
  },
  getTime(data) {
    let dateTime = parseInt(data);
    let oDate = new Date(dateTime),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,
      oDay = oDate.getDate(),
      oTime = oYear + '/' + this.addZero(oMonth) + '/' + this.addZero(oDay) + ' ';
    return oTime;
  },
  timeConfirm(event) {
    let time = this.getTime(event.detail)
    this.setData({
      showPickTime: false,
      ["input_list[1].value"]: time
    });
  },
  // 显示性别
  showPickGen() {
    this.setData({
      showPickGen: true
    })
  },
  hidePickGen() {
    this.setData({
      showPickGen: false
    })
  },
  genConfirm(event) {
    this.setData({
      showPickGen: false,
      ["input_list[3].value"]: event.detail.value
    })
  },
  // 图片上传
  showPickPhoto(){

  },
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    //   filePath: file.url,
    //   name: 'file',
    //   formData: { user: 'test' },
    //   success(res) {
    //     // 上传完成需要更新 fileList
    //     const { fileList = [] } = this.data;
    //     fileList.push({ ...file, url: res.data });
    //     this.setData({ fileList });
    //   },
    // });
    const obj = {
      url: file.url
    }
    this.data.fileList.push(obj)
    this.setData({
      fileList: this.data.fileList
    })
    console.log(this.data.fileList);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})