# 前端自动化测试 jest

## 为什么要去学习自动化测试？
1. 减少代码bug率，代码更健壮，组织逻辑性更好
2. 长期迭代更新的代码更易维护
3. 防止修改其他人或者时间过久的时项目，修改一处，引出其他问题
4. 点亮自身技能，开阔自己的知识面

[![1579489806.jpg](https://i.postimg.cc/K8mzY4bc/1579489806.jpg)](https://postimg.cc/ykrBQ1W2)

## 在项目中使用所需的知识点
1. jest （测试框架）
* 匹配器matchers
* 钩子函数
* 异步代码测试
* mock 函数
* 定时器测试
* snapshot快照测试
* TDD、BDD、单元测试、集成测试（简单了解）

2. Vue Test Utils （ Vue.js官方的单元测试实用工具库）
* 内容不多，最好全部了解一下

3. vue知识


## 简单一个测试用例，熟悉基本用法
```javascript
import add from './index.js'

describe('测试文件', () => {
  it('测试 add 方法，1 + 1 = 2', () => {
    const addSum = add(1, 1)
    expect(addSum).toBe(2)
  })
})
```
### 常用匹配器
* `.toBe(value)：`匹配值，相当于===  
* `.toEqual(value)：`匹配值，只匹配内容不匹配引用，可以用于引用类型的匹配
* `.toBeNull()：`匹配null
* `.toBeUndefined()：`匹配undefined
* `.toBeNaN()：`匹配NaN
* `.toBeTruthy()：`匹配结果为true的值
* `.toBeFalsy()：`匹配结果为false的值
* `.not：`对后续的匹配取反
* ...等等

### 钩子函数
* beforeAll：所有测试之前执行
* afterAll：所有测试执行完之后
* beforeEach：每个测试实例之前执行
* afterEach：每个测试实例完成之后执行
```javascript
import add from './index.js'
beforeAll(() => {
  console.log('---beforeAll---')
})

afterAll(() => {
  console.log('---afterAll---')
})

beforeEach(() => {
  console.log('---beforeEach---')
})

afterEach(() => {
  console.log('---afterEach---')
})

describe('测试文件', () => {
  it('测试 add 方法，1 + 1 = 2', () => {
    const addSum = add(1, 1)
    expect(addSum).toBe(2)
  })

  it('测试 add 方法，2 + 2 = 4', () => {
    const addSum = add(2, 2)
    expect(addSum).toBe(4)
  })
})

/**
 * 执行结果：
 * ---beforeAll---
 * ---beforeEach---
 * ---afterEach----
 * ---beforeEach---
 * ---afterEach----
 * ---afterAll---
 * 
 * /
```

### 异步代码测试
```javascript
// index.js
export function featchData() {
  return axios.get('/ceshi')
}
```
```javascript
// index.test.js
it('测试 featchData', (done) => {
  featchData((data) => {
    //测试data中是否包含code: 200
    expect(data).toMatchObject({
      code: 200
    })
    done()
  })
})
```


### mock 函数

### 定时器测试
```javascript
// index.js
export const timer1 = (callback) => {
  setTimeout(() => {
      callback()
  }, 3000)
}
```

```javascript
// index.test.js
import { timer1 } from './index'

it('使用done，测试定时器', (done) => {
  timer1(() => {
    expect(1).toBe(1)
    done()
  })
})

```

### TDD、BDD、单元测试、集成测试
TDD： Test Driven Development 测试驱动开发
BDD： Behavior Driven Development 行为驱动开发

## Vue Test Utils
```javascript
import { mount, shallowMount } from '@vue/test-utils'
import Foo from './Foo.vue'

describe('Foo', () => {
  it('renders a div', () => {
    const wrapper = mount(Foo)
    expect(wrapper.contains('div')).toBe(true)
  })
})
```


## 博客地址：https://blog.csdn.net/Jsoning/article/details/103878945
