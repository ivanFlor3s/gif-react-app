import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


 
 export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(categoria)
            .then( imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    })
                }, 3000);
               
            })
        
    }, [categoria])
    

    return state


}