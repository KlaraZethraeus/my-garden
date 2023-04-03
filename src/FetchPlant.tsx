import React, { useState, useEffect } from 'react'

//Typscript interface describe a plant object, type checking and code readability.
interface Plant {
  pid: number
  // Add properties of a plant here
}
interface Input {
  name: string
}
//added type to plants, to now it's an array of Plant objects
function PlantFetch() {
  const [plants, setPlants] = useState<Plant[]>([])
  const [name, setName] = useState<Input | string>('')
  useEffect(() => {
    // console.log(plants)
  }, [plants])
  //added type to the event parameter in fetchData to know it's a React.MouseEvent<HTMLButtonElement>
  const fetchData = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const token = 'Token 7b131fdd8c36daa4a6927fb9b534f82e77c9466f'
    const search_string = name
    const limit = 40
    const offset = 20

    const response = await fetch(
      `https://open.plantbook.io/api/v1/plant/search?alias=${search_string}&limit=${limit}&offset=${offset}&userplant=false`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }
    )
    const data = await response.json()
    setPlants(data.results)
    console.log(name)
  }

  return (
    <div>
      <h1>Plants</h1>
      <label>
        <input onChange={(event) => setName(event.target.value)} />
      </label>
      <button onClick={fetchData}>Fetch Plants</button>
      <ul>
        {plants.map((plant) => (
          <li key={plant.pid}>{plant.pid}</li>
        ))}
      </ul>
    </div>
  )
}

export default PlantFetch

/* promise all, loop, array
zinnia angustifolia: zinnia, Helianthus, calendula, papaver, cosmos , callistephus, scabiosa, portulaca, dahlia, antirrhinum, lathyrus, glebionis,

*/
