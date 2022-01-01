import React from "react";
import { shallow } from "enzyme";
import { GifContainer } from "../Container/GifContainer";

describe("Test en gif container component", () => {

  test("Pruebo componente Ok", () => {
    const wrapper = shallow(<GifContainer categoria='Nueva categoria'></GifContainer>);
    expect(wrapper).toMatchSnapshot()
  });
  

});
