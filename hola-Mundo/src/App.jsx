//import React from 'react'

import "./App.css";

const App = () => {
  return (
    <div className="CONTENEDOR">
    <nav>
        <h1>MI PROYECTO</h1>
        <ul>
          <li><a href="https://www.nutrik.online/">Pagina saludable</a></li>
          <li>Contactos</li>
          <li>Inicio</li>
          <li>Consejos</li>
        </ul>
  
    </nav>

    <main>
      ,<section className="section">
        <h2 className="title">¿Qué es un proyecto?</h2>
        <p>Un proyecto es un esfuerzo temporal que se lleva a cabo para crear un producto,
          servicio o resultado único. Los proyectos tienen un inicio y un final definidos,
          así como objetivos específicos que deben alcanzarse. Pueden variar en tamaño
          complejidad, desde pequeños proyectos personales hasta grandes iniciativas 
          empresariales.</p>
      </section>

      <section className="section">
        <h3 className="title">¿Cómo se gestiona un proyecto?</h3>
        <p>La gestión de proyectos implica la planificación, organización y control de
          los recursos para alcanzar los objetivos del proyecto. Esto incluye la definición
          de tareas, asignación de responsabilidades, establecimiento de plazos y seguimiento
          del progreso. Las metodologías comunes de gestión de proyectos incluyen Agile,
          Scrum y Waterfall.</p>
      </section>
    </main>

    <aside className="">
          <h4 className="title">Dato Curioso</h4>
          <p>Dormir 8 horas ayuda a procesar mejor los nutrientes.</p>
    </aside>

    <footer>
          <p>Proyecto / juliana</p>
    </footer>
    </div>
  )
}

export default App;
