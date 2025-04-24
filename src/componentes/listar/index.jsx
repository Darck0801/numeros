import React, { useEffect, useState } from 'react'

function App() {
  const [facts, setFacts] = useState([])

  useEffect(() => {
    const numbers = [1, 7, 13, 42, 100] // Puedes modificar esta lista
    const url = `http://numbersapi.com/${numbers.join(',')}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const factsArray = Object.entries(data).map(([number, fact]) => ({
          number,
          fact,
        }))
        setFacts(factsArray)
      })
      .catch((err) => console.error('Error al obtener datos:', err))
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Curiosidades Numéricas 📊</h1>
      <ul>
        {facts.map((item) => (
          <li key={item.number}>
            <strong>{item.number}:</strong> {item.fact}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
