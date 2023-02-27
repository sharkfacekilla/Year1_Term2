/************************************************************************ 
Lecture 06 Exercise
Simple Functions, Aggregate Functions

************************************************************************/
--SPOOL M:\ICS120\Exercise\L06_Functions_Exercise.txt

SET PAGESIZE 50
SET LINESIZE 120
SET ECHO ON

/************************************************************************
Exercise 1 
Find the average salary for all employees.Format the result to display in 
dollars with 2 decimal places
************************************************************************/
SELECT TO_CHAR (AVG(salary), '999,999.00') as "Average Salary"
FROM employees; 




/************************************************************************
Exercise 2 
Find the average salary for each department.
Format the result to display in dollars with 2 decimal places.
Sorted the results by department id.
************************************************************************/
SELECT TO_CHAR 
	(Avg(salary), '999,999.00') AS "Avg Sal", 
	department_id AS "Dept ID"
FROM employees
GROUP BY department_id;


/************************************************************************
Exercise 3
Find the average salary for each department. 
Format the result to display in dollars with 2 decimal places.
Display the department id and name.
Only display departments that have an average salary above $8000.
Sorted the results by the average salary from high to low.
(as SQL/92 implementing USING statement).
************************************************************************/
SELECT department_id AS "Dept ID",
	   department_name AS "Dept Name",
	   TO_CHAR  (AVG(salary), '999,999.00') AS "Avg Sal"
FROM employees e INNER JOIN departments d
USING (department_id)
GROUP BY department_id, department_name
HAVING AVG(salary) > 8000
ORDER BY (AVG(salary)) DESC;

/************************************************************************
Exercise 4
Find the min, max and avg salary for each job title.
Sort the results by avgerage salary from high to low.
SQL/92 - Implement with ON statement
************************************************************************/
SELECT TO_CHAR (MIN(salary), '999,999.00') AS "Min Sal", 
	   TO_CHAR (MAX(salary), '999,999.00') AS "Max Sal", 
	   TO_CHAR (AVG(salary), '999,999.00') AS "Avg Sal",
	   job_title AS "Job Title"
FROM employees e INNER JOIN jobs j
ON e.job_id = j.job_id
GROUP BY job_title
ORDER BY (AVG(salary)) DESC;



/************************************************************************
Exercise 5
Use the CASE statement to qualify when someone was hired.
If they were hired before 1990, they are an 'Old Timer', 
before 1994 'Senior', before 1997 'Experienced', before 1999 'Junior'
and everyone else is a 'Rookie' 
Display their name, when they were hired and the results of the case.
Sort the results from oldest to newest hire.
************************************************************************/
SELECT first_name, last_name, 
	TO_CHAR(hire_date,'yyyy-mm-dd') AS "Hire Date",
	(CASE
		WHEN hire_date < '01-Jan-1990' THEN 'Old Timer'
		WHEN hire_date < '01-Jan-1994' THEN 'Senior'
		WHEN hire_date < '01-Jan-1997' THEN 'Experienced'
		WHEN hire_date < '01-Jan-1999' THEN 'Junior'
		else 'Rookie'
		end) AS "Status"
FROM employees
ORDER BY hire_date asc;
--SPOOL OFF