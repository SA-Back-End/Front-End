import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import axios from 'axios';

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
    const [institutionTypeOptions, setIntitutionTypeOptions] = useState([]);
    const [dataInicio, setDataInicio] = useState('');
    const [dataConclusao, setDataConclusao] = useState('');
    const [descricao, setDescricao] = useState('');

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    useEffect(() => {
        const getOptions = () => {


            sessionStorage.setItem('accessToken', ''); // Adicionar Token quando possível
            const accessToken = sessionStorage.getItem('accessToken');

            if (accessToken) {
                const config = {
                    headres: {
                        authorization: `Bearer ${accessToken}`
                    }
                }


                axios.get('http://localhost:3000/', config) // Por rota do get das instituições (testar também)
                    .then(res => {
                        const i_data = res.data;

                        const new_i_options = i_data.institution_name;
                        setInstitutionOptions(new_i_options);
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
                <button onClick={openModal}>Adicionar Formação</button>
            </div>
           
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Adicionar Formação'
            >
                <div>
                    <p>Instituição de Ensino</p>
                    <Select options={institutionOptions} />  

                    <p>Nível de Formação</p>
                    <Select options={e_options} />

                    <p>Área de Atuação</p>
                    <Select options={s_options} />

                    <p>Data de Início</p>

                    <input
                        type="date"
                        value={dataInicio}
                        onChange={(e) => setDataInicio(e.target.value)}
                    />

                    <p>Data de Conclusão</p>

                    <input
                        type="date"
                        value={dataConclusao}
                        onChange={(e) => setDataConclusao(e.target.value)}
                    />

                    <p>Descrição</p>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        rows="5"
                        cols="85"
                    />
                </div>

            </Modal>
        </div>
    );
}

export default Formacao;
