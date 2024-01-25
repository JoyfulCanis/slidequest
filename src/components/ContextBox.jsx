import React, { useEffect, useState } from 'react';
import charactersData from '../assets/data/characters.json'

const ContextBox = () => {
    const [picture, setPicture] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    //! WAITING FOR GLOBAL SETTINGS !//
    const findCharacter = () => {
        
        let activeCharacter = charactersData.find(item => item.id === "cat1");
        if (activeCharacter) {
            setPicture(activeCharacter.img)
            setName(activeCharacter.name)
            setText(activeCharacter.text.met0)
        }

    }
    useEffect(() => {
        findCharacter();
    }, []);

    return (
        <div className='context-box'>
            <div className='context-box__picture'>
                <img className='content-box__picture__img'
                src={"/img/cards/" + picture} alt={name} />
                <h2 className='content-box__picture__title'>{name}</h2>
            </div>
            <div className='context-box__text'>
                <p>{text}</p>
            </div>

        </div>
    );
};

export default ContextBox;