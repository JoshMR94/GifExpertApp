import '@testing-library/jest-dom';
import React from "react"; 
import { shallow } from 'enzyme';

import getGifs from '../../helpers/getGifs';

describe('Pruebas en getGifs Fetch', ()=> {

    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe( 10 );
    });

    test('debe de estar vacío', async() => {
        
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    });
    

});
