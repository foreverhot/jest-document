import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home/Home'
import City from '@/components/City/City'
import Float from '@/components/Float/Float'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
let store, mutations

beforeEach(() => {
  jest.useFakeTimers()

  mutations = {
    addListItem(state, name) {
      state.list = state.list.concat(name)
    },
    minusListItem(state, index) {
      state.list.splice(index, 1)
    }
  }

  store = new Vuex.Store({
    state: {
      list: []
    },
    mutations
  })
})

describe('Home.vue', () => {
  it('检查是否有 City 和 Float 组件', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    const city = wrapper.find(City)
    const float = wrapper.find(Float)

    // 判断组件是否存在
    expect(city.exists()).toBeTruthy()
    expect(float.exists()).toBeTruthy()
  })

  it(`
    1. 用户进入界面请求数据
    2. 将数据存储在vuex中
    3. 页面展示数据
    4. 点击图片删除对应数据
  `, (done) => {
      const wrapper = mount(Home, { store, localVue })
      wrapper.vm.$nextTick(() => {
        let items = wrapper.findAll('[data-test="item"]')
        expect(items.length).toBe(3)

        items.at(0).trigger('click')
        items = wrapper.findAll('[data-test="item"]')
        expect(items.length).toBe(2)
        expect(items.at(0).text()).toBe('测试2')
        done()
      })
  })

  it('float 组件2s后显示',(done) => {
    const wrapper = mount(Home, { store, localVue })
    // 验证 setTimeout 要被执行1次
    expect(setTimeout).toHaveBeenCalledTimes(1)
    wrapper.vm.$nextTick(() => {
      jest.runAllTimers()
      const floatEle = wrapper.find(Float)
      expect(floatEle.isVisible()).toBeTruthy()
      done()
    })
  })

})