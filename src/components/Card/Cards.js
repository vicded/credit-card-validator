import React, {useState} from "react";

import cardBack from '../../assets/bg-card-back.png'

import cardLogo from '../../assets/card-logo.svg'

import './Cards.css'

export const CardFront = (props) => {
    return (
        <>
            <div className="card card-front">
                <img className="card-data__logo" src={cardLogo} alt="" />
                <div className="card-data">
                    <p className="card-data__number">{props.number}</p>
                    <div className="card-footer">
                        <p className="card-data__name">{props.name}</p>
                        <p className="card-data__date">{props.month}/{props.year}</p>
                    </div>
                </div>
            </div>    
        
        </>
    );
};


export const CardBack = (props) => {
    return (
        <>
            <div className="card card-back">
                <p className="card-pin">{props.nip}</p>
            </div>
        </>
    );
}