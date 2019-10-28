/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

class WxgamePlatform {

  name = 'wxgame'

  login(func) {
    console.log("登陆微信");
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          console.log(res);
          func(res);
          resolve(res);
        }
      })
    })
  }

  //设置帧率
  setPreferredFramesPerSecond(fps) {
    wx.setPreferredFramesPerSecond(fps);
  }

  //设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
  setKeepScreenOn() {
    wx.setKeepScreenOn({
      keepScreenOn: true
    });
  }

  //监听内存不足告警
  onMemoryWarning(func) {
    wx.onMemoryWarning(function (level) {
      console.error('内存不足了！-->' + level);
      // wx.showModal({
      //   title: '提示',
      //   content: '当前内存不足 警告'
      // })
    });
  }

  //设置调试
  setEnableDebug(enableDebug) {
    wx.setEnableDebug({
      enableDebug: enableDebug,
    })
  }

  //加速回收
  triggerGC() {
    wx.triggerGC();
    console.log("微信加速GC 回收！");
  }

  getUserInfo() {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        withCredentials: true,
        success: function (res) {
          // var userInfo = res.userInfo
          // var nickName = userInfo.nickName
          // var avatarUrl = userInfo.avatarUrl
          // var gender = userInfo.gender //性别 0：未知、1：男、2：女
          // var province = userInfo.province
          // var city = userInfo.city
          // var country = userInfo.country
          // resolve(userInfo);
          resolve(res);
        }
      })
    })
  }

  getSystemInfo(obj) {
    wx.getSystemInfo(obj);
  }

  //创建用户获取按钮
  createUserInfoButton(obj) {
    return new Promise((resolve, reject) => {
      let c = wx.createUserInfoButton(obj);
      resolve(c);
    })
  }

  onShow(func) {
    wx.onShow(func);
    // wx.offTouchMove();
  }

  showShareMenu(wst) {
    wx.showShareMenu({
      withShareTicket: wst
    });
  }

  offShow(func) {
    wx.offShow(func);
  }
  //获取小程序的启动参数
  getLaunchOptionsSync() {
    return new Promise((resolve, reject) => {
      let c = wx.getLaunchOptionsSync();
      resolve(c);
    });
  }

  onHide(func) {
    wx.onHide(func);
  }

  offHide(func) {
    wx.offHide(func);
  }

  onShareAppMessage(func) {
    wx.onShareAppMessage(func);
  }

  shareAppMessage(obj) {
    wx.shareAppMessage(obj);
  }

  getShareInfo(obj) {
    wx.getShareInfo(obj);
  }

  showModal(obj) {
    wx.showModal(obj);
  }

  //设置系统剪贴板的内容
  setClipboardData(obj) {
    wx.setClipboardData(obj);
  }

  //websocket
  connectSocket(obj) {
    return wx.connectSocket(obj);
  }

  //
  onSocketOpen(func) {
    wx.onSocketOpen(func);
  }

  //
  sendSocketMessage(data) {
    wx.sendSocketMessage({
      data: data
    })
  }

  //
  onSocketMessage(func) {
    wx.onSocketMessage(func);
  }

  //创建内部 audio 上下文 InnerAudioContext 对象。
  createInnerAudioContext() {
    return wx.createInnerAudioContext();
  }

  //创建视频组建
  createVideo(info){
    return wx.createVideo(info);
  }

  openDataContext = new WxgameOpenDataContext();
}

class WxgameOpenDataContext {

  createDisplayObject(type, width, height) {
    const bitmapdata = new egret.BitmapData(sharedCanvas);
    bitmapdata.$deleteSource = false;
    const texture = new egret.Texture();
    texture._setBitmapData(bitmapdata);
    const bitmap = new egret.Bitmap(texture);
    bitmap.width = width;
    bitmap.height = height;

    if (egret.Capabilities.renderMode == "webgl") {
      const renderContext = egret.wxgame.WebGLRenderContext.getInstance();
      const context = renderContext.context;
      ////需要用到最新的微信版本
      ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
      ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
      if (!context.wxBindCanvasTexture) {
        egret.startTick((timeStarmp) => {
          egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
          bitmapdata.webGLTexture = null;
          return false;
        }, this);
      }
    }
    return bitmap;
  }


  postMessage(data) {
    const openDataContext = wx.getOpenDataContext();
    openDataContext.postMessage(data);
  }
}


window.platform = new WxgamePlatform();