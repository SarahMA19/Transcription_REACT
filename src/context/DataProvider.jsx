import { createContext, useState } from "react";

const DataProvider = props => {
    // declare state variables here
    // we can then set up as a global context accessible by all children
    const [cart, setCart] = useState({audio_length:0.0, transcription_id:0});
    return(
        <DataContext.Provider value={{'cart': cart, 'setCart': setCart}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
export const DataContext = createContext();