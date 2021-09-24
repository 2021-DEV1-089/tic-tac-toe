import Board from "./Board";
import { render} from "@testing-library/react";
import {mount, shallow} from "enzyme";

it('Renders without crashing', ()=>{

    let squares = Array(9).fill(null); 
    render(<Board squares={squares}/>);
})

it('Calls onClick event when clicking on a Square', () =>{
    let squares = Array(9).fill('x');
    const onClick = jest.fn();
    const wrapper = shallow(<Board squares={squares} onClick={onClick}/>).childAt(0).dive();
    wrapper.simulate('click');
    expect(onClick).toBeCalledWith(0)
  })