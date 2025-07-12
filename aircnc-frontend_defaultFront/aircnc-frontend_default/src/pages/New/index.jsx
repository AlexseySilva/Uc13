import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import camera from '../../assets/camera.svg';

import './styles.css';

export function New(){
    const [thumbnail, setThumbnail] = useState(null);
    // caminho das imagens na pasta upload do backend
    // const urlThumbnail = `http://localhost:3335/files/${thumbnail}`;
    // varivél preview = 'http://localhost:3335/files/imagem.png'
    // const preview = `${urlThumbnail}/${thumbnail}`;

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail): null;
    }, [thumbnail])

    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers: { user_id }
        })

        navigate('/dashboard');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label 
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})`}}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
            <input type="file" 
            onChange={event => setThumbnail(event.target.files[0])} />    
            <img src={camera} alt="Select img" />
            </label>
            
            <label htmlFor="company">*EMPRESA</label>
            <input type="text" 
             id='company'
             placeholder='Sua empresa incrível'
             value={company}
             onChange={event => setCompany(event.target.value)}/>

            <label htmlFor="techs">*TECNOLOGIAS (separadas por vírgula)</label>
            <input type="text" 
             id='techs'
             placeholder='Quais tecnologias usam?'
             value={techs}
             onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">*VALOR DA DIÁRIA 
                (em branco para GRATUITO) </label>
            <input type="text" 
             id='price'
             placeholder='Valor cobrado por dia'
             value={price}
             onChange={event => setPrice(event.target.value)}/>    

             <button type='submit' className='btn'>Cadastrar</button>
        </form>
    )
}