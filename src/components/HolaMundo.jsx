import React, { useState } from "react";

export default function HolaMundo() {

    const [state, setstate] = useState();
    const [checado, setChecado] = useState(true);
    const noSuma = "No se ha hecho la suma";
    var numUno = 26;
    var numDos = 15;
    
    if(checado == true){
        setstate(noSuma)
        setChecado(false)
    }

     function suma(){
        let result = numUno + numDos;
        document.write(result);

    }

    const hacerSuma = () => {
        document.write(suma());
    }


    return (
        <>
        <h1>{state}</h1>
        <button onClick={hacerSuma}>Hacer Suma</button>
        </>
    )
}
