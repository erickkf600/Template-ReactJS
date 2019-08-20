import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
//ICONS
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded'
import GroupRoundedIcon from '@material-ui/icons/GroupRounded'
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { Link } from 'react-router-dom';




function Header() {
    //SIDE MENU -----
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (side, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className="sidebar"
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>    
                                
                <Link to="/" className="link"><ListItem button className="sideItens">
                    <ListItemIcon className="sideIcons"><HomeRoundedIcon className="icon"/></ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem></Link>
                <Link to="addCompra" className="link"><ListItem button className="sideItens">
                    <ListItemIcon className="sideIcons"><CreditCardRoundedIcon className="icon"/></ListItemIcon>
                    <ListItemText primary='Adicionar Compra' />
                </ListItem></Link>
                <Link to="usuarios" className="link"><ListItem button className="sideItens">
                    <ListItemIcon className="sideIcons"><GroupRoundedIcon className="icon"/></ListItemIcon>
                    <ListItemText primary='Usuários' />
                </ListItem></Link>
                <Link to="addUsuario" className="link"><ListItem button className="sideItens">
                    <ListItemIcon className="sideIcons"><GroupAddRoundedIcon className="icon"/></ListItemIcon>
                    <ListItemText primary='Adicionar Usuário' />
                </ListItem></Link>
                <Link to="sair" className="link"><ListItem button className="sideItens">
                    <ListItemIcon className="sideIcons"><ExitToAppRoundedIcon className="icon"/></ListItemIcon>
                    <ListItemText primary='Sair' />
                </ListItem></Link>
            </List>
        </div>
    );

//--------
    return (
            <header>
                <AppBar position="fixed">
                <Toolbar className="header">
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer("left", true)}>
                            <MenuIcon />
                        </IconButton>
                        <span className="ul">
                            <Button color="inherit" id="reload"><AutorenewIcon /></Button>
                            <Typography variant="h6">Nome</Typography>
                        </span>
                    </Toolbar>
                </AppBar>
                {/* SIDE MENU */}
            <div>
                <SwipeableDrawer
                    open={state.left}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)} >
                    {sideList("left")}
                </SwipeableDrawer>
            </div>
            </header>
        );
}
export default Header;

