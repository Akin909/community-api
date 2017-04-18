BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
id           SERIAL PRIMARY KEY,
product_name VARCHAR(100) NOT NULL,
price        INTEGER NOT NULL,
slug         VARCHAR(100) NOT NULL,
image_url    VARCHAR(500) NOT NULL
);

INSERT INTO TABLE (product_name, slug, price, image_url) VALUES
('mad max: fury road','mad-max',  20, 'https://s2.thcdn.com/productimg/960/960/11119802-5074332160007346.jpg'),
('The matrix', 10, 'the-matrix', 'https://s1.thcdn.com/productimg/960/960/8636424-1774327176099426.JPEG'),
('The Bourne identity', 'bourne-identity',  15, 'https://images-na.ssl-images-amazon.com/images/I/51HFMGJXMTL.jpg'),
('Superman returns', 'superman-returns', 25, 'https://images-na.ssl-images-amazon.com/images/I/513bRfTjeIL.jpg'),
('Rush hour', 'rush-hour',  17, 'https://s3.thcdn.com/productimg/0/600/600/10/67210-1341318758-690366.png')

COMMIT;
