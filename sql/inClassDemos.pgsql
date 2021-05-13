SELECT first_name || ' ' || last_name, department_name
FROM 
  departments d RIGHT JOIN employees e ON e.department_id = d.department_id;

SELECT to_char(saledate, 'DD/MM/YYYY') AS "SALE DATE (dd/mm/yyyy)", 
  description AS "PRODUCT NAME", 
  amount AS "SALE AMOUNT"
FROM 
  products p JOIN sales s ON p.productid = s.productid;

SELECT fname, lname, height, weight, name
FROM 
  players AS p LEFT JOIN teams AS t ON p.team_id = t.id ;

-- SELF JOIN (a table is joined with itself):

SELECT emp.first_name || ' ' || emp.last_name AS employee, 
       mgr.first_name || ' ' || mgr.last_name AS manager
FROM employees AS emp JOIN employees AS mgr
ON emp.manager_id = mgr.employee_id;

SELECT 
  e.first_name || ' ' || e.last_name AS "Full Name", 
  l.city
FROM departments d
  JOIN locations l ON d.location_id = l.location_id
  RIGHT JOIN employees e ON e.department_id = d.department_id
ORDER BY e.last_name;

SELECT * FROM employees;

INSERT INTO employees 
  (employee_id,
  first_name, 
  last_name, 
  email, 
  phone_numeric, 
  hire_date, 
  job_id, 
  salary, 
  commission_pct, 
  manager_id, 
  department_id)
VALUES 
  (9090,
  'Shar',
  'McLeod',
  'SMCLEOD',
  '555.0000',
  current_date,
  'MK_REP',
  99000,
  0.09,
  201,
  10);