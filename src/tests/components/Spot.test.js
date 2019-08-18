import React from 'react'
import { shallow} from 'enzyme';
import {Spot} from '../../components/Spot'
import {ownSpot} from '../../actions/spots'
import {spots, filters} from '../fixtures'

const dispatch = jest.fn()


test('should render free Spot correctly', () => {
    const wrapper = shallow(<Spot {...spots[0]} {...filters} dispatch={dispatch}/>)
    expect(wrapper).toMatchSnapshot()
})

test('shoul set number and right', () => {
    const wrapper = shallow(<Spot {...spots[1]} {...filters} dispatch={dispatch}/>)
    const number = wrapper.find('p').at(0)
    expect(number.text()).toBe(spots[1].number.toString())
})

