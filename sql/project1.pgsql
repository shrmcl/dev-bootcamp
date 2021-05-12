-- TASK 1a
SELECT first_name, last_name
FROM employees
WHERE  salary > 3000 AND salary < 40000;

-- TASK 1b
SELECT first_name, last_name
FROM employees
WHERE  salary BETWEEN 3000 AND 40000;

-- TASK 2: select employees w/ last name length 6+ letters
-- Return 1st 6 letters of last name, job id, salary
SELECT LEFT(last_name, 6), job_id, salary
FROM employees
WHERE char_length(last_name) > 6;

-- TASK 3a: employees w/ salary 8000+ & hired after 1996
SELECT first_name, last_name, hire_date
FROM employees 
WHERE salary > 8000 AND EXTRACT(year FROM hire_date) > 1996;

-- use implicit conversion of a date as a string to the DATE type
SELECT first_name, last_name, hire_date
FROM employees 
WHERE salary > 8000 AND to_char(hire_date, 'DD-Mon-YYYY') > '12/12/1996';

-- TASK 3b: employee with lowest salary
SELECT MIN(salary)
FROM employees;

-- Return their name & salary
SELECT first_name, last_name, salary
FROM employees
WHERE salary = (
    SELECT MIN(salary)
    FROM employees);

-- TASK 3c: repeat Task 3a but add total compen (with commissions) as % of Min salary in Task 3b
SELECT first_name, last_name, hire_date,
    -- force commision to 0 if null via COALESCE
    salary + salary * COALESCE(commission_pct, 0) AS "total comp",
    -- round to 2 decimals
    ROUND((salary + salary * COALESCE(commission_pct, 0))/
        (SELECT
            MIN(salary) 
        FROM employees) * 100, 2) AS "perc. of company minimum"
FROM employees 
WHERE salary > 8000 AND to_char(hire_date, 'DD-Mon-YYYY') > '12/12/1996';
