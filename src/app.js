
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
    
const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4550, createdAt: 5000}));
store.dispatch(addExpense({description: 'Gas Bill',amount: 5000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent',amount: 10000, createdAt: 4000}));

store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses= getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));