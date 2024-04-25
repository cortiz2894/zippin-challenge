import { FC } from "react";
import * as React from "react";
import { Select } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import { DriverType, LocationsType } from "../../interfaces/interfaces";

type PopupProps = {
	drivers: DriverType[]
	marker: LocationsType;
  onChange: (value: number, option: { driver: DriverType; marker: LocationsType;markerIndex: number;}) => void;
	clearDriver: (index:number) => void;
	index: number
}

const PopupContent: FC<PopupProps> = ({ drivers, onChange, marker, clearDriver, index}) => {

  return (
    <div className="py-2">
        <p className="font-bold text-xl !mt-0 !mb-4">{marker.driver !== null ? 'Chofer asignado' : 'Asignar chofer'} </p>
        {marker.driver !== null ? (
            <div className="bg-[#3ee9a8] shadow rounded-full py-2 px-3 flex w-full justify-between items-center">
            <span className="text-white font-bold">{marker.driver.name}</span>
            <CloseOutlined className="text-white rounded-[100%] p-1 bg-[#08d889]" onClick={() => clearDriver(index)} />
            </div>
        ) : (
            <Select
            placeholder="Seleccionar chofer"
            optionFilterProp="children"
            //@ts-ignore
            onChange={onChange}
            className='w-full'
            showSearch={false}
            options={drivers.map(driver => ({
                value: driver.id,
                label: driver.name,
                driver: driver,
                marker,
                markerIndex: index
            }))}
            />
        )}
    </div>
  );
};

export default PopupContent;