import { useState } from 'react';

function Home() {
    return <div>
        <h1>Página do seu Lucas </h1>
        <h2>cic >> adm </h2>
        <Contador />
        
        </div>
}

function Contador(){
    const[contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    function resetarContador(){
        setContador(0);
    }
    function subtrairContador(){
        setContador(contador - 1)
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <button onClick={subtrairContador}>Subtrair</button>
            <button onClick={resetarContador}>Resetar</button>
        </div>
    )    

}

export default Home