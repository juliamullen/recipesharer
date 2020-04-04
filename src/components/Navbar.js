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
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flexGrow: 1,
  },
   home: {
     flexGrow: 1,
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
				<Link href="/"><Typography variant="h4" edge="start" className={classes.home} aria-label="home">Recipes</Typography></Link>
        <Link href="/create-recipe"><Button variant="contained" color="secondary"><PostAddSharpIcon/> Make new recipe</Button></Link>
        
        {user && (
              <Avatar src={user.picture} alt={user.displayName} aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit" />
          )}

        {!user && (
          <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit" >
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
							<Link href="/profile">
								<MenuItem onClick={handleClose}>Profile</MenuItem>
							</Link>
							<Link href="/logout">
								<MenuItem onClick={handleClose}>Log Out</MenuItem>
							</Link>
            </div>
					)}

					{!user && (
						<Link href="/login">
							<MenuItem onClick={handleClose}>Log In</MenuItem>
						</Link>
					)}
				</Menu>
			</Toolbar>
		</AppBar>
	)}
