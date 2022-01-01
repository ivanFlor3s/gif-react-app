import React from "react";

import { shallow } from "enzyme";
import { GifExpertApp } from "../../gifExpertApp";

describe('Pruebas en componente GifExpertApp', () => {
    
    test('debe de mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp ></GifExpertApp>)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el componente con sus categorias por props', () => {
        const categorias = ['goku', 'veggeta']
        const wrapper = shallow(<GifExpertApp categoryList={categorias}></GifExpertApp>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifContainer').length).toBe(categorias.length)
    })
    
})
