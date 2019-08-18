import React from 'react'
import { shallow} from 'enzyme';
import {SpotsList} from '../../components/SpotsList'
import {spots, filters} from '../fixtures'

test('should render SpotsList with spots',() => {
    const wrapper = shallow(<SpotsList floor='u1' spots={spots} filters={filters} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render SpotsList without spots',() => {
    const wrapper = shallow(<SpotsList floor='u2' spots={spots} filters={filters} />)
    expect(wrapper).toMatchSnapshot()
})

