-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .

SELECT a.actor_id, CONCAT(a.first_name,' ', a.last_name) AS fullname, f.film_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .

SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff s
INNER JOIN sakila.address a
ON s.address_id = a.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT Cus.customer_id, CONCAT(Cus.first_name, ' ', Cus.last_name) AS full_name, Cus.email, Cus.address_id, Ad.address
FROM customer AS Cus
INNER JOIN address AS Ad
ON Cus.address_id = Ad.address_id
ORDER BY full_name DESC
LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .

SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
	AND a.district = 'California'
    AND c.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .

SELECT
	CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    COUNT(a.address_id) AS `quantidade de endereços`
FROM
	customer AS c
INNER JOIN
	address AS a ON c.address_id = a.address_id
WHERE
	c.active = 1
GROUP BY
	c.customer_id
ORDER BY
	full_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT
	CONCAT(s.first_name, ' ', s.last_name) AS full_name,
    AVG(p.amount) AS `average_amount`
FROM 
	staff AS s
INNER JOIN
	payment AS p ON YEAR(p.payment_date) = '2006'
GROUP BY
	full_name;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .

SELECT
	a.actor_id,
	CONCAT(a.first_name, ' ', a.last_name) AS `name`,
    fa.film_id,
    f.title
FROM 
	actor AS a
INNER JOIN
	film_actor AS fa
    ON a.actor_id = fa.actor_id
INNER JOIN
	film AS f
    ON fa.film_id = f.film_id;
