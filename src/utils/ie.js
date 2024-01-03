// 微信浏览器判断    
function isWeChatBrowser() {    
    var ua = window.navigator.userAgent.toLowerCase();    
    console.log(ua);    
    return /micromessenger/i.test(ua);    
}    
    
// QQ浏览器判断    
function isQQBrowser() {    
    var ua = window.navigator.userAgent.toLowerCase();    
    console.log(ua);    
    return /qqtheme/i.test(ua);    
}    
  
// 钉钉浏览器判断    
function isDingDingBrowser() {    
    var ua = window.navigator.userAgent.toLowerCase();    
    console.log(ua);    
    return /dingtalk/i.test(ua);    
}    
    
// 飞书浏览器判断    
function isFeiShuBrowser() {    
    var ua = window.navigator.userAgent.toLowerCase();    
    console.log(ua);    
    return /feishu/i.test(ua);    
}   
    
module.exports = {    
    isWeChatBrowser: isWeChatBrowser,    
    isQQBrowser: isQQBrowser, // 注意这里已经修改为英文半角逗号  
    isDingDingBrowser: isDingDingBrowser,    
    isFeiShuBrowser: isFeiShuBrowser // 注意这里已经修改为英文半角逗号  
};