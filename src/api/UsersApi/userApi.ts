import CRUDapi from "../CRUDApi/CRUDapi";
import { User } from "@/components/UsersManager/UsersManager.types";


export const listUsers = () => {
    CRUDapi.get<{ users: User[] }>('/user/all').then((res)=> res.data.users)
}

export const createUser = (user:User) => {
    return CRUDapi.post<{user:User}>('/user',user).then((res)=>res.data)
}

export const deleteUser = (id: string) => {
    return CRUDapi.delete(`/user/${id}`)
}