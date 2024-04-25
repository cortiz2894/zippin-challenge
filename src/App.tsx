import * as React from 'react'
import './App.css'
import MapCustom from './components/Map/MapCustom'
import {
  TruckOutlined,
} from '@ant-design/icons';
import { DriverType } from './interfaces/interfaces';

const DRIVERS = [
  {
    id:1,
    name: 'Uberto 1',
    icon: 'marker-red.png',
    destinies: []
  },
  {
    id:2,
    name: 'Uberto 2',
    icon: 'marker-green.png',
    destinies: []

  },
  {
    id:3,
    name: 'Uberto 3',
    icon: 'marker-purple.png',
    destinies: []

  },
  {
    id:4,
    name: 'Uberto 4',
    icon: 'marker-blue.png',
    destinies: []

  },
  {
    id:5,
    name: 'Uberto 5',
    icon: 'marker-orange.png',
    destinies: []

  },
]

function App() {
  const [driversList, setDriversList] = React.useState<DriverType[]>(DRIVERS)
  return (
    <>
      <div className='w-[1280px] bg-[#69efc3] pt-5 mb-5 rounded-2xl shadow-xl overflow-hidden'>
        <div className='mb-5 px-6 flex justify-end'>
          <img src='/logo-2.svg' className='w-36'/>
        </div>
        <div className='h-[80vh] w-full relative'>
            <div className='absolute rounded-tr-[40px] w-1/4 bottom-0 overflow-y-auto overflow-x-hiddenpy-6 pt-6 px-6 z-[990] bg-[#3ee9a8] h-[90%] shadow-xl'>
              <p className='mb-6 text-white font-bold text-2xl text-left'>Choferes</p>
                {driversList.map((driver, i) => {
                  return(
                    <div className='rounded-xl mb-4 bg-white p-4 w-full flex' key={i} >
                      <div className='bg-[#ddf4e4] w-[40px] h-[40px] flex items-center justify-center rounded-lg'>
                        <TruckOutlined className='text-[#3ee9a8] text-xl'/>
                      </div>
                      <div className='w-[calc(100%-40px)] pl-3 text-left'>
                        <p className='font-bold text-lg mb-3'>{driver.name}</p>
                        <div>
                          {driver.destinies.length === 0 && <p className='text-xs text-[#8d8d8d]'>Aun no tiene viajes asignados</p>}
                          <>
                            {driver.destinies.map( (destiny, i) => {
                              return(
                                <div key={i} className='flex border-l border-[#3ee9a8] w-full justify-between i-destination relative py-1 px-2'>
                                  <div className='flex flex-col w-1/2 px-2'>
                                    <span className='text-[#8d8d8d] text-xs mb-1'>Desde:</span>
                                    <span className='font-bold text-black text-xs text-ellipsis overflow-hidden'>{destiny.geometry.coordinates[0]}</span>
                                  </div>
                                  <div className='flex flex-col w-1/2 px-2'>
                                    <span className='text-[#8d8d8d] text-xs mb-1'>Hasta:</span>
                                    <span className='font-bold text-black text-xs text-ellipsis overflow-hidden'>{destiny.geometry.coordinates[1]}</span>
                                  </div>
                                </div>
                              )
                            })}
                          </>
                        </div>
                      </div>
                    </div>
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
