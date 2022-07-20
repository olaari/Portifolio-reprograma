import './Firstsection.css'

import Projetos from "./dados"
function Firstsection() {
    return (
        <div>
            <h1 className='titulo-projeto'> 4 Projetos feitos na Reprograma </h1>
            <div className='container-projetos'>

                {Projetos.map(projeto => {
                    return (
                        <div className="caixa-projeto" key={projeto.id}>
                            <h2>{projeto.name}</h2>
                            <img src={projeto.image} alt="" />
                            <p>{projeto.description}</p>
                            <a href={projeto.linkprojeto} target="_blank">Conheça mais</a>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
export default Firstsection