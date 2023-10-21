import User from './user';

function Greatings() {
  return (
    <h1 className="greeting">
      Olá
      {' '}
      <User />
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
    </h1>
  );
}
export default Greatings;
