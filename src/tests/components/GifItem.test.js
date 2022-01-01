import React from "react";
import { shallow } from "enzyme";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en GifItem component', () => {

    test('Debe mostrar el componente correctamente', () => {
        const [title, url] = ['Mi titulo', 'https://esto+es+una+url.jpg']
        const wrapper = shallow(<GifItem title={title} img={url}></GifItem>)
        expect(wrapper).toMatchSnapshot()
    })
})