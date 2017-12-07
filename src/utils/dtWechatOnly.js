const weChatOnly = () => {
  if (navigator.userAgent.match(/MicroMessenger/i) != 'MicroMessenger') {
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE&connect_redirect=1#wechat_redirect';
  }
}

export default weChatOnly;
