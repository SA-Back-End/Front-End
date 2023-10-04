import React from 'react';
import { styled } from 'styled-components';
import ToogleBtn from './component/filter/Toogle.btn';

import BtnDrop from './component/buttonDropdown/btn-drop';

const TelaMatch = () => {

    const logState = (state) => {
        // Usar o state para fazer o bgl de trocar tela
        console.log("Toggled:", state)
    }

    const actingAreaList = [
        'Ciências Exatas e da Terra',
        'Ciências Biológicas',
        'Engenharia / Tecnologia',
        'Ciências da Saúde',
        'Ciências Agrárias',
        'Ciências Sociais',
        'Ciências Humanas',
        'Lingüística',
        'Letras e Artes',
    ];

    const workTypeList = [
        'Híbrido',
        'Remoto',
        'Presencial'
    ]

    /**
     * 
     * @param {string} item 
     */
    function addItemFilter(item){
        console.log(item)
    }

    return (

        <main>
            <div>
                <Filter>
                    <ToogleBtn toFilter={logState} />
                    <BtnDrop onItemSelect={addItemFilter} btnText={'Área de atuação'} itensList={actingAreaList} />
                    <BtnDrop onItemSelect={addItemFilter} btnText={'Modalidade'} itensList={workTypeList} />
                    <Button type='button' className='btn-filter'> Filtrar </Button>

                </Filter>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </main>
    );
}

const Filter = styled.div`
    display: flex;
    justify-content: flex-start;

    .btn-filter {
        background-color: blue;
        color: white;
    }
`

const Button = styled.button`
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 5px 9px -5px black;
    cursor: pointer;
    height: 30px;
    margin: 0 10px;
    min-width: 100px;
    padding: 0 5px;
`


export default TelaMatch;
