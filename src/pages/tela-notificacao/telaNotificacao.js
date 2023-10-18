import './telaNotificacao.css';
import seguidor from './img/person.svg'
import avatar from './img/sugar.avif'
import React, { useEffect, useState } from 'react';

var meuBotao = document.getElementById("meuBotao");


function Notificacao() {
    const [classeBotao, setClasseBotao] = useState('botao-padrao');

    return (
        <div>
            <div>
                <h2>Notificações</h2>
            </div>
            <div className='notifi-box'>
                <div>
                    <th><p><img className='icon-cargo' src={seguidor} /><img className='avatar' src={avatar} /></p></th>
                    <th><p className='p-notifica'><b>User12231</b> começou a seguir você.<span className='text-time'> Há 20min</span><button id='button' className='follow-btn button'><b>Seguir de volta</b></button></p></th>
                </div>
                <div>
                    <th><p><img className='icon-cargo' src={seguidor} /><img className='avatar' src={avatar} /></p></th>
                    <th><p className='p-notifica'><b>User12231</b> começou a seguir você.<span className='text-time'> Há 20min</span><button id='button' className='follow-btn button'><b>Seguir de volta</b></button></p></th>
                </div>
            </div>
        </div>
    );
}

export default Notificacao