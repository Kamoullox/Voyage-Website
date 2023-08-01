import React, { PureComponent } from 'react';
import './LoginPage.css';
import LoginForms from '../../components/LoginForms/LoginForms';

function LoginPage() {
    return ( 
        <div className='containerLoginPage'>
            <div className="centeredElementLoginPage">
                <div className="titleContainer">
                    <h2>Connexion</h2>
                </div>
                <LoginForms></LoginForms>
            </div>
        </div> 
    );
}

export default LoginPage;