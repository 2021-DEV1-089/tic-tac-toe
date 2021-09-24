import Board from "./Board";
import { render} from "@testing-library/react";

it('Renders without crashing', ()=>{
    render(<Board/>);
})