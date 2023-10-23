import './telaNotificacao.css';
import atriburCargo from './img/atribuir_cargo.svg';
import curtir from './img/curtir.svg';
import excluir from './img/excluir.svg';
import excluirCargo from './img/excluir_cargo.svg';
import match from './img/match.svg';
import seguidor from './img/person.svg';
import projeto from './img/projeto.svg';
import avatar from './img/sugar.avif';
import { useState } from 'react';

function Notificacao() {
    const [click, setClick] = useState(false);
    const [textMatch, setTextMatch] = useState('Curtir de volta');
    const handleClick = () => {
        setClick(!click);
        setTextMatch(click ? 'Curtir de volta' : 'Curtido de volta')
    };
    const estiloBotao = {
        backgroundColor: click ? '#ffd079' : '',
        color: click ? '#000' : ''
    };
    const [click2, setClick2] = useState(false);
    const [textFollow, setTextFollow] = useState('Seguir de volta');
    const handleClick2 = () => {
        setClick2(!click2); setTextFollow(click2 ? 'Seguir de volta' : 'Seguido de volta')
    }
    const estiloBotao2 = {
        color: click2 ? '#000' : '',
        backgroundColor: click2 ? '#ffd079' : ''
    };
    return (
        <div>
            <div>
                <h2>Notificações</h2>
            </div>
            <div className='notifi-box'>
                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={curtir} /> <img className='avatar' src={avatar} /></p>
                    </th>
                    <th>
                        <p className='p-notify'><b>User12231</b> curtiu o cargo <b>"Engenheiro"</b> do seu projeto <b>"Casa"</b>.
                            <span className='text-time'> Há 20min</span>
                            <button className='follow-btn' style={estiloBotao} onClick={handleClick}><b>{textMatch}</b></button>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={match} /> <img className='avatar' src={avatar} /></p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>User1243r</b> e você se curtiram para o projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={curtir} /> <img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>User12231</b> curtiu um atividade do seu projeto <b>"Casa"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={projeto} /> <img className='avatar' src={avatar} /> </p>
                    </th>
                    <th>
                        <p className='p-notify'><b>User1243r</b> comentou em uma atividade do projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                            <button className='follow-btn' style={estiloBotao2} onClick={handleClick2}><b>{textFollow}</b></button>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={seguidor} /> <img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>User12231</b> começou a seguir você.
                            <span className='text-time'> Há 20min</span>
                            </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={projeto} /> <img className='avatar' src={avatar} /> </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>User1243r</b> adicionou uma atividade ao projeto <b>"Back-End"</b>.
                        <span className='text-time'> Há 20min</span>
                    </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={excluir} /> <img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>

                        <p className='p-notify-short'><b>User1243r</b> excluiu o projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p>
                            <img className='icon-role' src={excluirCargo} /> <img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>User1243r</b> excluiu uma atividade do projeto "Back-End".<span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={excluir} /> <img className='avatar' src={avatar} /> </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>User1243r</b> excluiu o projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={atriburCargo} /><img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>User1243r</b> atribuiu você ao cargo "Front-End" do projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>
            </div>
        </div>);
}
export default Notificacao