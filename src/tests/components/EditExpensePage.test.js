import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expense';

let editExpense, startRemoveExpenses, startEditExpense, history, wrapper;
beforeEach(()=> {
    startEditExpense= jest.fn();
    startRemoveExpenses= jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        startEditExpense= {startEditExpense}
        startRemoveExpenses= {startRemoveExpenses} 
        history={history}
        expense= {expenses[0]}/>);
});

test('should render EditExpensePage correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle startRemoveExpenses', ()=> {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith(expenses[0].id);
});