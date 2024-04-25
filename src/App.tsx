import * as React from 'react'
import './App.css'
import MapCustom from './components/Map/MapCustom'
import { DriverType } from './interfaces/interfaces';
import { DRIVERS } from './helpers/constants';
import Header from './components/Header/Header';
import DriversList from './components/Drivers/DriversList';

function App() {
  const [driversList, setDriversList] = React.useState<DriverType[]>(DRIVERS)
  return (
    <>
      <div className='w-[1280px] bg-[#69efc3] pt-5 mb-5 rounded-2xl shadow-xl overflow-hidden'>
       <Header />
        <div className='h-[80vh] w-full relative'>
            <DriversList drivers={driversList} />
            {/* Green Overlay */}
            <div className='absolute  w-1/4 bottom-0 z-[999] h-9 bg-gradient-to-t from-[#3fe9a8] to-[#3fe9a800]'></div>
            <MapCustom drivers={driversList} setDrivers={setDriversList}/>
        </div>
      </div>
    </>
  )
}

export default App
