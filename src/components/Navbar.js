import AppBar from "@material-ui/core/AppBar"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"

import { makeStyles } from '@material-ui/core/styles'

import Typography from "@material-ui/core/Typography"
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from "next/link"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
  home: {
    fontFamily: 'cursive',
    cursor: "pointer",
    '&:hover': {
      color:"white"
    }
  },
  icon: {
    marginLeft: '20px',
    cursor: "pointer",
  },
  menuLink: {
    textDecoration: "none",
    color: 'black',
  }
})

export default function Navbar({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link href="/"><Typography variant="h4" edge="start" className={ classes.home } aria-label="home">Recipes</Typography></Link>
        <div className={ classes.spacer }></div>
        <Link href="/create-recipe"><Button variant="contained" color="secondary"><PostAddSharpIcon/> Make new recipe</Button></Link>

        {user && (
          <Avatar src={user.picture} alt={user.displayName} aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit" className={ classes.icon }/>
        )}

        {!user && (
          <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit" className={ classes.icon }>
            <AccountCircle />
          </IconButton>
        )}

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >

        {user && (
          <div>

            <MenuItem onClick={handleClose}><Link href="/profile"><a className={classes.menuLink}>Profile</a></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/logout"><a className={classes.menuLink}>Log Out</a></Link></MenuItem>
          </div>
        )}

        {!user && (

          <MenuItem onClick={handleClose}><Link href="/login"><a className={classes.menuLink}>Log In</a></Link></MenuItem>
        )}
      </Menu>
    </Toolbar>
  </AppBar>
  )}
