import Vue, { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Hello from '../src/components/Options.vue'

test('mount component', async () => {
  expect(Hello).toBeTruthy()

  const wrapper = mount(Hello, {
    propsData: {
      count: 4,
    },
  })

  await nextTick()

  expect(wrapper.text()).toContain('4 x 2 = 8')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 3 = 12')

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 4 = 16')
})

test('Uses Vue 2.7 NES Trial version', async () => {
  expect(Vue.version).toContain('-trial')
})
