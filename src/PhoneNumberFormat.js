import React, { useState } from "react";

export function PhoneNumberFormat() {

    const [ inputValue, setInputValue ] = useState()
    
    const phoneNumberInput = (e) => {
        const formattedInput = formattedPhoneNumber(e.target.value)
        setInputValue(formattedInput)
    };

    return(
       <input data-testid="phone-input" onChange={ (e) => phoneNumberInput(e) } type="tel" placeholder="enter the phone number" value={inputValue} />   
    );
}

function formattedPhoneNumber(value) {
    if(!value) return value //just display the value if it is empty

    const phoneNumber = value.replace(/[^\d]/g, '') //all occurances of non-digits
    const phoneNumberLength = phoneNumber.length

    if(phoneNumberLength < 4) { //123
        return phoneNumber
    } 
    if(phoneNumberLength < 7) { //123456
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`
    }
    return  `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}` //12345678910
}

export default PhoneNumberFormat
