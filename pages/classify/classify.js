// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544434849403&di=73b2cc26ae0d6b2038b6780928f230ff&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F52%2F26%2F77R58PIChU3_1024.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544435329610&di=1ebe552eec603b08c28ffc6affdf32aa&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F96%2F10%2F15961090-64d19170806785eb6337277d72045e87-0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545030067&di=6b958cb9c48ec077815b07cabc9f95ed&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018a2b571b48f26ac7253812d5f50d.png%401280w_1l_2o_100sh.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    interval1: 2000,
    duration: 800, //	滑动动画时长1s
    //分类信息存储
    classify:[
      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545030165&di=9c7c1d901985edcca8132c90857e49d7&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd000baa1cd11728b0266cf18c3fcc3cec3fd2c44.jpg",
        class: '新鲜水果',
        where: 'myFruits',
      },
      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545030314&di=bc51fd0d47d2f57ebbc2171bff030a06&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Feac4b74543a98226198301018082b9014a90eb52.jpg",
        class: '肉类蛋品',
        where: 'myMeat',
      },
      {
        url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544435571052&di=f6b9314ca064bfcbfdb95e9e56ff5ddc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df95348e13badcbef15397645c4c644a8%2F77094b36acaf2edd8a3d38cc871001e9380193c2.jpg",
        class: '新鲜蔬菜',
      },

      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544435686220&di=106ff3dbc144656506e0dccbbe0bbeb4&imgtype=0&src=http%3A%2F%2Fimg5.21food.cn%2Fimg%2Falbum%2F2017%2F9%2F6%2Ffood13453601157047K3.jpg",
        class: '休闲零食',
      },
      {
        url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544435758860&di=c1ff1c2bde9121526a1dcf3fce83a223&imgtype=0&src=http%3A%2F%2Fpic23.photophoto.cn%2F20120517%2F0042040537649108_b.jpg",
        class: '酒水饮料',
      },
      {
        url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1913888618,3125376528&fm=200&gp=0.jpg",
        class: '乳品烘培',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})