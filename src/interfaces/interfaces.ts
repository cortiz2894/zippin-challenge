export type GeometryType = {
    coordinates: number[],
}

export type LocationsType = {
    driver: DriverType | null,
    geometry: GeometryType,
}

export type DriverType = {
    name: string, 
    id: number,
    icon: string,
    color: string,
    destinies: LocationsType[]
}

