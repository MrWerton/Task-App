import { createContext, ReactNode, useState, useContext, EventHandler, FormEventHandler, FormEvent, ChangeEvent } from "react";
import { api } from "../services";

interface I{
    stateMenu: boolean;
    toggleMenu: () => void;
    title: string;
    handleTitle: (e:ChangeEvent<HTMLInputElement>) => void;
    description: string;
    handleDescription: (e:ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e:FormEvent) => void;
    handleEdit: (id:string,title:string, descri:string) => void;
    isId: string;   
    deleteTask: (id: string) => void
    CheckedTask: (id: string) => void;
}

interface Itask{
  title: string,
  description: string,
  state?: boolean,
  _id?: string,
}

export const ModalContext =  createContext({} as I);
type AuthContextProviderProps = {
    children: ReactNode;
}
export function ModalProvider(props: AuthContextProviderProps){
    const [stateMenu, setStateMenu] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isId, setIsId] = useState('');
    const [task, setTask] = useState<Itask>({
      title: '', 
      description: ''
    })
    function handleEdit(id: string,title:string, descri:string){
      setTitle(title);
      setDescription(descri)
      setStateMenu(true)
      setIsId(id)
      console.log(isId)
    }
    async function deleteTask(id: string){
      await api.delete(`/task/${id}`)
    
    }
    async function CheckedTask(id: string){
      await api.patch(`/task/${id}`)
     
    }
    function toggleMenu() {
      if(title){
        setTitle('')
      }
      if(description){
        setDescription('')
      }
        setStateMenu(!stateMenu);
      }
      function handleTitle(e:ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setTitle(value);
      }
      function handleDescription(e:ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value
        setDescription(value);
      }
  
      function onSubmit(e:FormEvent){
        e.preventDefault()
        const Newtask = {
          title: title,
          description: description
        }
        if(isId){
          api.put(`/task/${isId}`, Newtask)
        }else{
          api.post('/task', Newtask)
        }
        toggleMenu()


        setTitle('');
        setDescription('');

      }
    return(
        <ModalContext.Provider 
        value={{    
          description,
          handleDescription,
          stateMenu, 
          toggleMenu, 
          title,
          handleTitle,
          onSubmit,
          handleEdit,
          isId,
          CheckedTask,
          deleteTask

        }}
      >
        {props.children}
      </ModalContext.Provider>
    )
}




export const useModal = () => {
    const {stateMenu,
      toggleMenu,
      handleEdit,
      onSubmit,
      handleTitle,
      title,
      description,
      CheckedTask,
      deleteTask,
      handleDescription} = useContext(ModalContext);
    return {
      stateMenu, 
      toggleMenu,
      handleEdit,
      onSubmit,
      handleTitle,
      title,
      description, 
      CheckedTask,
      deleteTask,
      handleDescription}
}