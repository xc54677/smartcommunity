// pages/form/form.js
Page({
  data: {
    avatar: '/images/camera/camera.png',
  },
  bindToCamera(){
    wx.navigateTo({
      url: '/pages/camera/camera'
    })
  }
})