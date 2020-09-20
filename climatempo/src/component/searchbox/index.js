import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import * as S from './styles'

function Searchbox() {
    return (
        <div>
            <S.Search>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            </S.Search>

        </div>
    );
}

export default Searchbox;