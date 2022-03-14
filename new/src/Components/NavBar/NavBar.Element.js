import styled from 'styled-components'


export const Nav = styled.nav`

`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    background-color: #101522;
    color:#fff;
    align-items: center;
    font-size: 25px;
`
export const LogoHold = styled.div`

`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 860px){
        display: block;
    }
`

export const NavBar = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50px;
        height: 70vh;
        width: 100%;
        background: red;
        left: ${({click}) => (click? 0 : '-100%')};
    }
`
export const NavLinks = styled.il`

`