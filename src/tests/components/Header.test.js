import React from 'react'
import { shallow} from 'enzyme';
import Header from '../../components/Header'


test('should render Header', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})