import { shallowMount, RouterLinkStub   } from '@vue/test-utils'
import Nav from '@/components/Nav/Nav'

describe('Nav.vue', () => {
  it('默认是有且只有 首页 按钮被选中', () => {
    const wrapper = shallowMount(Nav, { stubs: ['router-link'] })
    const navItemActives = wrapper.findAll('.nav__item_active')
    const navItems = wrapper.findAll('[data-test="navItem"]')
    expect(navItemActives.length).toBe(1)
    expect(navItems.at(0).classes('nav__item_active')).toBeTruthy()
  })

  it('鼠标放到每个导航栏，会有选中状态, 鼠标移出，选中状态消失', () => {
    // 这里test-utils 测试style样式较麻烦，这里改变实现思路
    // 通过js 鼠标放入 增加一个class
    const wrapper = shallowMount(Nav, { stubs: ['router-link'] })
    const navItem = wrapper.findAll('[data-test="navItem"]').at(1)
    navItem.trigger('mouseover')
    expect(navItem.classes('nav__item_hover')).toBeTruthy()
    navItem.trigger('mouseout')
    expect(navItem.classes('nav__item_hover')).toBeFalsy()
  })

  it('测试 机票 路由', () => {
    const wrapper = shallowMount(Nav, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    const routerLinkEl = wrapper.findAll(RouterLinkStub)
    expect(routerLinkEl.at(1).props().to).toBe('/about?page=1')
  })
})
