import { createContext } from 'react'
import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import PlantLibrary from './PlantLibrary'
import Inspiration from './Inspiration'
//bottom navbar
// import MyPlants from './pages/MyPlants'
// import ToDo from './pages/ToDo'
// import Calendar from './pages/Calendar'
//hamburger menu
// import Grow from './pages/Grow'
// import Plan from './pages/Plan'
// import Plants from './pages/Plants'
// import Stories from './pages/Stories'
// import About from './pages/About'

export type Plant = {
  pid: string
  name: string
  image: string
}

type PlantContextType = {
  plants: Plant[]
}
export const PlantContext = createContext<PlantContextType>({ plants: [] })

function Root() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__menu">
          <Link to="/grow" className="navbar__item">
            Odla
          </Link>
          <Link to="/plan" className="navbar__item">
            Planering
          </Link>
          <Link to="/plants" className="navbar__item">
            Växter
          </Link>
          <Link to="/stories" className="navbar__item">
            Stories
          </Link>
          <Link to="/inspiration" className="navbar__item">
            Inspiration
          </Link>
          <Link to="/about" className="navbar__item">
            Om
          </Link>
        </div>
      </nav>
      <Outlet />
      <nav className="bottom-nav">
        <Link to="/plant-library" className="bottom-nav__item">
          Bibliotek
        </Link>
        <Link to="/my-plants" className="bottom-nav__item">
          Mina växter
        </Link>
        <Link to="/to-do" className="bottom-nav__item">
          Att göra
        </Link>
        <Link to="/calendar" className="bottom-nav__item">
          Kalendar
        </Link>
      </nav>
    </>
  )
}

function App() {
  const imageKeys = ['image1.jpg', 'image2.jpg', 'image3.jpg']
  const images = imageKeys.map((key) => require(`./${key}`).default)

  const router = createHashRouter([
    {
      children: [
        // { element: <Grow />, path: '/grow' },
        // { element: <Plan />, path: '/plan' },
        // { element: <Plants />, path: '/plants' },
        // { element: <Stories />, path: '/stories' },
        // { element: <About />, path: '/about' },
        {
          children: [
            {
              element: (
                <PlantContext.Provider value={{ plants: [] }}>
                  <PlantLibrary />
                </PlantContext.Provider>
              ),
              path: '/',
            },
            // { element: <MyPlants />, path: '/my-plants' },
            // { element: <ToDo />, path: '/to-do' },
            // { element: <Calendar />, path: '/calendar' },
            {
              element: <Inspiration images={images} />,
              path: '/inspiration',
            },
          ],
          element: <Outlet />,
        },
      ],
      element: <Root />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
