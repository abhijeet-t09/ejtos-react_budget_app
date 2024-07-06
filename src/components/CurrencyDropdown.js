import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    const dropdownStyle = {
        backgroundColor: 'lightgreen',
        color: 'black',
        marginLeft: '1rem',
        width: '150px',
    };

    const optionStyle = {
        backgroundColor: 'lightgreen',
        color: 'black',
    };

    return (
        <div className='alert alert-secondary'>
            <div className='col-sm'>
                <label htmlFor="currencySelect">Currency:</label>
                <select
                    className="custom-select"
                    id="currencySelect"
                    value={currency}
                    onChange={handleCurrencyChange}
                    style={dropdownStyle}
                >
                    <option style={optionStyle} value="£">£ Pound</option>
                    <option style={optionStyle} value="$">$ Dollar</option>
                    <option style={optionStyle} value="€">€ Euro</option>
                    <option style={optionStyle} value="₹">₹ Rupee</option>
                </select>
                <style jsx>{`
                    .custom-select option:hover {
                        background-color: white;
                        color: black;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default CurrencyDropdown;

// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const CurrencyDropdown = () => {
//     const { currency, dispatch } = useContext(AppContext);

//     const handleCurrencyChange = (event) => {
//         dispatch({
//             type: 'CHG_CURRENCY',
//             payload: event.target.value,
//         });
//     };

//     return (
//         <div className='row mt-3'>
//             <div className='col-sm'>
//                 <label htmlFor="currencySelect">Currency:</label>
//                 <select
//                     className="custom-select"
//                     id="currencySelect"
//                     value={currency}
//                     onChange={handleCurrencyChange}
//                     style={{ marginLeft: '1rem', width: '150px' }}
//                 >
//                     <option value="£">£ Pound</option>
//                     <option value="$">$ Dollar</option>
//                     <option value="€">€ Euro</option>
//                     <option value="₹">₹ Rupee</option>
//                 </select>
//             </div>
//         </div>
//     );
// };

// export default CurrencyDropdown;
