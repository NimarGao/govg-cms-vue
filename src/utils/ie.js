// 微信浏览器判断
function isWxIE() {  
    var ua = window.navigator.userAgent.toLowerCase();  
    console.log(ua);  
    return /micromessenger/i.test(ua);  
}  
  
module.exports = {  
    isWxIE: isWxIE  
}