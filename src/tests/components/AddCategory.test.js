import react from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente AddCAtegory", () => {
  const addGifHandler = jest.fn();
  let wrapper = shallow(
    <AddCategory addGifHandler={addGifHandler}></AddCategory>
  );

  beforeEach(() => {
    //Para limpiar mis mocks
    jest.clearAllMocks();

    wrapper = shallow(
      <AddCategory addGifHandler={addGifHandler}></AddCategory>
    );
  });

  test("Evaluo que el componente de renderize correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Simulo cambio en input", () => {
    const input = wrapper.find("input");

    //simulo que la caja de texto cambia
    input.simulate("change", { target: { value: "Hola mundo" } });
    console.log(input.props());
    // expect(input.prop('value')).toBe('Hola mundo')
    expect(input.prop("value")).toBe("");
  });

  test("No debe postear informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(addGifHandler).toHaveBeenCalled();
  });

  test("Debe de llamar setCategorias y limpiear la caja de texto", () => {
    //simulo cambio en input
    const inputHtml = wrapper.find("input");
    inputHtml.simulate("change", { target: { value: "Hola input" } });

    //simulo submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(addGifHandler).toHaveBeenCalled();
    expect(addGifHandler).toHaveBeenCalledWith(expect.any(Function))
    expect(inputHtml.props().value).toBe('')
  });
});
