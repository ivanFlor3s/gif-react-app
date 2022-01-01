import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        const  {result, waitForNextUpdate} = renderHook( () => useFetchGifs('one punch '))
        const {data, loading} = result.current;

        await waitForNextUpdate()

        expect(data.length).toBe(0)
        expect(loading).toBeTruthy()

    })

    test('debe de retornar un arreglo de mis imagenes y el loading en false', async() => {
        const  {result, waitForNextUpdate} = renderHook( () => useFetchGifs('one punch '))

        await waitForNextUpdate()

        const {data, loading} = result.current;

        expect(data.length).toBe(10)
        expect(loading).toBeFalsy()
    })
    
    
})
