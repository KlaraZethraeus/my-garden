import { useState, useEffect } from 'react'

interface PlantDetail {
  pid: string
  display_pid: string
  alias: string
  category: string
  max_light_mmol: number
  min_light_mmol: number
  max_light_lux: number
  min_light_lux: number
  max_temp: number
  min_temp: number
  max_env_humid: number
  min_env_humid: number
  max_soil_moist: number
  min_soil_moist: number
  max_soil_ec: number
  min_soil_ec: number
  image_url: string
}

function PlantDetailFetch() {
  const [plantDetail, setPlantDetail] = useState<PlantDetail | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const token = 'Token 7b131fdd8c36daa4a6927fb9b534f82e77c9466f'
    const pid = 'acer pseudoplatanus'

    const response = await fetch(
      `https://open.plantbook.io/api/v1/plant/detail/${encodeURIComponent(
        pid
      )}/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }
    )
    const data = await response.json()
    setPlantDetail(data)
  }

  if (!plantDetail) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{plantDetail.display_pid}</h1>
      <img src={plantDetail.image_url} alt={plantDetail.display_pid} />
      <p>Category: {plantDetail.category}</p>
      <p>
        Light: {plantDetail.min_light_lux}-{plantDetail.max_light_lux} lux
      </p>
      <p>
        Temperature: {plantDetail.min_temp}-{plantDetail.max_temp} °C
      </p>
      <p>
        Environment Humidity: {plantDetail.min_env_humid}-
        {plantDetail.max_env_humid}%
      </p>
      <p>
        Soil Moisture: {plantDetail.min_soil_moist}-{plantDetail.max_soil_moist}
        %
      </p>
      <p>
        Soil EC: {plantDetail.min_soil_ec}-{plantDetail.max_soil_ec} µS/cm
      </p>
    </div>
  )
}

export default PlantDetailFetch
