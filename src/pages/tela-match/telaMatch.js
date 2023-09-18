import React from 'react';
import Filter from './component/filter/Filter';
import ToogleBtn from './component/filter/Toogle.btn';

const TelaMatch = () => {

    const logState = (state) => {
        // Usar o state para fazer o bgl de trocar tela
        console.log("Toggled:", state)
    }

    return (

        <div>
            <div className='inner_header'>
                <ToogleBtn toFilter={logState} />
                <Filter />
            </div>
        </div>
    );
}

export default TelaMatch;
