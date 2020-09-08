'use strict';
import React from 'react';
import './footer.css';

function iniciosesion() {
    return (

        <div className="inicio">
        <p>PAGINAS</p>
        <form className="formulario" />
        <h1> Inicia sesion con facebook</h1>
        <div className="contenedor" />
        <div className="input-contenedor" />
        <img src="https://static.thenounproject.com/png/429-84.png " />
        <input type="text" placeholder="Correo electronico o telefono" />

        <div className="input-contenedor" />
        <img src="https://static.thenounproject.com/png/27264-84.png " />
        <input type="password" placeholder="Contraseña" />
        <input type="submit" value="Iniciar sesion" className="button" />
        </div>

      

    )

}

export default iniciosesion;