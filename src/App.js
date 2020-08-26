import React, {useState} from 'react';

import { Btn } from "./component/Btn";
import { Display } from './component/Display';

function App() {

  const [time, setTime] = useState({ hora:0, minutos:0 , segundos:0 })

  const inicio = ()=>{
    corre();
    setInterval(corre,1000);
  }
  

    let actualizaHora= time.hora;
    let actualizaMinutos = time.minutos;
    let actualizaSegundo = time.segundos;

  const corre = ()=>{
    if (actualizaMinutos === 60){
      actualizaHora++;
      actualizaMinutos = 0;
    }
    if (actualizaSegundo === 60){
      actualizaMinutos++;
      actualizaSegundo = 0;
    }
    actualizaSegundo++;
    return setTime({
      hora: actualizaHora,
      minutos: actualizaMinutos,
      segundos: actualizaSegundo,
    });
  }

  return (
    <>
    < Display { ...time }/>
     <Btn inicio = { inicio }/>
    </>
  );
}

export default App;
