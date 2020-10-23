import React from 'react';
import style from './recipe.module.css';

const Recipe =({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <h2>calories:{Math.round(calories)}</h2>
            <ol>
                {ingredients.map(ingredinet =>(
                    <li>
                        {ingredinet.text}
                    </li>
                ))}
            </ol>
           
            
        </div>
    );
}

export default Recipe;