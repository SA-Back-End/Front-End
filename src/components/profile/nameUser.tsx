import { useEffect, useState } from "react";
import axios from "axios";

export default function NameUser(){
    const [name, setName] = useState('User')

    useEffect(() => {
        fetchData();
    }, []);

//teste consulta nomes na API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://viacep.com.br/ws/01001000/json/');
            setName(response.data.bairro);
        } catch (error) {
            console.error('Erro ao buscar nome de usuário:', error);
        }
    };

    return(
        <div>
            <h1 className='Name'>{name}</h1>
        </div>   
    )
}