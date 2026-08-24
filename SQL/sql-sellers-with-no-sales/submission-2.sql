-- Write your query below
WITH sellYear2020 AS (
    SELECT s.seller_id
    FROM seller as s
    JOIN orders as o ON s.seller_id = o.seller_id
    WHERE extract(year FROM o.sale_date)='2020'
)
SELECT s.seller_name
FROM seller as s
WHERE NOT EXISTS(
    SELECT 1
    FROM sellYear2020 as sell
    WHERE sell.seller_id = s.seller_id
)
ORDER BY s.seller_name ASC;