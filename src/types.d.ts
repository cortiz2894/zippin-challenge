export type EmployeeColumn = {
    name: string, 
    rfc: string,
    mail: string, 
    position: string, 
    discharge_date: Date
}

export type  SearchCriteria = {
    name: string;
    rfc: string;
    status: string;
}

export type Employee = {
    name: string, 
    mother_surname: string,
    father_surname: string,
    age: number,
    born_date: Date,
    gender: string,
    civil_status: string,
    rfc: string,
    address: string,
    mail: string, 
    phone:string,
    position: string, 
    registration_date: Date,
    cancellation_date: Date | null,
}