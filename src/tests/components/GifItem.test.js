import React from "react";
import { shallow } from "enzyme";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en GifItem component', () => {

    
    const [title, url] = ['Mi titulo', 'https://esto+es+una+url.jpg']
    const wrapper = shallow(<GifItem title={title} img={url}></GifItem>)


    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe tener un h4 en el titulo', () => {
        const h3InDoc = wrapper.find('h4')
        expect(h3InDoc.text().trim()).toBe(title.trim())
    })

    test('La imagen debe tener un src igual al url y alt correcto', () => {
        const imgInDoc = wrapper.find('img')
        expect( imgInDoc.props().src).toBe(url)
        //expect( imgInDoc.prop('src')).toBe(url)
        expect(imgInDoc.prop('alt')).toBe(title)
    })
})