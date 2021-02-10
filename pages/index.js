import {useState} from 'react'
export default Home

function Home() {
    return (
        <div>
        
        <h2>Mais 1 contador</h2>
        <Contador/>
        </div>

    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);

    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )

}

