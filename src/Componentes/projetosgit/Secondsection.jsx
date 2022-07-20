import './Secondsection.css'
import { useState, useEffect } from "react"

const Secondsection = () => {
    const [repos, setRepos] = useState([])


    useEffect(() => {
        const getRepo = async () => {
            const response = await fetch('http://api.github.com/users/olaari/repos')
            const data = await response.json()

            setRepos(data)
        }
        getRepo()
    }, []
    )

    return (
        <>
            <h1 className='titulo-segundasection'>Outros Projetos no meu GitHub</h1>
            {repos.map(repo => {
                return (
                    <div className="card-repo" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <a href={repo.html_url} target="_blank">Conheça mais</a>
                    </div>
                )
            })}

        </>
    )
}

export default Secondsection
