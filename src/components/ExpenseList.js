import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, dispatch, currency } = useContext(AppContext);

    const increaseBudget = (name) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name, cost: 10 },
        });
    };

    const decreaseBudget = (name) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name, cost: 10 },
        });
    };

    const deleteExpense = (id) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    return (
        <div className='table-responsive'>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th scope='col'>Department</th>
                        <th scope='col'>Allocated Budget</th>
                        <th scope='col'>Increase by 10</th>
                        <th scope='col'>Decrease by 10</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{currency}{expense.cost}</td>
                            <td>
                                <button 
                                    className='btn btn-success'
                                    onClick={() => increaseBudget(expense.name)}
                                >
                                    +
                                </button>
                            </td>
                            <td>
                                <button 
                                    className='btn btn-danger'
                                    onClick={() => decreaseBudget(expense.name)}
                                >
                                    -
                                </button>
                            </td>
                            <td>
                                <button 
                                    className='btn btn-outline-dark'
                                    onClick={() => deleteExpense(expense.id)}
                                >
                                    &#x2716;
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;





// import React, { useContext } from 'react';
// import ExpenseItem from './ExpenseItem';
// import { AppContext } from '../context/AppContext';

// const ExpenseList = () => {
//     const { expenses } = useContext(AppContext);

//     return (
//         <table className='table'>
//               <thead className="thead-light">
//             <tr>
//               <th scope="col">Department</th>
//               <th scope="col">Allocated Budget</th>
//               <th scope="col">Increase by 10</th>
//               <th scope="col">Delete</th>
//             </tr>
//           </thead>
//             <tbody>
//             {expenses.map((expense) => (
//                 <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
//             ))}
//             </tbody>
//         </table>
//     );
// };

// export default ExpenseList;