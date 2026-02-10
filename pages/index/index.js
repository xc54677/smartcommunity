import api from '../../config/settings'

Page({
  data: {
    banner_list: [{img: '/images/banner/banner1.png'}],
    notice: '社区最大平台上线啦~~'
  },
  // 向后端发送请求，是生命周期，页面加载好了就向后端发送请求获取数据
  onLoad(){
    wx.request({
      url: api.banner,
      method: 'GET',
      success:(res)=>{
        this.setData({
          banner_list: res.data.banner,
          notice: res.data.notice.title
        })
      }
    })
  },
  gotoCollection(){
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  },
  gotoActivity(){
    wx.switchTab({
      url: '/pages/activity/activity',
    })
  },
  gotoFace(){
    wx.navigateTo({
      url: '/pages/face/face',
    })
  },
  gotoVoice(){
    // wx.navigateTo({
    //   url: '/pages/voice/voice',
    // })
    wx.showModal({
      title: '提示',
      content: '该功能模块暂时不开放',
      showCancel: false, // 只显示“确定”按钮
      confirmText: '确定',
      success: (res) => {
        if (res.confirm) {
          // 用户点击“确定”后，弹窗自动关闭，无需额外操作
        }
      }
    })
  },
  gotoHeart(){
    wx.navigateTo({
      url: '/pages/heart/heart',
    })
  },
  gotoGoods(){
    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
})
