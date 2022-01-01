import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fethc', () => {
    test('debe traer 10 elementos',async() => {
        const result = await getGifs('one punch');

        expect(result.length).toBe(10)
    })

    test('debe traer 0 elementos',async() => {
        const result = await getGifs('');

        expect(result.length).toBe(0)
    })
})