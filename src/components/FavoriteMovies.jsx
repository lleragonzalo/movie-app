function FavoriteMovie({ movie, size }) {
    return (
      <img
        className="movie"
        src={movie.Poster}
        alt={movie.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function Favoritemovie() {
    return (
      <div className="carouselFav">
        <FavoriteMovie
            width={200}
            height={300}
            movie={{
            "Title": "John Wick: Chapter 4",
            "Year": "2023",
            "imdbID": "tt10366206",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"  
            }}
        />
        <FavoriteMovie
          width={200}
          height={300}
          movie={{
            "Title": "John Wick: Chapter 3 - Parabellum",
            "Year": "2019",
            "imdbID": "tt6146586",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
        }}
        />
        <FavoriteMovie
          width={200}
          height={300}
          movie={{ 
            "Title": "John Wick",
            "Year": "2014",
             "imdbID" : "MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
          }}
        />
        <FavoriteMovie
          width={200}
          height={300}
          movie={{
            "Title": "John Wick: Chapter 2",
            "Year": "2017",
            "imdbID" : "MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"
          }}
        />
      </div>
    );
  }