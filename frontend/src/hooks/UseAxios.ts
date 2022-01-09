import useSwr from 'swr'
import { api } from "../services";


export function useAxios<Data = any, Error = any>(url: string){
    const {data, error, mutate} = useSwr<Data, Error>(
        url, 
        async(url:string)=>{
            const response = await api.get(url);
            return response.data;
        },
        {}
        )
        return {data, error, mutate}
    }

