import api from '../../config/settings'
Page({
  data: {
    noticeList: [{
        title: '公告标题1',
        create_time: '2026-02-10',
        content: '公告内容描述1, 公告内容描述1, 公告内容描述1', // 可以根据实际情况添加更多内容
        img: '/images/notice/notice1.jpg', // 图片路径，根据实际情况修改
        isExpanded: false, // 是否展开
        isContentTooLong: false // 内容是否过长
      },
      {
        title: '公告标题2',
        create_time: '2024-04-26',
        content: '公告内容描述2, 公告内容描述2, 公告内容描述2', // 可以根据实际情况添加更多内容
        img: '/images/notice/notice1.jpg', // 图片路径，根据实际情况修改
        isExpanded: false,
        isContentTooLong: false
      },
    ],
    maxContentLength: 15 // 内容截断阈值（可根据需求调整）
  },

  // 页面加载完成，向后端发送请求，获取数据
  onLoad() {
    this.refresh()
  },
  refresh() {
    wx.showLoading({
      mask: true,
    })
    wx.request({
      url: api.notice,
      method: 'GET',
      success: (res) => {
        // 核心改动：处理后端返回的数据，初始化每个公告的展开状态和长度判断
        const noticeList = res.data.map(item => {
          // 补充默认字段（防止后端返回数据缺失）
          item.content = item.content || '';
          item.img = item.img || '/images/notice/notice1.jpg';
          // 判断内容是否过长（字符数超过阈值）
          item.isContentTooLong = item.content.length > this.data.maxContentLength;
          // 默认收起
          item.isExpanded = false;
          return item;
        });
        this.setData({
          noticeList: noticeList
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },

  // 新增：切换单个公告的展开/收起状态
  toggleExpand(e) {
    const index = e.currentTarget.dataset.index;
    const noticeList = [...this.data.noticeList]; // 复制数组，避免直接修改原数据
    // 切换对应项的isExpanded状态
    noticeList[index].isExpanded = !noticeList[index].isExpanded;
    this.setData({
      noticeList: noticeList
    })
  },

  //下拉刷新重新加载
  onPullDownRefresh() {
    this.refresh();
    wx.stopPullDownRefresh();
  },

})