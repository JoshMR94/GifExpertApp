import '@testing-library/jest-dom';
import React from "react"; 
import { shallow } from 'enzyme';

import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', ()=> {

    let wrapper;

    const setCategories = () => {};

    beforeEach( () => {
        wrapper = shallow( <AddCategory setCategories= { setCategories }/> );
    });
    
    test('debe mostrar <AddCategory /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
});