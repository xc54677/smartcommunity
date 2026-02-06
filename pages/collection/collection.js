import api from '../../config/settings'

Page({

  /**
   * 页面的初始数据
   */
  data: {
      dataDict: {
          result: [
          {
            "id": 1,
            "name": "张铁蛋",
            "area": "#19",
            "avatar": "/images/img/b.jpg"
          },
          {
            "id": 2,
            "name": "刘亦菲",
            "area": "#19",
            "avatar": "/images/img/b.jpg"
          }
        ],
        today_count: 66,
      }
  },

  refresh(){
    //加载
    wx.showLoading({
      mask: true
    })
    wx.request({
      url: api.collection,
      method: 'GET',
      success: (res)=>{
        if (res.data.code==100) {
          this.setData({
            dataDict: res.data
          })
        } else {
          wx.showToast({
            title: '网络加载失败'
          })
        }
      },
      complete:()=>{
        wx.hideLoading()
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.refresh();
  },
  //下拉刷新重新加载
  onPullDownRefresh() {
    this.refresh();
  },
  //删除一条记录
  doDeleteRow(e){
    wx.showModal({
      title: '确认是否删除',
      //content: '这是一个模态弹窗',
      complete: (res) => {
        if (res.confirm) {
          //真删除
          var nid = e.currentTarget.dataset.nid
          wx.showLoading({
            title: '删除中',
            mask: true
          })
          wx.request({
              url: api.collection+nid+'/',
              method: 'DELETE',
              success: (res) => {
                //删除完成或没完成, 都刷新页面
                this.refresh()
              },
              complete: () => {
                wx.hideLoading()
              }
          })
        } else if (res.cancel) {
          return
        }
      }
    })
  },
  bindToForm(){
    wx.navigateTo({
      url: '/pages/form/form'
    })
  },
  bindToStatistics(){

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() { this.refresh() },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
})