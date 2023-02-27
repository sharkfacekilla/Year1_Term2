/************************************************************************ 
Lecture 05 Exercise
Join

************************************************************************/
--SPOOL M:\ICS120\Exercise\L05_Join_Exercise.txt

SET PAGESIZE 50
SET LINESIZE 120
SET ECHO ON



/************************************************************************ 
 Exercise 1 
 Use the tables in your schema.
 Find the city and country name for each location.
*************************************************************************/
-- SQL/86 --
SELECT city, country_name
FROM locations l, countries c
WHERE l.country_id = c.country_id;

-- SQL/92 with ON --
SELECT city, country_name
FROM locations l INNER JOIN countries c
ON l.country_id = c.country_id; 

--SQL/92 with USING --
SELECT city, country_name
FROM locations l INNER JOIN countries c
USING(country_id);



/************************************************************************ 
 Exercise 2
 Use the tables in your schema. 
 Find the country name and region name for each country
**************************************************************************/

-- SQL/86 --
SELECT country_name, region_name
FROM countries c, regions r
WHERE c.region_id = r.region_id;

-- SQL/92 with ON --
SELECT country_name, region_name
FROM countries c INNER JOIN regions r
ON c.region_id = r.region_id;

--SQL/92 with USING --

SELECT country_name, region_name
FROM countries c INNER JOIN regions r
USING (region_id);


/************************************************************************ 
 Exercise 3
 Use the tables in your schema. 
 Do a 3-table join working off of the previous example. 
 Find the city, country name, and region name for each city 
************************************************************************/
-- SQL/86 --
SELECT city, country_name, region_name
FROM locations l, countries c, regions r
WHERE c.region_id = r.region_id
AND l.country_id = c.country_id;

-- SQL/92 with ON --
SELECT city, country_name, region_name
FROM locations l INNER JOIN countries c
ON (l.country_id = c.country_id)
INNER JOIN regions r 
ON (c.region_id = r.region_id);

--SQL/92 with USING --
SELECT city, country_name, region_name
FROM locations l INNER JOIN countries c
USING (country_id)
INNER JOIN regions r 
USING (region_id);

/************************************************************************ 
 Exercise 4A
 Use the tables in your schema. 
 Using their job history, find the employees (by first name and last name) 
 who were working on January 1, 1997. 
 Exercise 4B
 Prompt the use to enter a date (HINT: use a variable)
************************************************************************/

-- SQL/86 --
SELECT e.first_name, e.last_name, jh.job_id, jh.start_date, jh.end_date
FROM employees e, job_history jh 
WHERE e.employee_id = jh.employee_id
AND '01-JAN-97' BETWEEN jh.start_date AND jh.end_date;


-- SQL/92 with ON --
SELECT e.first_name, e.last_name, jh.job_id, jh.start_date, jh.end_date
FROM employees e INNER JOIN job_history jh 
ON (e.employee_id = jh.employee_id)
WHERE '01-JAN-97' BETWEEN jh.start_date AND jh.end_date;

-- SQL/92 with USING --
SELECT e.first_name, e.last_name, jh.job_id, jh.start_date, jh.end_date
FROM employees e INNER JOIN job_history jh 
USING (employee_id)
WHERE '01-JAN-97' BETWEEN jh.start_date AND jh.end_date;


/***** 4B *****/
-- SQL/86 --
SELECT e.first_name, e.last_name, jh.job_id, jh.start_date, jh.end_date
FROM employees e, job_history jh 
WHERE e.employee_id = jh.employee_id
AND '&Date' BETWEEN jh.start_date AND jh.end_date;

-- SQL/92 with ON --
SELECT e.first_name, e.last_name, jh.job_id, jh.start_date, jh.end_date
FROM employees e INNER JOIN job_history jh 
ON (e.employee_id = jh.employee_id)
WHERE '&Date' BETWEEN jh.start_date AND jh.end_date;

-- SQL/92 with USING --
SELECT e.first_name, e.last_name, jh.job_id, jh.start_date, jh.end_date
FROM employees e INNER JOIN job_history jh 
USING (employee_id)
WHERE '&Date' BETWEEN jh.start_date AND jh.end_date;


/********************************************************************************
 Exercise 5
 Use the tables in your schema. 
 Find the employees (last name, job name, department name, city, country, salary) 
 who make more than X dollars.  Prompt the user for X. Test with 15000.
*********************************************************************************/

-- SQL/86 --
SELECT e.last_name AS lname, 
       j.job_title AS job, 
       d.department_name AS dname, 
       l.city AS city, 
       c.country_name AS cname, 
       e.salary AS sal
FROM employees e, 
     jobs j, 
     locations l, 
     countries c, 
     departments d
WHERE e.job_id = j.job_id
AND e.department_id = d.department_id
AND d.location_id = l.location_id
AND l.country_id = c.country_id
AND e.salary >= &Salary
ORDER BY e.salary DESC;


-- SQL/92 with ON --


-- SQL/92 with USING --


