USE top_songsDB;


CREATE TABLE topAlbums(
 position INT NOT NULL,
 artist VARCHAR(100),
 album VARCHAR(100),
 year INT,	
 raw_total DECIMAL(10,4),
 raw_usa DECIMAL(10,4),
 raw_uk DECIMAL(10,4),
 raw_eur DECIMAL(10,4),
 raw_row DECIMAL(10,4),
 PRIMARY KEY(position)
 );
 
 
 select * from topAlbums;
 
SELECT topalbums.year,topalbums.album,topalbums.position, top5000.song,top5000.artist
FROM topalbums
INNER JOIN top5000 ON (top5000.artist = topalbums.artist and top5000.year = topalbums.year)
where ;




SELECT song,top5000.artist,album
FROM top5000
LEFT JOIN topalbums ON top5000.year = topalbums.year;
 
 
 