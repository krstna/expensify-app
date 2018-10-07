import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

test('should render Login page', () => {
    const wrapper = shallow(<LoginPage startLogin = {() => { }}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin = {startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});