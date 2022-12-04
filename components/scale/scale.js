// components/heightAndWeight/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      unit: {
        type: String
      },
      currentNumber: {
        type: Number
      },
      multipleItems: {
        type: Number,
        value: 9
      },
      offset: {
        type: Number,
        value: 4
      }
    },
    observers: {
      "current": function (current) {
        if (current < this.data.offset) {
          this.setData({
            currentNumber: Math.max(this.data.currentNumber + current - this.data.offset, this.data.minNumber)
          })
        } else if (current > this.data.offset) {
          this.setData({
            currentNumber: Math.min(this.data.currentNumber + current - this.data.offset, this.data.maxNumber)
          })
        }
      },
      "currentNumber": function (currentNumber) {
        let arr = []
        for (let l = parseInt(this.data.multipleItems / 2) + this.data.offset; l > 0; l--) {
          arr.push(currentNumber - l >= this.data.minNumber ? currentNumber - l : '')
        }
        arr.push(currentNumber)
  
        for (let l = 1; l <=  parseInt(this.data.multipleItems / 2) + this.data.offset; l++) {
          arr.push(currentNumber + l <= this.data.maxNumber ? currentNumber + l : '')
        }
        this.setData({
          arr,
          current: this.data.offset
        })
  
      }
    },
    attached() {
      this.setData({
        minNumber: this.data.min,
        maxNumber: this.data.max,
        current: 0,
       
        arr: [],
      })
      
    },
    /**
     * 组件的初始数据
     */
    data: {
      minNumber: null,
      maxNumber: null,
      current: 0,
      arr: []
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      getCurrent(e) {
        this.setData({
          current: e.detail.current
        })
        this.triggerEvent('currentNumber', {
          current: this.data.currentNumber
        })
      }
    }
  })