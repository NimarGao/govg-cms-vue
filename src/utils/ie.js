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
  
module.exports = {  
    isWeChatBrowser: isWeChatBrowser,  
    isQQBrowser: isQQBrowser  
};