import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import axios from 'axios';
import "./formacaoModal.css"
import InstitutionAdd from './institutionAdd';

// Constante globais (options)
const e_options = [
    { value: "Fundamental I", label: "Fundamental I" },
    { value: "Fundamental II", label: "Fundamental II" },
    { value: "Ensino Médio", label: "Ensino Médio" },
    { value: "Técnico", label: "Técnico" },
    { value: "Bacharelado", label: "Bacharelado" },
    { value: "Licenciatura", label: "Licenciatura" },
    { value: "Especialização", label: "Especialização" },
    { value: "Mestrado", label: "Mestrado" },
    { value: "Doutorado", label: "Doutorado" }
]

const s_options = [
    { value: "Ciencias_Exatas_e_da_Terra", label: "Ciências Exatas e da Terra" },
    { value: "Ciencias_Biologicas", label: "Ciências Biológicas" },
    { value: "Engenharia_ou_Tecnologia", label: "Engenharia ou Tecnologia" },
    { value: "Ciencias_da_Saude", label: "Ciências da Saúde" },
    { value: "Ciencias_Agrarias", label: "Ciências Agrárias" },
    { value: "Ciencias_Sociais", label: "Ciências Sociais" },
    { value: "Ciencias_humanas", label: "Ciências Humanas" },
    { value: "Linguistica", label: "Linguística" },
    { value: "Doutorado", label: "Doutorado" }

]

function Formacao() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [institutionOptions, setInstitutionOptions] = useState([]);
    const [dataInicio, setDataInicio] = useState('');
    const [dataConclusao, setDataConclusao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [inputText, setInputText] = useState('');
    const [inputType, setInputType] = useState('');

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const addInstitution = () => {
        if(!inputText.trim()){
            alert('Digite o nome de uma instituição válida!')
            return
        }

        sessionStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJSb2RyaWdvTHVpcyIsImlhdCI6MTY5NzY1ODY0MiwiZXhwIjoxNjk3NjYyMjQyfQ._q8JQpjFQIvmDYlZtqoFf-1oXpul-FJl7cSM5JGiTIM');
        const accessToken = sessionStorage.getItem('accessToken');

        if (accessToken) {
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            const institutionData = {
                institution_name: inputText,
                institutionss_type: inputType || 'Faculdade',
            };

            axios.post('http://localhost:3000/institution/create', institutionData, config)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error);
                });
        } else {
            alert('Nenhum token disponível');
        }
        };

    useEffect(() => {

        const getOptions = () => {


            sessionStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJSb2RyaWdvTHVpcyIsImlhdCI6MTY5NzY1ODY0MiwiZXhwIjoxNjk3NjYyMjQyfQ._q8JQpjFQIvmDYlZtqoFf-1oXpul-FJl7cSM5JGiTIM'); // Adicionar Token quando possível
            const accessToken = sessionStorage.getItem('accessToken');

            if (accessToken) {
                const config = {
                    headres: {
                        authorization: `Bearer ${accessToken}`
                    }
                }


                axios.get('http://localhost:3000/institution/findAll/0', config) // Por rota do get das instituições (testar também)
                    .then((res) => {
                        const i_data = res.data;
                        const options = i_data.map((institution) => ({
                            value: institution.institution_id,
                            label: institution.institution_name,
                        }));
                        setInstitutionOptions(options);
                    })
                    .catch(error => {
                        console.error(error);
                    });

            } else {
                alert('NÃO TEM TOKEN')
            }

            getOptions();


        }


    }, []);

    return (
        <div>

            <div>
                <button className='p' onClick={openModal}>Adicionar Formação</button>
            </div>

            <Modal
                className='s'
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Adicionar Formação'
            >
                <div>
                    <h1>Adicionar formação</h1>

                    <p>Instituição de Ensino</p>
                    <Select className='r' options={institutionOptions} />
                    <input className='desc' type='Text' placeholder='Não Encontrou a sua? Digite aqui' value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button className='y' onClick={addInstitution}>Adicionar Instituição</button>

<div className='formacao'>
                    <p>Nível de Formação</p>
                    <Select className='r' options={e_options} />

                    <p>Área de Atuação</p>
                    <Select className='r' options={s_options} />

                <div className='datadeinicio'>
                    <p>Data de Início</p>
                    <input
                    className='date'
                        type="date"
                        value={dataInicio}
                        onChange={(e) => setDataInicio(e.target.value)}
                    />
</div>
                <div className='datadetermino'>
                    <p>Data de Conclusão</p>
                    <input
                    className='date'
                        type="date"
                        value={dataConclusao}
                        onChange={(e) => setDataConclusao(e.target.value)}
                    />
</div>
<div className='descricao'>
                    <p>Descrição</p>
                    <textarea
                    className='descr'
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        rows="5"
                        cols="85"
                    /></div>
</div>
                    <button className='botao' onClick={closeModal}>Cancelar</button>
                    <button className='botaosalve' onClick={closeModal}>Salvar</button>

                </div>
            </Modal>
            
        </div>
    );
}

export default Formacao;
