-- ICS120  Lecture 09 Subqueries
--         SQL Examples

set pagesize 40
set linesize 120

--
-- Slide 7 --
--
SELECT salary
FROM employees
WHERE upper(last_name) = 'RUSSELL';

SELECT last_name, salary
FROM employees
WHERE salary > (14000);

SELECT last_name, salary
FROM employees
WHERE salary > (SELECT salary
      		FROM employees
     		WHERE upper(last_name) = 'RUSSELL');


--
-- Slide 10 --
--
SELECT department_id
FROM employees
WHERE employee_id = 113;

SELECT employee_id, last_name, department_id
FROM employees
WHERE department_id = 100;


SELECT employee_id, last_name, department_id
FROM employees
WHERE department_id =
	(SELECT department_id
 	 FROM employees
	 WHERE employee_id = 113);

--
-- Slide 11 --
--

SELECT MIN(sal)
FROM scott.emp
WHERE deptno = 20;

SELECT deptno, MIN(sal)
FROM scott.emp
GROUP BY deptno
HAVING MIN(sal) >  800;

SELECT deptno, MIN(sal)
FROM scott.emp
GROUP BY deptno
HAVING MIN(sal) > 
          (SELECT MIN(sal)
           FROM scott.emp
           WHERE deptno = 20);

--
-- Slide 12 --
--

SELECT product_id
    FROM storedb.products
    WHERE product_id < 3;

SELECT new_table.pid
FROM
   (SELECT product_id as pid
    FROM storedb.products
    WHERE product_id < 3) new_table
where new_table.pid = 1;
;



SELECT new_table.pid
FROM new_table
where new_table.pid = 1;
;

--
-- Slide 13 --
--
SELECT last_name, salary, avg(salary)
FROM employees
GROUP BY department;

--
-- Slide 14 --
--
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;

SELECT first_name,
       last_name,
       salary,
       TO_CHAR(avg_salary, 'FM$999,999.00') as "Average Salary"
FROM employees e,  
     (SELECT department_id, AVG(salary) AS avg_salary
      FROM employees
      GROUP BY department_id)  d
WHERE e.department_id = d.department_id AND
      upper(last_name) like 'S%';


--
-- Slide 15 --
--

SELECT first_name,
       last_name,
       salary,
       TO_CHAR(avg_salary, 'FM$999,999.00') as "Average Salary"
FROM employees inner join 
      (SELECT department_id, AVG(salary) AS avg_salary
        FROM employees
        GROUP BY department_id) 
USING( department_id )
WHERE upper(last_name) like 'S%';


--
-- Slide 17 --
--
SELECT product_id FROM storedb.products WHERE name LIKE '%e%';

SELECT product_id, name
FROM storedb.products
WHERE product_id IN
  (SELECT product_id FROM storedb.products WHERE name LIKE '%e%');


SELECT name, product_id FROM storedb.products WHERE name LIKE '%e%';


SELECT e1.employee_id, e1.last_name
FROM employees e1
where exists
  (SELECT 1 
   FROM employees e2 
   WHERE e2.manager_id = e1.employee_id);

--
-- Slide 18 --
--
SELECT low_salary 
FROM storedb.salary_grades;

SELECT employee_id, last_name , salary
FROM storedb.employees
WHERE salary < ANY
   (SELECT low_salary 
    FROM storedb.salary_grades);

--
-- Slide 19 --
--

SELECT high_salary
    FROM storedb.salary_grades;

SELECT employee_id, last_name
FROM employees
WHERE salary > ALL
   (SELECT high_salary
    FROM storedb.salary_grades);


--
-- Slide 20 --
--

SELECT department_name, country_name 
FROM departments INNER JOIN locations USING (location_id)
                 INNER JOIN countries USING( country_id )
WHERE upper(country_name) IN ('CANADA', 'UNITED KINGDOM');


--
-- Slide 21 --
--

SELECT department_name
FROM departments
WHERE location_id IN
   (SELECT location_id
    FROM locations
    WHERE country_id IN
       (SELECT country_id
        FROM countries
        WHERE upper(country_name) IN ('CANADA', 'UNITED KINGDOM')));  


--
-- Slide 23 --
--

SELECT job_id, MAX(salary)
    FROM employees
    GROUP BY job_id;


SELECT  last_name, job_id, salary
FROM employees
WHERE (job_id, salary) IN 
   (SELECT job_id, MAX(salary)
    FROM employees
    GROUP BY job_id);


--
-- Slide 24 --
--

SELECT job_id, manager_id
    FROM employees
    WHERE upper(first_name) = 'PETER' AND
                   upper(last_name) = 'TUCKER';

SELECT first_name, last_name
FROM employees
WHERE (job_id, manager_id) IN
   (SELECT job_id, manager_id
    FROM employees
    WHERE upper(first_name) = 'PETER' AND
                   upper(last_name) = 'TUCKER');

--
-- Slide 25 --
--
SELECT product_type_id, avg(price), count(*)
FROM storedb.products 
GROUP BY product_type_id
ORDER BY product_type_id;


SELECT name, product_type_id, price
FROM storedb.products outer
WHERE price >=
     (SELECT avg(price) 
      FROM storedb.products inner
      WHERE inner.product_type_id = outer.product_type_id)
order by 1;


-- same query as inline view

SELECT p1.name, p1.product_type_id, p1.price, p2.avg_price
from storedb.products p1,
     (select product_type_id, avg(price) as avg_price
	         from storedb.products
			 group by product_type_id) p2
where p1.product_type_id = p2.product_type_id and
      p1.price >= p2.avg_price
order by 1;



--
-- Slide 27 --
--
SELECT department_id, MIN(salary)
FROM employees 
GROUP BY department_id
ORDER BY department_id;
 

SELECT department_id, last_name, salary
FROM employees e1
WHERE salary = 
     (SELECT min(salary)
      FROM employees e2
      WHERE e2.department_id = e1.department_id);

--
-- Slide 28 --
--
SELECT employee_id 
FROM employees;

-- try 200 --
SELECT * 
FROM job_history
where employee_id = &employee_id;

SELECT employee_id, first_name, last_name
FROM employees e
WHERE EXISTS
   (SELECT 'x'
    FROM job_history jh
    WHERE jh.employee_id = e.employee_id and
           jh.department_id <> e.department_id);

--
-- Slide 31 --
--
SELECT department_id 
FROM departments
WHERE location_id = 1800;


SELECT employee_id, last_name,
     (CASE WHEN department_id IN
                     (SELECT department_id 
                      FROM departments
                      WHERE location_id = 1800)
           THEN 'Canada'
           ELSE 'Other'
       END) Location
 FROM employees
 ORDER BY department_id;



--
-- Slide 32 --
--

SELECT employee_id, last_name,
      (SELECT department_name
         FROM departments d
         WHERE e.department_id = d.department_id) Department
 FROM employees e
 ORDER BY Department;


--
-- Slide 33 --
--
SELECT location_id 
           FROM locations l
           WHERE upper(state_province) = 'CALIFORNIA';


SELECT employee_id, last_name
FROM employees e
WHERE ( (SELECT location_id 
         FROM departments d
         WHERE e.department_id = d.department_id) IN
          (SELECT location_id 
           FROM locations l
           WHERE upper(state_province) = 'CALIFORNIA') );


--
-- Slide 34 --
--
select d.department_name, d.department_id, count(*)
from departments d, employees e
where d.department_id = e.department_id
group by d.department_name, d.department_id
order by d.department_name asc;


SELECT employee_id, last_name, department_id
FROM employees e
ORDER BY (SELECT department_name
          FROM departments d
          WHERE e.department_id = d.department_id);


--
-- Slide 35 --
--
SELECT last_name, SUBSTR(
     (SELECT department_name
      FROM departments d
      WHERE d.department_id = e.department_id),
      1, 5) Department
FROM employees e;
