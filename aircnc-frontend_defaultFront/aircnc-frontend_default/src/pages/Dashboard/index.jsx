import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

 export function Dashboard() {
    const [spots, setSpots] = useState([]);
    const preview = 'http://localhost:3335/files';

    useEffect(() => {
        async function loadSports() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            console.log(response.data);
            setSpots(response.data);
        }

        loadSports(); // Chamada da função dentro do useEffect
    }, []); // Adicionado array de dependências vazio para executar apenas uma vez

    return (
        <>
            <ul className='spot-list'>
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${preview}/${spot.thumbnail})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$ ${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>
            <Link to='/new'>
                <button className='btn'>Cadastrar novo Spot</button>
            </Link>
        </>
    );
}

export default Dashboard;