import React from 'react'
import "./Display.css";

export const Display = ({ hora, minutos, segundos }) => {
    return (
      <>
        <div className="container">
          <div>{hora}</div>
          <div>{minutos}</div>
          <div>{segundos}</div>
        </div>
      </>
    );
}
