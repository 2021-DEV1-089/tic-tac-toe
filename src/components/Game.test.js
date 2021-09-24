import Game from "./Game";
import { render } from "@testing-library/react";
import {shallow} from 'enzyme';

it('Renders without crashing', ()=>{
   shallow(<Game/>); 
});