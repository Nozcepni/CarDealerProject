import React from 'react';

const Input = (props) => {

    const{label,error,type,name,className,onChange} = props

    const compare = () =>{
        const check = name.localeCompare("checkbox");

        if(check === 0){
            return true;
        }                                               // checkbox'ın kutucugu ve label'ı üst üste biniyordu eğer gelen checkbox ise kutucuğa 
                                                        //margin veriyorum
    }

    return (        
        <div>
            <label>{label}</label>
           {compare() ?
            <input style={{marginLeft:'10px'}} type={type} name={name} className={className} onChange={onChange}></input> : 
            <input type={type} name={name} className={className} onChange={onChange}></input> } 
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    );
};

export default Input;