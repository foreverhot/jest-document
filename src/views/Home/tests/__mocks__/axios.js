export default {
  get(url) {
    // 这里根据请求路径，模拟返回值
    switch (url) {
      case '/ceshi':
        return new Promise(resolve => {
          resolve({
            data: ['测试1', '测试2', '测试3']
          })
        })
    
      default:
        break;
    }
  }
}