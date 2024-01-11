const numberrOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count: numberrOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?','');
const b = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
