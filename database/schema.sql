DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

DROP TABLE IF EXISTS product CASCADE;

CREATE TABLE product (
  id INTEGER NOT NULL,
  name VARCHAR(50) NOT NULL,
  slogan VARCHAR(100) NOT NULL,
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
  original_price VARCHAR(100) NOT NULL,
  sale_price VARCHAR(100) NOT NULL,
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
  thumbnail_url VARCHAR(1000),
  url VARCHAR(1000),
  PRIMARY KEY (id),
  CONSTRAINT style_id FOREIGN KEY (style_id)
      REFERENCES styles(id) MATCH SIMPLE
      ON DELETE NO ACTION
);

DROP TABLE IF EXISTS skus CASCADE;

CREATE TABLE skus (
  id INTEGER NOT NULL,
  style_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  size VARCHAR(20) NOT NULL,
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