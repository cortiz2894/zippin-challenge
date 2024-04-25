import { FC } from "react";
import * as React from "react";
import {  TruckOutlined } from '@ant-design/icons';
import { DriverType } from "../../interfaces/interfaces";

type Props = {
	driver: DriverType
}

const DriverItem: FC<Props> = ({ driver }) => {

  return (
    <div className='rounded-xl mb-4 bg-white p-4 w-full flex shadow-sm'>
    <div className='w-[40px] h-[40px] flex relative items-center justify-center rounded-lg overflow-hidden' >
      <div className='absolute w-full h-full opacity-20' style={{background: driver.color}}></div>
      <TruckOutlined className={'text-xl'} style={{color: driver.color}}/>
    </div>
    <div className='w-[calc(100%-40px)] pl-3 text-left'>
      <p className='font-bold text-lg mb-3'>{driver.name}</p>
      <div>
        {driver.destinies.length === 0 && <p className='text-xs text-[#8d8d8d]'>Aun no tiene viajes asignados</p>}
        <>
          {driver.destinies.map( (destiny, i) => {
            return(
              <div key={i} className={`flex border-l w-full justify-between i-destination relative py-1 px-2`} style={{borderColor: driver.color, color: driver.color}}>
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
  );
};

export default DriverItem;



               