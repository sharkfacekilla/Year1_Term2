-/*********************************************************************************

Assignment - Lab 5  Aggregating Data and Subqueries

**********************************************************************************/

set pagesize 40
set linesize 200



/***********************************************/
/***                                         ***/
/*** Part 1 Using Group function in SQL      ***/
/***                                         ***/
/***********************************************/
 
/*********************************************************************************
 Question 1
 Write a query to display the number of people with the same job. Use JOB_ID 
 in your query and list the jobs by JOB_ID along with the number of people having
 that job.
**********************************************************************************/ 

SELECT job_id AS "Job ID", 
       COUNT (*) AS "# Of Emp"
FROM employees
GROUP BY job_id;



/*********************************************************************************
 Question 2
 Display the highest, lowest, sum, and average salary of all employees. Label 
 the columns Maximum, Minimum, Sum, and Average, respectively (note the use of 
 upper and lower case in the lables). Round your results to the nearest whole number.
**********************************************************************************/ 

SELECT ROUND(MAX(salary)) AS "Maximum", 
       ROUND(MIN(salary)) AS "Minimum", 
       ROUND(SUM(salary)) AS "Sum", 
       ROUND(AVG(salary)) AS "Average"
from employees;



 
/*********************************************************************************
 Question 3
 Modify the above (#2) to display the maximum, minimum, sum, and average 
 salary for each job type  (assume each job_id represents a job type). Be 
 sure to give the job type in your output.
**********************************************************************************/ 

SELECT job_id AS "Job ID",
       ROUND(MAX(salary)) AS "Maximum", 
       ROUND(MIN(salary)) AS "Minimum", 
       ROUND(SUM(salary)) AS "Sum", 
       ROUND(AVG(salary)) AS "Average"
FROM employees
GROUP BY job_id;



/*********************************************************************************
 Question 4
 Display the manager number and the salary of the lowest paid employee for 
 that manager. Exclude anyone whose manager is not known - in other words, 
 exclude anyone who has a NULL manager_id. Sort by manager id.
**********************************************************************************/ 

SELECT manager_id AS "Manager ID",
       MIN(salary) AS "Minimum Salary"
FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id 
ORDER BY manager_id;



/*********************************************************************************
 Question 5
 Modify your query from above (#4) to exclude any groups where the minimum 
 salary is less than or equal to $6,000. Sort the output in descending order of 
 salary. 
**********************************************************************************/ 

SELECT manager_id AS "Manager ID",
       TO_CHAR(MIN(salary), '$99,999,999.00') AS "Minimum Salary"
FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id 
HAVING MIN(salary) <= 6000
ORDER BY MIN(salary) DESC;



/***********************************************/
/***                                         ***/
/*** Part 2 Using Subqueries                 ***/
/***                                         ***/
/***********************************************/
 
/*********************************************************************************
 Question 6
 Create a query to display the employee numbers, last names and salaries of all 
 employees who earn more than the average salary and whose last_name begins with
 a 'G' or 'P' (be sure to handle case). Sort the results in descending order of salary. 
 Hint Ensure you use brackets around or AND and OR clauses in the WHERE clause.
**********************************************************************************/ 

SELECT employee_id AS "Emp ID", 
       last_name AS "Last Name",
       TO_CHAR(salary, '$99,999,999.00') AS "Salary"
FROM employees
WHERE last_name IN 
                (SELECT last_name
                FROM employees
                WHERE lower(last_name) LIKE 'g%' OR lower(last_name) LIKE 'p%')
ORDER BY salary DESC;



/*********************************************************************************
 Question 7
 Write a query that will display the last name and salary of every employee who 
 reports to Gerald Cambrault. (There is more than one Cambrault in the database 
 so you must be careful to check the first name too.) Be sure to handle case. 
**********************************************************************************/ 

SELECT last_name AS "Last Name",
       salary AS "Salary"
FROM employees 
WHERE manager_id IN (
                SELECT employee_id
                FROM employees
                WHERE lower(first_name) LIKE 'gerald'
                AND lower(last_name) LIKE 'cambrault');



/*********************************************************************************
 Question 8
 How many people work in the same department as Gerald Cambrault?  Write a query 
 to count the number employees in Gerald's department.  Exclude Gerald from your 
 count. (Remember, there is more than one Cambrault in the database so be sure to
 check the first name too.) 
**********************************************************************************/

SELECT COUNT(*) AS "Number of Employees"
FROM employees 
WHERE department_id IN (
                SELECT department_id
                FROM employees
                WHERE lower(first_name) LIKE 'gerald'
                AND lower(last_name) LIKE 'cambrault')
AND employee_id != (
                    SELECT employee_id
                    FROM employees
                    WHERE lower(first_name) LIKE 'gerald'
                    AND lower(last_name) LIKE 'cambrault');



/*********************************************************************************
 Question 9
 Write a query to display the department IDs, employee IDs, last names, and salaries
 of all employees who earn more than twice (2 times) the average salary for the company,
 and who work in a department with any employee with a "u" anywhere in their last name. 
 Order your output by employee IDs. 
**********************************************************************************/ 

SELECT department_id AS "Department ID",
       employee_id AS "Employee ID",
       last_name AS "Last Name",
       salary AS "Salary"
FROM employees
WHERE salary > 2 * (
                    SELECT AVG(salary) 
                    FROM employees)
AND department_id IN (
                    SELECT department_id
                    FROM employees
                    WHERE lower(last_name) LIKE '%u%'
)
ORDER BY employee_id;



--SPOOL OFF

/***********************************************/
/***                                         ***/
/***          End of SQL script              ***/
/***                                         ***/
/***********************************************/