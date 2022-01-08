import { createContext, ReactNode, useState, useContext } from "react";

interface I{
    cod: string;
    storeCod: (x: string) => void;
}
export const TaskDbContext =  createContext({} as I);
type AuthContextProviderProps = {
    children: ReactNode;

  }
export function TaskDbProvider(props: AuthContextProviderProps){
    const [cod, setCode] = useState('');

    function storeCod(newCod: string){
            setCode(newCod)
    }
    return(
        <TaskDbContext.Provider 
        value={{    
            storeCod,
            cod
        }}
      >
        {props.children}
      </TaskDbContext.Provider>
    )
}




export const useTaskDb = () => {
    const {storeCod, cod} = useContext(TaskDbContext);
    return {storeCod, cod}
}