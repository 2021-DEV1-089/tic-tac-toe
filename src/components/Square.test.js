import Square from "./Square";
import { render } from "@testing-library/react";

it('renders without crashing', ()=>{
    const onClick = () =>{};
    let value = 'X'
    render(<Square value={value} onClick={onClick} />);
})