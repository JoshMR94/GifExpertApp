import '@testing-library/jest-dom';
import React from "react"; 
import { shallow } from 'enzyme';

import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', ()=> {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories= { setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories= { setCategories }/> );
    });
    
    test('debe mostrar <AddCategory /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Mundo';
        input.simulate('change', { target: { value: value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('NO debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        
        //Simular inputChange
        const value = 'Hello world';
        input.simulate('change', { target: { value: value } });

        //Simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //SetCategories
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        
        //Input valor vacío tras llamar a setCategories
        expect( input.prop('value') ).toBe('');

    });
    
    
    
    
});