import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header-item header-logo">
                <img src="https://quik.co.il/assets/imgs/logo/logo@2x.png" alt="logo" className="logo" />
            </div>
            <div className="header-item header-title">
                <h4>BringBring Development Test - </h4><h4 className="my-info">Einav Bar, einavbar88@gmail.com</h4>
            </div>
        </header>
    )
}

export default Header