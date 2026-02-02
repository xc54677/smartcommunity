import api from '../../config/settings'

Page({

  /** * 页面的初始数据 */
  data: {
    second:3,
    img:'/images/bg/splash.png'
  },
  doJummp(){
    //点击跳转到首页
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /** * 生命周期函数--监听页面加载 */
  onLoad(options) {
    wx.request({
      url: api.welcome,
      method:'GET',
      success:(res)=>{
        if(res.data.code==100){
          this.setData({
            img:res.data.result
          })
        }else{
          wx.showToast({
            title: '网络请求异常',
          })
        }
      }
    })
    // 启动定时器，倒计时
    var timer = setInterval(()=>{
      if (this.data.second<=0) {
        //把定时器清除
        clearInterval(timer)
        //点击跳转到首页
        this.doJummp()
      } else {
        this.setData({
          second:this.data.second-1
        })
      }
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})