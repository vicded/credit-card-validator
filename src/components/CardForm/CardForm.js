import React, {useState} from "react";

import './CardForm.css'

const CardForm = (props) => {
    const [userData, setUserData]= useState({
        enteredName: '',
        enteredNumber: '',
        enteredYear: '',
        enteredMonth: '',
        enteredCvc: ''
    })

    const nameChangeHandler = (event) => {
        setUserData((prevState) => {
            return {...prevState, enteredName: event.target.value};
        })
        props.onSaveName(userData.enteredName);
    }

    const numberChangeHandler = (event) => {
        setUserData((prevState) => {
            return {...prevState, enteredNumber: event.target.value};
        })
        props.onSaveNumber(userData.enteredNumber);
    }

    const yearChangeHandler = (event) => {
        setUserData((prevState) => {
            return {...prevState, enteredYear: event.target.value};
        })
        props.onSaveYear(userData.enteredYear);
    }
    
    const monthChangeHandler = (event) => {
        setUserData((prevState) => {
            return {...prevState, enteredMonth: event.target.value};
        })
        props.onSaveMonth(userData.enteredMonth);
    }
    
    const cvcChangeHandler = (event) => {
        setUserData((prevState) => {
            return {...prevState, enteredCvc: event.target.value};
        })
        props.onSaveCvc(userData.enteredCvc);
    }

    return (
        <form className="card-form" action="" method="post">
            <label htmlFor="text">cardholder name</label>
            <input onChange={nameChangeHandler} type="text" name="name" id="name" placeholder="e.g. Jane Appleseed"></input>
            <label htmlFor="number">card number</label>
            <input onChange={numberChangeHandler} type="number" name="number" id="number" placeholder="e.g. 1234 5678 9123 0000"></input>
            <div className="form-footer">
                <div>
                    <label htmlFor="date-input">exp. date (MM/YY)</label>
                    <div className="form-date">
                        <input onChange={yearChangeHandler} type="number" name="day" id="year" placeholder="YY"></input>
                        <input onChange={monthChangeHandler} type="number" name="month" id="month" min={1} max={12} placeholder="MM"></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="cvc">cvc</label>
                    <div className="form-date">
                        <input onChange={cvcChangeHandler} type="number" name="cvc" id="cvc" min={0} placeholder="e.g. 123"></input>
                    </div>
                </div>
            </div>
            <button type="submit">Confirm</button>
        </form>
    );
}

export default CardForm;