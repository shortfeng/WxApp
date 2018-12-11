// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418104845&di=668ee5de3a3b3b6f8ab16a6e2959acb1&imgtype=0&src=http%3A%2F%2Fmmb-toutiao.oss-cn-shanghai.aliyuncs.com%2FtoutiaoImage%2Fa610af483657158f64c7a85342f9ad2f.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418121751&di=57603fae030eaa18cfb42aa793f6e74e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170321%2F7a33ca2222ec4da6bb4f0a8d409b0e5e_th.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418153115&di=b2734244c716f5b1855c44f5b1ed63b8&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181105%2F32446acaa73e44f9995668c7ead37aed.jpeg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    interval1: 2000,
    duration: 800, //	滑动动画时长1s
    //功能模块
    //新品菜
    newGoods: [],
    //经典菜
    classicGoods: [],
    classifyList: [],
  },

  // changeTo: (event) => {
  //   console.log(event);
  //   let where = event.currentTarget.dataset.where;
  //   console.log(where);
  //   if (where === "orderFood") {
  //     wx.switchTab({
  //       url: `/pages/${where}/${where}`,
  //     })
  //   } else {
  //     wx.navigateTo({
  //       // queryString 查询字符串 ?
  //       url: `/pages/class/${where}/${where}`,
  //     });
  //   }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载的时候从easymoc获取全局数据
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c0dd815b37d3f15023ab4b3/WXfood/#!method=get',
      complete: res => {
        console.log(res);
        app.globalData.classifyList = res.data;
        console.log(app.globalData.classifyList);
        this.setData({
          classifyList: app.globalData.classifyList.myTrump,
          newGoods: app.globalData.classifyList.newGoods,
          classicGoods: app.globalData.classifyList.classicGoods,
      });
      },
    });

    
  console.log(111);
  console.log(this.data.classifyList);
  },
  // 添加购物车操作
  ordinInCart: function(e){
    
    console.log(e);
    let id = e.currentTarget.dataset.id;
    let classifyList = this.data.classifyList;
    let carts = app.globalData.carts;
    for(let item of classifyList)
    {
      if (item.id == id  && item.stock) {
        if (!item.selected) {
          console.log("addsuccess");
          carts.push(item);
          app.globalData.cartTotal++;
          app.globalData.cartTotalPrice += item.price;
          item.selected = true;
          wx.showToast({
            title: '已添加到购物车',
            icon: "success",
            duration: 750,
          });
        }else if(item.selected){
          app.globalData.carts = carts.filter((cartItem)=>{   //filter返回新数组，所以不能用carts接受，
                                    //不然app.globalData.carts不能改变
             return cartItem.id !=id;
           }); 
          console.log("deletesuccess");
          app.globalData.cartTotal--;
          app.globalData.cartTotalPrice -= item.price;
          item.selected = false;
        }
      }
      
    }
    console.log( this.data.classifyList);
    this.setData({
			cart : app.globalData.carts,
			cartTotal: app.globalData.cartTotal,
			cartTotalPrice : app.globalData.cartTotalPrice,
			classifyList: this.data.classifyList,
		});
		app.globalData.classifyList.myTrump=this.data.classifyList;
       //将信息加入全局的购物车中
       console.log(this.data.classifyList);
		console.log(app.globalData.carts);
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
  //   this.setData({
  //     classifyList: app.globalData.classifyList.myTrump,
  //     newGoods: app.globalData.classifyList.newGoods,
  //     classicGoods: app.globalData.classifyList.classicGoods,
  // });
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