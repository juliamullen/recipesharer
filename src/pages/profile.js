import Avatar from "@material-ui/core/Avatar"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  profile: {
    width: '50%',
    margin: '80px auto',
    textAlign: 'center',
    padding: '30px'
  }
})

function Profile({ user }) {
  const userInfo = user ? (
    <div> <Avatar src={user.picture} alt={user.displayName} /><p> Hello, {user.displayName}</p> </div>
  ) : (
    <div> <Avatar/><p>It's nice to meet you, won't you log in?</p> </div>
  )
  const classes = useStyles()
  return (
    <Container>
      <Box className={ classes.profile }>
        <Paper>
          {userInfo}
        </Paper>
      </Box>
    </Container>
  )
}

export default Profile;
