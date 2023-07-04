import React, { PureComponent } from 'react';
import './LoginPage.css';
import LoginForms from '../../components/LoginForms/LoginForms';

function LoginPage() {
    return ( 
        <div className='containerLoginPage'>
            <LoginForms></LoginForms>
        </div> 
    );
}

export default LoginPage;