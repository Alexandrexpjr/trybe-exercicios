-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT
	f.title,
    b.domestic_sales,
    b.international_sales
FROM
	Pixar.Movies AS f
INNER JOIN
	Pixar.BoxOffice AS b
	ON f.id = b.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT
	f.title,
    b.domestic_sales + b.international_sales AS `total_sales`
FROM
	Pixar.Movies AS f
INNER JOIN
	Pixar.BoxOffice AS b
    ON f.id = b.movie_id
WHERE
	b.international_sales > b.domestic_sales;
    
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT
	f.title,
    b.rating
FROM
	Pixar.Movies AS f
INNER JOIN
	Pixar.BoxOffice AS b
    ON f.id = b.movie_id
ORDER BY b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
    t.`name`,
    t.location,
    f.title,
    f.director,
    f.`year`,
    f.length_minutes
FROM
	Pixar.Theater AS t
LEFT JOIN
	Pixar.Movies AS f
	ON t.id = f.theater_id
ORDER BY t.`name`;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
    f.title,
    f.director,
    f.`year`,
    f.length_minutes,
	t.`name`,
    t.location
FROM
	Pixar.Theater AS t
RIGHT JOIN
	Pixar.Movies AS f
	ON t.id = f.theater_id
ORDER BY t.`name`;
