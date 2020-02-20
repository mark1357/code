Page({ 
  data: {
		userInfo: {}
  },

	handleParent(){
		console.log('父元素');
		// 跳转页面
		wx.switchTab({
			url: '/pages/list/list',
			success(){
				console.log('跳转成功');
			}
		})
	},
  onLoad: function (options) {
		console.log('页面加载完毕');
		console.log(this)
		// 开启定时器，发送ajax请求
		// 获取登录用户信息
		wx.getUserInfo({
			success: (data) => {
				console.log(data);
				this.setData({userInfo: data.userInfo});
			}
		})
  },

  onReady: function () {
		console.log('页面初始化渲染完毕');
  },

  onShow: function () {
		console.log('页面显示完毕');
  },

  onHide: function () {
		console.log('页面隐藏毕');
  },

  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})