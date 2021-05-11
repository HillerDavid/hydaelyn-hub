import './style.css';
import { useState, useEffect } from 'react';
import API from '../../utils/API';

const CharacterCard = () => {

    const [isLoading, setLoading] = useState(true);
    const [character, setCharacter] = useState();

    useEffect(() => {
        API.searchCharacter("kalim arri").then(response => {
            setCharacter(response.data);
            setLoading(false);
        })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{character.Name}</h1>
        </div>
    )

}

export default CharacterCard;