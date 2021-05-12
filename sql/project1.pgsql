SELECT first_name, last_name FROM employees
WHERE department_id IN (
    SELECT department_id FROM DEPARTMENTS 
    WHERE location_id IN (
        SELECT location_id FROM locations
        WHERE upper(city) = 'SEATTLE'
        )
);