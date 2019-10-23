/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/**
 * @see {@link https://www.npmjs.com/package/mysql}
 */
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Your password
  password: '****',
  database: 'music_rankings_db',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  doCRUD();
});
/**
 * Called by callback function upon successful establishment of DB connection.
 * @see {@link https://www.npmjs.com/package/mysql#performing-queries}
 */
function doCRUD() {
  command(userSelect);
}
const userSelect = process.argv[2];
const userInput = process.argv.slice(3).join(' ');
function command(userSelect) {
  switch (userSelect) {
    case 'songs-by-artist':
      readSong();
      break;
    case 'top-artists':
      topArtists();
      break;
    case 'top-ten':
      topTen();
      break;
    case 'song-data':
      songData();
      break;
  }
}
/**
 * Reads all products from the DB
 */
function readSong() {
  console.log('Selecting all songs by artist... ');
  connection.query('SELECT song, year FROM songs WHERE ? ORDER BY year DESC',
      [
        {
          artist: userInput,
        },
      ],
      function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });
}
function topArtists() {
  console.log('Selecting all top artists.. ');
  connection.query('SELECT artist, count(*) as Count FROM songs GROUP BY artist HAVING count(*)>1 ORDER BY Count DESC',
      function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });
}
function topTen() {
  console.log('Selecting top ten artists.. ');
  // eslint-disable-next-line max-len
  connection.query('SELECT song, artist, raw_total as Rating, year FROM songs ORDER BY Rating desc LIMIT 10',
      function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });
}
// eslint-disable-next-line require-jsdoc
function songData() {
  console.log('Selecting song data.. ');
  connection.query('SELECT * FROM songs WHERE ?',
      [
        {
          song: userInput,
        },
      ],
      function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });
}
Collapse;




