import {useState ,useContext,createContext } from "react";




export const MyContext = createContext();


export const MyProvider = ({ children }) => {
  let [valClass,setValue]=("A1");




  function updater(Obj){
    setValue(Obj)
  }

  return <MyContext.Provider value={{valClass, updater}}>
      {children}
    </MyContext.Provider>
  
};

export const useGlobalContext=()=>{
  return useContext(AppContext);
}
