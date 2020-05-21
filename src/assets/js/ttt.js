// 实现一个方法或类， 用来解析 http 请求中的 user-agent， 并做出版本大小判断，大于传入的版本时，返回 true ， 其他情况返回 false 。
// 其中， 版本号为x.y.z 符合版本语义化规范，每段版本区间 [0-99]

// 应用举例： 检查当前请求是否来自小米运动，且版本是大于 3.1.0 
// 附：
// 一个正常情况下的 user-agent 实例：
// Mozilla/5.0 (Linux; Android 4.4.4; vivo Xplay Build/KTU84P) 
//AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile 
// Safari/537.36 com.xiaomi.hm.health/32_2.3.6 NetType/WIFI Language/zh_CN

// com.xiaomi.hm.health： 为 App 的 package name，标记当前访问的App来源为 小米运动App
// 32_2.3.6 中的 32 ： 为 build number， 不固定位数的数字
// 2.3.6：为 App 的版本号
// Language/zh_CN ： 为当前语言环境，来自操作系统接口
class Test {
  constructor (userAgent, version, packageName = 'com.xiaomi.hm.health') {
    this.userAgent = userAgent
    this.version = version
    this.packageName = packageName
  }

  verify () {
    let index = this.userAgent.indexOf(this.packageName)
    let temp = this.userAgent.slice(index).split(' ')[0]
    let verifyNum = temp.slice(temp.indexOf('/') + 1)
    let version = verifyNum.split('_')[1]
    this.compareVersion(version, this.version)
  }
  compareVersion (preVersion='', lastVersion='') {
    var sources = preVersion.split('.');
    var dests = lastVersion.split('.');
    var maxL = Math.max(sources.length, dests.length);
    var result = 0;
    for (let i = 0; i < maxL; i++) {  
        let preValue = sources.length>i ? sources[i]:0;
        let preNum = isNaN(Number(preValue)) ? preValue.charCodeAt() : Number(preValue);
        let lastValue = dests.length>i ? dests[i]:0;
        let lastNum =  isNaN(Number(lastValue)) ? lastValue.charCodeAt() : Number(lastValue);
        if (preNum < lastNum) {
            result = false;
            break;
        } else if (preNum > lastNum) { 
            result = true;
            break;
        }
    }
    console.log(result)
    return result;
  }
}
let tt = new Test('Safari/537.36 com.xiaomi.hm.health/32_2.3.6 NetType/WIFI Language/zh_CN', '2.1.0')
tt.verify()
// fuxingwang@huami.com