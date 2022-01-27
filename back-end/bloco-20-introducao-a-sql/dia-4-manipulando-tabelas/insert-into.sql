USE sakila;

-- Insira um novo funcionário na tabela sakila.staff .

SELECT * FROM staff;

INSERT INTO staff (first_name, last_name, address_id, email, store_id, username, password)
VALUES ('Alexandre', 'Pimentel', 1, 'alexandrexpjr@hotmail.com', 1, 'alex', '123456');

SELECT * FROM staff;

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .

INSERT INTO staff (first_name, last_name, address_id, email, store_id, username, password) VALUES
('Alexandre', 'Pimentel', 1, 'alexandrexpjr@hotmail.com', 1, 'alex', '123456'),
('Isabella', 'Andrade', 1, 'isabella@hotmail.com', 1, 'isa', '1234');

SELECT * FROM staff;

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .

INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM customer
	ORDER BY customer_id
	LIMIT 5;
    
SELECT * FROM actor;

-- Cadastre três categorias de uma vez só na tabela sakila.category .

SELECT * FROM category;

INSERT INTO category (name) VALUES
('Muito aterrorizante'), ('Meloso'), ('Depre');

-- Cadastre uma nova loja na tabela sakila.store .

SELECT * FROM store;

INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 2);
