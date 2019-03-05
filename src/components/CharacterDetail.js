import React from "react";

const CharacterDetail = ({character}) => {
    if (! character) return null;
    return(
        <dl>
            <dt>Name</dt>
            <dd>{character.name}</dd>
            <dt>Actor</dt>
            <dd>{character.actor}</dd>
            <img src={character.image} alt={character.actor}></img>
        </dl>
        
    )


}

export default CharacterDetail;