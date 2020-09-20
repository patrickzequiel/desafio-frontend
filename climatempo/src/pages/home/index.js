import React from 'react';
import Header from '../../component/header'
import * as S from './styles'
import Searchbox from '../../component/searchbox';

function Home() {
    return (
        <>
            <S.Container>
                <S.Box>
                <Header />
                <Searchbox />
                </S.Box>
            </S.Container>
        </>
    );
}

export default Home;
