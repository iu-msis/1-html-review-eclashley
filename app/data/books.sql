CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	title varchar(48),
    author varchar(24),
    yr_published varchar(24),
    publisher varchar(48),
    pg_ct int,
    msrp varchar(48)    
);

insert into book (title, author, yr_published, publisher, pg_ct, msrp) values 
('Paper Towns', 'John Green', '2011', 'Penguin Random House', 373, '12.29'); 
insert into book (title, author, yr_published, publisher, pg_ct, msrp) values 
('Divergent', 'Veronica Roth', '2011', 'Katherine Tegen Books', 400, '20.99');
insert into book (title, author, yr_published, publisher, pg_ct, msrp) values 
('The Outsiders', 'S.E. Hinton', '1967', 'Penguin Random House', 192, '19.28');
insert into book (title, author, yr_published, publisher, pg_ct, msrp) values 
('The Book Thief', 'Markus Zusack', '2005', 'Katherine Tegen Books', 584, '33.33');
insert into book (title, author, yr_published, publisher, pg_ct, msrp) values 
('The Perks of Being a Wallflower', 'Stephen Chobsky', '1999', 'Pocket Books', 256, '13.50');

select * from book