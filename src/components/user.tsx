const user = {
  firstName: 'Emanuel',
  lastName: 'Marques',
};
function User() {
  return (
    <span>
      {' '}
      { `${user.firstName} ${user.lastName}` }
      {' '}
    </span>
  );
}

export default User;
