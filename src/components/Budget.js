import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value, 10);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (newBudgetValue > 20000) {
            alert("The budget cannot exceed remaining funds £20,000");
        } else if (newBudgetValue < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            setNewBudget(newBudgetValue);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudgetValue
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
