import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ toggleAuth }) {
    const navigate = useNavigate();

    function signIn() {
        toggleAuth(true);
        navigate('/');
    }

    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button type="button" onClick={signIn}>Inloggen</button>
        </section>
    );
}

export default Login;