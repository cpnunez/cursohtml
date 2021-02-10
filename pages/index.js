import {useState} from 'react'
export default Home

function Home() {
    return (
        <div>
        <h1>Teste github + vercel</h1>
        <h2>contador</h2>
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

