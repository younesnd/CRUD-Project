import CRUDapi from "./CRUDapi";

export type UsersExpData = {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;
}


export type CRUDapiResponse ={
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export type Geo = {
    lat: string;
    lng: string;
}

export type Company ={
    name: string;
    catchPhrase: string;
    bs: string;
}
const URLS = {
    fetchCRUDUrl: 'http://localhost:4000/api/usersExp/all',
};


 const fetchCRUDApi = () => {
    return CRUDapi.get<UsersExpData[]>(URLS.fetchCRUDUrl)
}

export default fetchCRUDApi


