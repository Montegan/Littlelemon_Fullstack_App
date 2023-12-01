import { createContext,useEffect,useState} from "react";
import axios from "axios";

export const menuContext = createContext();

export const MenuContextProvider=({children})=>{

    const [foodmenu, setFooodMenu]= useState([]);

    useEffect(() => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => setFooodMenu([res.data]));
    }, []);

    return(
   <menuContext.Provider value={{foodmenu,setFooodMenu}} >
     {children}
   </menuContext.Provider>
    )


}
