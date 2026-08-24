-- Write your query below
SELECT customers.name 
FROM customers
WHERE NOT EXISTS(
    SELECT orders.customer_id 
    FROM orders
    WHERE orders.customer_id = customers.id
);