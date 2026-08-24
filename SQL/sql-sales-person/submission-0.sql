-- Write your query below
SELECT sp.name
FROM sales_person as sp
WHERE NOT EXISTS(
    SELECT o.order_id
    FROM orders AS o
    JOIN company AS c ON o.com_id = c.com_id
    JOIN sales_person ON o.sales_id = sales_person.sales_id
    WHERE c.name='CRIMSON' AND sales_person.sales_id = sp.sales_id
);