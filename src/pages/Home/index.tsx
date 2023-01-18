import { Link } from 'react-router-dom';

const Home = () =>
  <div>
    <h1>Game of Thrones Characters</h1>
    <p>
      Web application listing Game of Thrones characters
    </p>
    <Link to="/characters">Go to characters list</Link>
  </div>;

export default Home;