import useSwr from 'swr'
import { api } from "../services";


export function useAxios<Data = any, Error = any>(url: string){
    const {data, error} = useSwr<Data, Error>(
        url, 
        async(url:string)=>{
            const response = await api.get(url);
            const {data} = response
            return data;
        }
        )
        return {data, error}
    }

