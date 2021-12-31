import React, {useState} from 'react'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState( ['HxH', 'DBZ', 'One Piece'])
    const handleAdd = ()=>{
        //setCategorias([...categorias, 'Boku no epicardo'])
        setCategorias((categs)=>[...categs,'Boku no Hero'])
    }
    
    return (
        <>
            <h1>Gif Expert App</h1>
            <hr />
            <h3>Categorias</h3>
            <ol>
                { 
                    categorias.map(c => {
                        return <li key={c}>{c}</li>
                    })
                }
                
            </ol>
            <button type='button' onClick={handleAdd}> + Agregar </button>
        </>
    )
}
