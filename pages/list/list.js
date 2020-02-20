// pages/list/list.js
let datas = require('../../datas/list-data');
console.log(typeof datas, datas);
Page({

  data: {
    datas: []
  },


  onLoad: function (options) {
    this.setData({datas: datas.list_data});
  },

  toDetail(event) {
    console.log(event);
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },

  carouselToDetail(event) {
    let id = event.target.dataset.detailid;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  }
})