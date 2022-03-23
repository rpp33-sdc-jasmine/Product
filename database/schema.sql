DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

DROP TABLE IF EXISTS product CASCADE;

CREATE TABLE product (
  id INTEGER NOT NULL,
  name VARCHAR(50) NOT NULL,
  slogan VARCHAR(1000) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  category VARCHAR(1000) NOT NULL,
  default_price INTEGER NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS features CASCADE;

CREATE TABLE features (
  id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  feature VARCHAR(100) NOT NULL,
  value VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT product_id FOREIGN KEY (product_id)
      REFERENCES product(id)
      ON DELETE NO ACTION
);

DROP TABLE IF EXISTS styles CASCADE;

CREATE TABLE styles (
  id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  name VARCHAR(100) NOT NULL,
  sale_price INTEGER,
  original_price INTEGER NOT NULL,
  default_style BOOLEAN NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT product_id FOREIGN KEY (product_id)
      REFERENCES product(id)
      ON DELETE NO ACTION
);

DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos (
  id INTEGER NOT NULL,
  style_id INTEGER NOT NULL,
  url VARCHAR(1000),
  thumbnail_url CHARACTER VARYING(10485760) DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT style_id FOREIGN KEY (style_id)
      REFERENCES styles(id) MATCH SIMPLE
      ON DELETE NO ACTION
);

DROP TABLE IF EXISTS skus CASCADE;

CREATE TABLE skus (
  id INTEGER NOT NULL,
  style_id INTEGER NOT NULL,
  size VARCHAR(20) NOT NULL,
  quantity INTEGER NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT style_id FOREIGN KEY (style_id)
      REFERENCES styles(id) MATCH SIMPLE
      ON DELETE NO ACTION
);

DROP TABLE IF EXISTS related CASCADE;

CREATE TABLE related (
  id INTEGER NOT NULL,
  current_product_id INTEGER NOT NULL,
  related_product_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT current_product_id FOREIGN KEY (current_product_id)
    REFERENCES product(id)
    ON DELETE NO ACTION
);

COPY product (id, name, slogan, description, category, default_price)
FROM '/Users/wendai/Desktop/hackreactorwork/SDC_CSV/product.csv'
DELIMITER ','
CSV HEADER;

COPY features (id, product_id, feature, value)
FROM '/Users/wendai/Desktop/hackreactorwork/SDC_CSV/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles (id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/wendai/Desktop/hackreactorwork/SDC_CSV/styles.csv'
WITH (FORMAT CSV,DELIMITER ',',
NULL 'null',
HEADER);

COPY photos (id, style_id, url, thumbnail_url)
FROM '/Users/wendai/Desktop/hackreactorwork/SDC_CSV/photos.csv'
DELIMITER ','
CSV HEADER;

COPY skus (id, style_id, size, quantity)
FROM '/Users/wendai/Desktop/hackreactorwork/SDC_CSV/skus.csv'
DELIMITER ','
CSV HEADER;

COPY related (id, current_product_id, related_product_id)
FROM '/Users/wendai/Desktop/hackreactorwork/SDC_CSV/related.csv'
DELIMITER ','
CSV HEADER;