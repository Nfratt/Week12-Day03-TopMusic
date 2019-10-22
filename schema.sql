DROP DATABASE IF EXISTS  music_rankings_db;
CREATE DATABASE   music_rankings_db;

USE music_rankings_db;

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  artist  VARCHAR(45) NULL,
  song VARCHAR(50) NULL,
  year INT NULL,
  raw_total INT NULL,
  raw_usa INT NULL,
  raw_uk  INT NULL,
  raw_eur INT NULL,
  raw_row INT NULL

);
SELECT * from songs 
WHERE year = '2010'
;
