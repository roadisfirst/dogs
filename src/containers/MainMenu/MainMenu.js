import React from 'react';
import Logo from '../../components/Logo/Logo';
import TextComponent from '../../components/Text/Text';
import MenuCard from '../../components/MenuCard/MenuCard';

import classes from './MainMenu.css';

function MainMenu() {
    return (
            <section className={classes.MainContainer}>
                <div className={classes.HomeBlock}>
                    <Logo />
                    <TextComponent
                        title={'Hi intern!'}
                        text={'Wellcome to MSI 2021 Front-end test'}>
                    </TextComponent>
                    <p>Let's start using The Dogs Api</p>
                    <div className={classes.MenuCardsContainer}>
                        <MenuCard type={'vote-table'} buttonTitle={'Voting'} />
                        <MenuCard type={'pet-breeds'} buttonTitle={'Breeds'} />
                        <MenuCard type={'images-search'} buttonTitle={'Gallery'} />
                    </div>
                </div>
            </section>
    )
}

export default MainMenu;