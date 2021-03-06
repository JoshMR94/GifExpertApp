import '@testing-library/jest-dom';
import React from "react"; 

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    const category = 'Pokémon';
    /*
    let wrapper = shallow( <GifGrid category= { category } /> );

    beforeEach( () => {
        wrapper = shallow( <GifGrid category= { category } /> );
    });
    */

    test('debe mostrar <GifGrid /> correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category= { category } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        //Crearemos un mock que apunte al archivo que queremos falsear
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category= { category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
    

})