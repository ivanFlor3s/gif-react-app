import React from 'react'

export const GifExpertApp = () => {

    const categorias = ['HxH', 'DBZ', 'One Piece']
    
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
        </>
    )
}
