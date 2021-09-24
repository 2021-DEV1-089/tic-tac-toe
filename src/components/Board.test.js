import Board from "./Board";
import { render} from "@testing-library/react";

it('Renders without crashing', ()=>{
    
    const onClick = () => {}
    let squares = Array(9).fill(null); 
    render(<Board squares={squares} onClick={onClick}/>);
})