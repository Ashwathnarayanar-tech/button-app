import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CustomButton from "../CustomButton";

// Configuration
configure({ adapter: new Adapter() })

// test cases
describe('Custom Button', () => {
  const element = shallow(<CustomButton buttonLabel='View Details'/>)
  it('component should render correctly.', () => {
    expect(element).toMatchSnapshot();
  });
  test('Button Label props exist.', () => {
    const buttonLabel = element.find('div span')
    expect(buttonLabel.text()).toBe('View Details')
  })

})
