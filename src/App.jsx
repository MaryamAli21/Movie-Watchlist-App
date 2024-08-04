
import './App.css';
const App = () => {
  const movies = [
    { name: 'CastAway', watched: true },
    { name: 'CaptainPhilp', watched: false },
    { name: 'LostInTransilation', watched: true },
  ];
    return (
      <>
        <h1>Watched Movies</h1>
        <ul>
          {movies.map((movie, index) => (
            <li key={index} className={movie.watched ? 'watched' : 'not-watched'}>
              {movie.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  export default App;