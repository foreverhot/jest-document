import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from '@/components/Header/Header'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
let store, mutations

beforeEach(() => {
  // 每次运行测试实例的时候重新生成一个store，避免测试实例之间相互影响
  mutations = {
    addListItem: jest.fn(),
    minusListItem: jest.fn()
  }
  store = new Vuex.Store({
    state: {
      list: []
    },
    mutations
  })
})

describe('Header.vue', () => {
  it('组件含有输入框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBeTruthy()
  })

  it('输入框初始值为空', () => {
    const wrapper = shallowMount(Header)
    const value = wrapper.vm.value
    expect(value).toBe('')
  })

  it('当输入框有内容时，点击 添加 按钮时，数据改变，并清空输入框', () => {
    const wrapper = shallowMount(Header, { store, localVue })
    const input = wrapper.find('[data-test="input"]')
    const button = wrapper.find('[data-test="button"]')

    input.setValue('添加一条数据')
    button.trigger('click')
    expect(mutations.addListItem).toHaveBeenCalled()
    expect(wrapper.vm.value).toBe('')
  })

  it('当输入框没有内容时，点击 添加 按钮时，没反应', () => {
    const wrapper = shallowMount(Header, { store, localVue })
    const input = wrapper.find('[data-test="input"')
    const button = wrapper.find('[data-test="button"]')

    input.setValue('')
    button.trigger('click')
    expect(mutations.addListItem).not.toHaveBeenCalled()
  })

  it('组件发生改变', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })

})