import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifContainer } from './Container/GifContainer'

export const GifExpertApp = ({categoryList = []}) => {

    const [categorias, setCategorias] = useState(categoryList )

    // const handleAdd = ()=>{
    //     //setCategorias([...categorias, 'Boku no epicardo'])
    //     setCategorias((categs)=>[...categs,'Boku no Hero'])
    // }
    
    return (
        <>
            <h1>Gif Expert App</h1>
            <hr />
            <AddCategory addGifHandler={setCategorias}></AddCategory>
            <h3>Categorias</h3>
            
            {
                categorias.map( c => {
                   return <GifContainer categoria={c} key={c}></GifContainer>
                })
            }
                
            
        </>
    )
}
