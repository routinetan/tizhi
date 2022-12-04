//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
      ageCurrentNumber:30,
      tempData:0
    },
    onLoad: function (options) {

    },
    setNum(e){
    let that=this
      this.setData({
        ageCurrentNumber:that.tempData
      })
     // this.getInputValue(10)
    },
    getInputValue(e) {
      console.log(e,"dss")
      this.setData({
        ageCurrentNumber: e.detail.value
      })
      this.tempData=e.detail.value;
    },
    getCurrentNumberAge(e){  //年龄
      console.log('获取当前current值年龄',e,e.detail.current)
  
      let result = e.detail.current;
      this.setData({
        age:result ,
        ageCurrentNumber:result
      })
    },

})