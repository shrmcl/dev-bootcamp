-- TASK 1a
SELECT first_name, last_name
FROM employees
WHERE  salary > 3000 AND salary < 40000;

-- TASK 1b
SELECT first_name, last_name
FROM employees
WHERE  salary BETWEEN 3000 AND 40000;