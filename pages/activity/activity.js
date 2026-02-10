import api from '../../config/settings'
Page({
  data: {
    activityList: [

    ]
  },
  onLoad() {
    this.refresh()
  },
  refresh() {
    wx.showLoading({
      mask: true,
    })
    wx.request({
      url: api.activity,
      method: 'GET',
      success: (res) => {
        this.setData({
          activityList: res.data
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },

  onPullDownRefresh() {
    this.refresh();
    wx.stopPullDownRefresh();
  },

})