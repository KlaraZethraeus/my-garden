import { useContext } from 'react'
import FetchPlant from './FetchPlant'
import PlantDetailFetch from './PlantDetailFetch'
import { PlantContext, Plant } from './App'

function PlantLibrary() {
  const { plants } = useContext(PlantContext)

  return (
    <>
      <FetchPlant />
      <PlantDetailFetch />
      <ul>
        {' '}
        {plants.map((plant: Plant) => (
          <li key={plant.pid}>{plant.pid}</li>
        ))}
      </ul>
    </>
  )
}

export default PlantLibrary

/*
from json
 "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": [],
  "": []*/
