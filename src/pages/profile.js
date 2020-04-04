import Avatar from "@material-ui/core/Avatar"

function Profile({ user }) {
  return (
    <div>
      <h2>
        <Avatar src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
      </h2>
      <p>This is what we know about you:</p>
      <ul>
        { Object.keys(user).map(key => (
          <li key={key}>{key}: {user[key].toString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
