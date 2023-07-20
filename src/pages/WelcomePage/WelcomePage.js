import React from 'react';
import LoginForms from '../../components/LoginForms/LoginForms';
import './WelcomePage.css';
import { Outlet, Link } from "react-router-dom";





function WelcomePage() {

    // ******State (état, données)******


    // ******Comportements******

    
    // ******Affichage******
    return (
        <div className='containerWelcomePage'>
            <div className="centeredElementWelcomePage">
                <div className="titleContainer">
                    <h2 id='friends'>Friends</h2>
                    <h2 id='trip'>Trip</h2>
                </div>
                <div className="btnContainer">
                    <button className='buttonStyle'>
                        <Link to="/Voyage-Website/Login">            
                            Connexion
                        </Link>
                    </button>
                    <button className="buttonStyle">
                        <Link to="/Voyage-Website/Registration">
                            Inscription
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default WelcomePage;