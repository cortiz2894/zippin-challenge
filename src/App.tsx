import * as React from 'react'
import './App.css'
import MapCustom from './components/Map/MapCustom'
import { DriverType } from './interfaces/interfaces';
import DriverItem from './components/DriverItem/DriverItem';
import { DRIVERS } from './helpers/constants';

function App() {
  const [driversList, setDriversList] = React.useState<DriverType[]>(DRIVERS)
  return (
    <>
      <div className='w-[1280px] bg-[#69efc3] pt-5 mb-5 rounded-2xl shadow-xl overflow-hidden'>
        <div className='mb-5 px-6 flex justify-end'>
          <img src='/logo-2.svg' className='w-36'/>
        </div>
        <div className='h-[80vh] w-full relative'>
            <div className='absolute rounded-tr-[40px] w-1/4 bottom-0 overflow-y-auto overflow-x-hidden pt-6 px-6 z-[990] bg-[#3ee9a8] h-[90%] shadow-xl'>
              <p className='mb-6 text-white font-bold text-2xl text-left'>Choferes</p>
                {driversList.map((driver, i) => {
                  return(
                    <DriverItem {...{driver}} key={i}/>
                  )
                })}
            </div>
            {/* Green Overlay */}
            <div className='absolute  w-1/4 bottom-0 z-[999] h-9 bg-gradient-to-t from-[#3fe9a8] to-[#3fe9a800]'></div>
            <MapCustom drivers={driversList} setDrivers={setDriversList}/>
        </div>
      </div>
    </>
  )
}

export default App
