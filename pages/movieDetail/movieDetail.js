// pages/movieDetail/movieDetail.js

let appDatas = getApp();
Page({


  data: {
    movie: {}
  },


  onLoad: function (options) {
    console.log(options);
    this.setData({
      movie: appDatas.data.movies[options.id]
    })
  },
})