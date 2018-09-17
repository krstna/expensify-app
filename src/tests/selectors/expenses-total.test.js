import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expense';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('should correctly add up multiple expenses',()=>{
    const totalAmount = selectExpensesTotal(expenses);
    expect(totalAmount).toBe(114195);
});
