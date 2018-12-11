// pages/class/myList/myList.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Iid:'',
    classifyList:[],
    cart: [],
    cartTotal: 0,
    cartTotalPrice: 0,
    itemList:[],
    myImage:'',
    myPrice:'',
    myIntroduce:'',
    myList:'',
    myId:'',
    myStock:'',
    indicatorDots: true, 
    autoplay: false,
    myPic:''
  },
  //接收主页传过来的id
  myItemList : function (Iid){
    Iid=this.Iid
    this.itemList=app.globalData.classifyList.foodItem;
    for(i of itemList){
      console.log(i.id)
    }
  },
  //跳转去购物车
  gotoCart: function () {
    wx.switchTab({
      url: `/pages/myCart/myCart`,
    })
  },
  //添加到购物车
  ordinInCart: function (Iid) {
    console.log('接收e');
    console.log(Iid);
    let id = Iid.currentTarget.dataset.id;
    console.log('打印id'+id)
    let classifyList = this.data.classifyList;
    let carts = app.globalData.carts;
    
    for (let item of classifyList) {
      console.log(item.id)
      if (item.id == id && item.stock) {
        
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
        } else if (item.selected) {
          app.globalData.carts = carts.filter((cartItem) => {   //filter返回新数组，所以不能用carts接受，
          
            //不然app.globalData.carts不能改变
            return cartItem.id != id;
          });
          console.log("deletesuccess");
          app.globalData.cartTotal--;
          app.globalData.cartTotalPrice -= item.price;
          item.selected = false;
        }
      }

    }
    console.log(this.data.classifyList);
    this.setData({
      cart: app.globalData.carts,
      cartTotal: app.globalData.cartTotal,
      cartTotalPrice: app.globalData.cartTotalPrice,
      classifyList: this.data.classifyList,
    });
    app.globalData.classifyList.myTrump = this.data.classifyList;
    //将信息加入全局的购物车中
    console.log(this.data.classifyList);
    console.log(app.globalData.carts);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Iid: options.Iid
    })
    console.log(this.data.Iid)
    console.log(app.globalData.classifyList.foodItem)
    for (var i of app.globalData.classifyList.foodItem){
      if(i.id==this.data.Iid){
        this.setData({
          myImage:i.image,
          myPrice: i.price,
          myIntroduce: i.introduce,
          myList:i.list,
          myId:i.id,
          myStock:i.stock,
          myPic:i.pic
        })
      }
    }
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
      this.setData({
      cart: app.globalData.carts,
      cartTotal: app.globalData.cartTotal,
      cartTotalPrice: app.globalData.cartTotalPrice,
      classifyList: app.globalData.classifyList.foodItem,
    });
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