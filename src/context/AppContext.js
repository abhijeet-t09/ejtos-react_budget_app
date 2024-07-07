import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: 'Marketing', cost: 50 },
        { id: 2, name: 'Finance', cost: 300 },
        { id: 3, name: 'Sales', cost: 70 },
        { id: 4, name: 'Human Resource', cost: 40 },
        { id: 5, name: 'IT', cost: 500 },
    ],
    currency: '£',
};

// Reducer
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.name === action.payload.name
                        ? { ...expense, cost: expense.cost + action.payload.cost }
                        : expense
                ),
            };
        case 'RED_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.name === action.payload.name
                        ? { ...expense, cost: expense.cost - action.payload.cost }
                        : expense
                ),
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        case 'SET_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
};

// Create context
export const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};


// // 1. Sets the initial state when the app loads
// const initialState = {
//     budget: 2000,
//     expenses: [
//         { id: "Marketing", name: 'Marketing', cost: 50 },
//         { id: "Finance", name: 'Finance', cost: 300 },
//         { id: "Sales", name: 'Sales', cost: 70 },
//         { id: "Human Resource", name: 'Human Resource', cost: 40 },
//         { id: "IT", name: 'IT', cost: 500 },
//     ],
//     currency: '£'
// };

// // 2. Creates the context this is the thing our components import and use to get the state
// export const AppContext = createContext();

// // 3. Provider component - wraps the components we want to give access to the state
// // Accepts the children, which are the nested(wrapped) components
// export const AppProvider = (props) => {
//     // 4. Sets up the app state. takes a reducer, and an initial state
//     const [state, dispatch] = useReducer(AppReducer, initialState);
//     let remaining = 0;

//     if (state.expenses) {
//             const totalExpenses = state.expenses.reduce((total, item) => {
//             return (total = total + item.cost);
//         }, 0);
//         remaining = state.budget - totalExpenses;
//     }

//     return (
//         <AppContext.Provider
//             value={{
//                 expenses: state.expenses,
//                 budget: state.budget,
//                 remaining: remaining,
//                 dispatch,
//                 currency: state.currency
//             }}
//         >
//             {props.children}
//         </AppContext.Provider>
//     );
// };
