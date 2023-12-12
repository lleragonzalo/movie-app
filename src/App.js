import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <Favorites />
      <Footer />
    </div>
  );
}

export default App;
