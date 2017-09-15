DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;


CREATE TABLE top5000(
 position INT NOT NULL,
 artist VARCHAR(100),
 song VARCHAR(100),
 year INT,	
 raw_total DECIMAL(10,4),
 raw_usa DECIMAL(10,4),
 raw_uk DECIMAL(10,4),
 raw_eur DECIMAL(10,4),
 raw_row DECIMAL(10,4),
 PRIMARY KEY(position)
 );
 
 
SELECT artist, COUNT(*) count FROM top5000 WHERE artist= 'Bryan Adams' GROUP BY artist HAVING count > 1;
SELECT artist FROM top5000 
HAVING COUNT(*) >1;

select * from top5000 
where year between 1998 and 2010
order by year desc;

select * from top5000 
where year between 1998 and 2010
order by year asc;


select * from top5000 where song = 'Truly Madly Deeply';

 
 SELECT * FROM top5000
 