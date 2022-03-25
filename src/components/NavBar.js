import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const";
import {observer} from "mobx-react-lite";
import {useHistory, NavLink} from 'react-router-dom'


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
      user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}>TIENDA ONLINE</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style={{color:'aliceblue'}}>
                    <Button variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                    >
                        Administración</Button>
                    <Button variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ms-3"
                    >
                        Salir</Button>
                </Nav>
                :
                <Nav className="ms-auto" style={{color:'aliceblue'}}>
                    <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Autorización</Button>
                </Nav>
            }
        </Navbar>
    );
});

export default NavBar;