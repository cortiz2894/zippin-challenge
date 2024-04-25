import { useState, FC } from "react";
import * as React from "react";
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MARKERS_DEFAULT } from "../../helpers/constants";
import { Select } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import { DriverType, LocationsType } from "../../interfaces/interfaces";
import PopupContent from "./PopupContent";

type MapProps = {
  drivers: DriverType[];
  setDrivers: React.Dispatch<React.SetStateAction<DriverType[]>>;
}

const MapCustom: FC<MapProps> = ({ drivers, setDrivers }) => {
  const [markers, setMarkers] = useState<LocationsType[]>(MARKERS_DEFAULT);

  const replaceArray = 
  (index: number, newItem: DriverType | LocationsType, prevArray: (DriverType | LocationsType)[])=> {
    const newArray = [...prevArray];
    newArray[index] = newItem;
    return newArray;
  };

  const clearDriver = (index: number) => {
    const actualMarker:LocationsType = markers[index];
    if (!actualMarker.driver) return;

    const driverIdToRemove = actualMarker.driver.id;

    const updatedDrivers = drivers.map((driver: DriverType) => {
      if (driver.id === driverIdToRemove) {
        const updatedDestinies = driver.destinies.filter(destiny => destiny !== actualMarker);
        return { ...driver, destinies: updatedDestinies };
      }
      return driver;
    });

    setDrivers(updatedDrivers);
    if(actualMarker.driver !== null) {
      actualMarker.driver = null;
    }
    setMarkers(replaceArray(index, actualMarker, markers) as LocationsType[]);
  };

  const onChange = (value: number, option: { driver: DriverType; marker: LocationsType; markerIndex: number }) => {
    option.driver.destinies.push(option.marker);
    option.marker.driver = option.driver;
    setDrivers(replaceArray(value - 1, option.driver, drivers) as DriverType[]);
    setMarkers(replaceArray(option.markerIndex, option.marker, markers) as LocationsType[]);
  };

  return (
    <MapContainer
      center={{ lat: -33.8678, lng: 151.21 }}
      zoom={13}
      maxZoom={16}
      style={{ height: "100%" }}
    >
      <TileLayer
        url={"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"}
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      {markers.map((marker, index) => {
        const customIcon = L.icon({
          iconUrl: marker.driver ? marker.driver.icon : './marker-default.png',
          iconSize: [60, 60],
          iconAnchor: [30, 12]
        });

        return(
          <Marker
            icon={customIcon}
            key={index}
            // I tried to pass it in this way but somehow I get an TS error xP
            // position={marker.geometry.coordinates}
            position={[marker.geometry.coordinates[0], marker.geometry.coordinates[1]]}
          >
            <Popup>
              <PopupContent {...{ drivers, marker, onChange, clearDriver, index }} />
            </Popup>
          </Marker>
        )})}
    </MapContainer>
  );
};

export default MapCustom;
