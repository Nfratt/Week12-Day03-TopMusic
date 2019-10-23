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
-- spec year
SELECT * from songs 
 WHERE year = '2004';
--  spec artist
Select song, artist, year from songs
 where artist='Paramore'
 order by year asc ;
 
--  top 10
 select * from songs
 where raw_total ='35';
-- top 10 try 2
SELECT * FROM `songs`
order by raw_total desc
LIMIT 10;
-- appears more than once 
SELECT artist, COUNT(*) AS 'count'
FROM  songs
GROUP BY artist
HAVING COUNT(*)>1
ORDER BY count(*) DESC;

-- spec song
SELECT * 
FROM `songs` 
WHERE song  ="stan"

