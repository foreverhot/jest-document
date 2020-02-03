import { shallowMount } from '@vue/test-utils'
import City from '@/components/City/City'


describe('City.vue', () => {
  it('没有数据时候，展示暂无数据', () => {
    const wrapper = shallowMount(City, {
      propsData: {
        list: []
      }
    })
    const noDataEle = wrapper.find('[data-test="noData"]')
    expect(noDataEle.isVisible()).toBeTruthy()
  })

  it('有数据的时候，展示数据内容，暂无数据隐藏', () => {
    const wrapper = shallowMount(City, {
      propsData: {
        list: ['测试1', '测试2']
      }
    })
    const items = wrapper.findAll('[data-test="item"]')
    const noDataEle = wrapper.find('[data-test="noData"]')
    expect(items.length).toBe(2)
    expect(items.at(0).text()).toBe('测试1')
    expect(items.at(1).text()).toBe('测试2')
    expect(noDataEle.isVisible()).toBeFalsy()
  })

  it('点击列表其中一项，删除该数据', () => {
    const wrapper = shallowMount(City, {
      propsData: {
        list: ['测试1', '测试2']
      }
    })
    const item = wrapper.findAll('[data-test="item"]').at(0)
    item.trigger('click')
    // console.log(wrapper.emitted().delete)
    expect(wrapper.emitted().delete).toBeTruthy()
  })
})