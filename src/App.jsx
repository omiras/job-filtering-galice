
import { useState } from 'react'
import './App.css'

// importamos el JSON en un array de objetos
import jobsJSON from "./assets/data.json"

function App() {

  // variable de estado que tiene todos los trabajos
  const [jobs, setJobs] = useState([...jobsJSON]);

  // Otra variable de estado que va almacenar el filtro marcado
  const [filters, setFilters] = useState([])

  const handleClick = (language) => {
    console.log(language);
    setFilters([...filters, language]);
  }

  const handleDeleteFilter = (language) => {
    const newFilters = filters.filter(f => f !== language);
    setFilters(newFilters);
  }

  // Vamos a crear una variable auxiliar para calcular que trabajos tenemos que mostrar en función de los filters seleccionados

  const jobsFiltered = jobs.filter((j) => {
    return filters.every(f => j.languages.includes(f))
  });


  return (
    <>
      <h1>Job Filtering</h1>
      <h2>Filtros activos</h2>
      {filters.map(f => <span onClick={() => handleDeleteFilter(f)}>{f}</span>)}
      {/** Hay que usar adecuadamente el map para iterar por la variable jobs y crear tantos <article> como elementos hay en el array */}
      {jobsFiltered.map(j => (
        <article style={{
          display: 'flex',
          gap: "1rem",
          borderLeft: "2px solid blue",
          marginTop: "1rem"
        }}>
          <div style={{
            marginRight: '1rem'
          }}>
            <img src={j.logo} />
          </div>
          <div>

            <div style={{
            }}>
              <div style={{
                display: "flex",
                gap: "1rem"
              }}>
                <b>   <span>{j.company}</span></b><br />
                <b>  <span>{j.contract}</span></b><br />
                <b>  <span>{j.featured}</span></b></div>


              <div>{j.position}</div>
              <div>{j.location}</div>
            </div>
          </div>
          <div>
            {j.languages.map(l => <button onClick={() => handleClick(l)} style={{
              color: "blue",
              padding: 6,
              borderRadius: 6
            }}>{l}</button>)}
          </div>
        </article>
      ))}
    </>
  )
}

export default App
