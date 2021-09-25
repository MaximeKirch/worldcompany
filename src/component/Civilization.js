import React from 'react';
import CivilizationList from './CivilizationList'

const Civilization = (props) => {

    const {item} = props;


    return (
        <div>

            <h2>{item.name}</h2>
            <img src={item.img_url} alt="blason"/>
            <p>Population: {item.population}</p>
            <p>Monnaie: {item.currency}</p>
            <p>Unité d'élite: {item.unique_unit}</p>
            <p>Meilleure techno: {item.unique_tech}</p>
            <p>Point fort: {item.team_bonus}</p>
            <p>Battle Score: {item.battlescore}</p>
            <table>
            <tr> 
                    <td> Spécificités : </td>

                    {item.civilization_bonus.map((bonus) => {
                
                
                return (
                    <>
                    
                    <td>{bonus}</td>
                    <td>/</td>
                    </>
        )       
        })}
                     </tr>
                </table>

            
        </div>
    );
};

export default Civilization;