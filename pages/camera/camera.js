// pages/camera/camera.js
Page({
  data: {
    backFront: true
  },
  switchCamera() {
    this.setData({
      backFront: !this.data.backFront
    })
  },
  // 拍照takePhoto
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        // 如果当前页面的data中有src属性---》得到的就是图片地址
        // src: res.tempImagePath
        // 咱们要把拍的照片--》返回给上个页面
        var pages = getCurrentPages() // 取到当前打开的所有页面
        var prevPage = pages[pages.length - 2] // 拿到上个页面对象
        prevPage.setData({
          avatar: res.tempImagePath
        })
        // 跳到上个页面
        wx.navigateBack({});
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },

  onLoad(options) {

  },

})