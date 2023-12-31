import { useState } from "react";
import './LoginForms.css';

function LoginForms() {
    // ******State (état, données)******
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    // ******Comportements******
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Login: ${login} \nPassword: ${password}`);
    }

    // Récupère la valeur du champs Login pour la mettre dans la variable login du State
    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    }

    // Récupère la valeur du champs Password pour la mettre dans la variable password du State
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    // ******Affichage******
    return (
        <div className="container_loginForms" onSubmit={handleSubmit}>
            <form action="submit" className="form">
                <label htmlFor="inputLogin">Adresse mail</label>
                <input 
                    type="text" 
                    value={login} 
                    id="inputLogin" 
                    autoComplete="username"  
                    onChange={handleChangeLogin}
                />

                <label htmlFor="inputPassword">Mot de passe</label>
                <input 
                    type="password" 
                    value={password} 
                    id="inputPassword" 
                    autoComplete="current-password"  
                    onChange={handleChangePassword}
                />

                <button>Je me connecte</button>
            </form>
        </div>
    )
}

export default LoginForms;