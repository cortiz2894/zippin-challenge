import { FC } from "react";
import * as React from "react";
import { DriverType } from "../../interfaces/interfaces";
import DriverItem from './DriverItem'

type Props = {
    drivers: DriverType[]
}

const DriversList: FC<Props> = ({ drivers }) => {
  return (
    <div className='absolute rounded-tr-[40px] w-1/4 bottom-0 overflow-y-auto overflow-x-hidden pt-6 px-6 z-[990] bg-[#3ee9a8] h-[90%] shadow-xl'>
        <p className='mb-6 text-white font-bold text-2xl text-left'>Choferes</p>
        {drivers.map((driver, i) => {
            return(
            <DriverItem {...{driver}} key={i}/>
            )
        })}
    </div>
  );
};

export default DriversList;



               