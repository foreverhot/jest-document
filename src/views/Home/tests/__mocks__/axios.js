export default {
  get(url) {
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