import { createContext } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null)


const storeContextProvider = (props) => {

    const contextValue = {
        food_list
    }

    return  (
        <storeContext.Provider value={contextValue}>
            {props.childern}
        </storeContext.Provider>
    )
}

export default storeContextProvider;