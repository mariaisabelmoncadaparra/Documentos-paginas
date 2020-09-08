'use strict';
import React from 'react';
import './header.css';


function barra() {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-white border border-dark" id="barra_d_navegacion">
            <h1>RECAPITO</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <img id="usuario" src="https://image.flaticon.com/icons/png/128/121/121693.png" width="1px" height="1px" border="1px solid" left="37%" text-align="right"
                        top="37%" align="justify"></img>
                    <h2>ALGUIEN</h2>
                </div>
            </div>
        </nav>
    )
}
export default barra;



