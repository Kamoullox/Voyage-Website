import React from 'react';
import LoginForms from '../../components/LoginForms/LoginForms';
import './WelcomePage.css';





function WelcomePage() {

    // ******State (état, données)******


    // ******Comportements******


    // ******Affichage******
    return (
        <div className='containerWelcomePage'>
            <button className="buttonStyle">Inscription</button>
            <button className='buttonStyle'>Je me connecte</button>
        </div>
    );
}

export default WelcomePage;