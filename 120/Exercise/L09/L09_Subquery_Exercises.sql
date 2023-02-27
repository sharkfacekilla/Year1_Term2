/************************************************************************ 
Lecture 09 Exercise
Subqueries

Note - Write these queries using subqueries when ever ppossible instead 
       of doing joins
************************************************************************/
--SPOOL M:\ICS120\Exercise\L08_Date_Exercises.txt

SET PAGESIZE 50
SET LINESIZE 120
SET ECHO ON


/************************************************************************
 Exercise 1
 Using a subquery, find out the number of employees who make less than 
 the average salary
************************************************************************/
SELECT count(*) 
FROM EMPLOYEES 
WHERE salary < 
             (SELECT AVG(salary)
             FROM employees);





/************************************************************************
 Exercise 2
 Multi-row Subquery
 Find any employee whoes name starts with a T and is in a department where 
 the average salary in the  department is < 5000.  
 Print out their name, department and salary. 
 Order the report by employee last name.
 HINT: Have the subquery return a list of departments that have an average
       salary of < 5000.
************************************************************************/
SELECT department_id 
FROM employees
GROUP BY department_id
HAVING avg(salary) < 5000;

select last_name, 
       department_id, 
       salary
FROM employees
WHERE UPPER(last_name) LIKE 'T%' AND
       department_id IN 
       (SELECT department_id 
       FROM employees
       GROUP BY department_id
       HAVING avg(salary) < 5000)
ORDER BY last_name;


/************************************************************************
 Exercise 3
 Print a report for all employee whose last names starts with B, showing 
 the employee's last names, their salary, their manager's last name and the 
 average  salary for all the employees under their manager. Order the
 report by employee last name asending.
 HINT: Have a subquery that returns a table containing each manager's id,
       their last name and the average salary of all their employees.
************************************************************************/

select e.last_name as "Employee Name",
       e.salary as "Employee Salary",
       "Manager Name", 
       avg_emp_salary
FROM employees e,
       (SELECT e2.manager_id, 
              e3.last_name AS "Manager Name",
              avg(e2.salary) as avg_emp_salary
       FROM   employees e2, 
              employees e3
       WHERE  e2.manager_id = e3.employee_id
       GROUP BY e2.manager_id, e3.last_name) m
WHERE  e.manager_id = m.manager_id AND
       e.last_name LIKE 'B%'
ORDER BY e.last_name asc;


SELECT e2.manager_id, 
       e3.last_name AS "Manager Name",
       avg(e2.salary) as avg_emp_salary
FROM   employees e2, 
       employees e3
WHERE  e2.manager_id = e3.employee_id
GROUP BY e2.manager_id, e3.last_name
;

/************************************************************************
 Exercise 4
 Print out all employees that are in a department, where there are multiple
 departments in the same location.
************************************************************************/
SELECT location_id
FROM departments
GROUP BY location_id
HAVING count(*) > 1;




/************************************************************************
 Exercise 5
 Take the previous question, add the location id for each employee and sort
 the results by location id, department id and employee last name all in   ascending order.  Note - this will not require addition subqueries, just
 a single join.
************************************************************************/




/************************************************************************
 Exercise 6
 List the names of all current employees that have had at least 2 previous 
 positions.
************************************************************************/





/************************************************************************
 Exercise 7
 List the names of the current employee(s) that have held the most 
 number of positions.
************************************************************************/


--SPOOL OFF