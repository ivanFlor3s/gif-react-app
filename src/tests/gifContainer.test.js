import React from "react";
import { shallow } from "enzyme";
import { GifContainer } from "../Container/GifContainer";
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock("../hooks/useFetchGifs");

describe("Test en gif container component", () => {
  test("Pruebo componente Ok", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(
      <GifContainer categoria="Nueva categoria"></GifContainer>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe demostrar items cuando se cargan imagenes con nuestro UseFetchGifs", () => {
    const gifsResult = [
        {id: 'abc', url:'https://localhost/asd.jpg', title:'qti'},
        {id: 'cba', url:'https://localhost/cba.jpg', title:'qtiCba'}
    ]
    useFetchGifs.mockReturnValue({
      data: gifsResult,
      loading: false,
    });
    const wrapper = shallow(
      <GifContainer categoria="Nueva categoria"></GifContainer>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifItem').length).toBe(gifsResult.length)
  });
});
