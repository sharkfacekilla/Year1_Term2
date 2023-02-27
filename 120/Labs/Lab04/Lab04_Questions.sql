/*********************************************************************************

Assignment - Lab 4 Functions

**********************************************************************************/

set pagesize 40
set linesize 200


/*********************************************************************************
 Question 1
 Use the tables in your schema. 
 What is the total salary of all employees.  Format the answer as a dollar amount
 and label the column as Total Salary
**********************************************************************************/ 

COLUMN "Total Salary" FORMAT "$9,999,999.00"

COLUMN "Total Salary" ON
SELECT SUM(salary) AS "Total Salary" 
FROM EMPLOYEES;
COLUMN "Total Salary" off


/*********************************************************************************
 Question 2
 Use the tables in your schema. 
 For all employees whose last name starts with the letter R (protect against
 upper/lowercase anomalies using a function), display the employee's last name 
 with the first letter capitalized and all other letters lowercase (be sure to use
 a function to enforce this), and give the length of their last name.  Give the first 
 column a label of "Last Name" and the second "Length".  Sort the results in 
 descending order by the employee's last name. 
**********************************************************************************/ 


SELECT INITCAP(last_name) AS "Last Name", 
	   LENGTH (last_name) AS "Length"
FROM employees
WHERE last_name LIKE 'R%'
ORDER BY last_name DESC;




/*********************************************************************************
 Question 3
 Use the tables in your schema. 
 For each employee, generate a userid by taking the first letter of their first
 name, concatenating that with the first 5 letters of their last name and then
 adding the last 2 digits of their phone number label this "USERID".  All letters 
 must be in lower case.  Show the employee, first name, last name, phone number 
 and userid sorted by employee last name in ascending sequence. 
 HINT: Phone numbers are not all the same length, so you will need to use the
 LENGTH function.
**********************************************************************************/ 

SELECT  first_name AS "First Name", 
        last_name AS "Last Name", 
        phone_number AS "Phone Number", 
        (LOWER(SUBSTR(first_name, 0, 1)|| 
        SUBSTR(last_name, 0,5)))||
        SUBSTR(phone_number, LENGTH(phone_number)-1,2) AS "USERID"
FROM employees
ORDER BY last_name;




/*********************************************************************************
 Question 4
 Use the tables in your schema. 
 Your boss was at a company party and met a fellow employee whose last name
 was Olson, or Olsen, or something else like that. He wasn't quite sure (his hearing 
 is bad when he drinks). He wants you to run a query that will  get the first and last 
 name of all employees whose last name sounds like Olson, along with and the name of 
 the department for which they work. He is sure once he sees the name and department 
 he will remember the person.  Make sure you use a function to check for the sound of
 the name.   Use both SQL/86 and SQL/92.
**********************************************************************************/ 
-- SQL/86 --
SELECT  e.first_name AS "First Name", 
        e.last_name AS "Last Name",
        d.department_name AS "Department Name"
FROM employees e, departments d
WHERE e.department_id = d.department_id
AND SOUNDEX(last_name) = SOUNDEX('olson');


-- SQL/92 with ON --
SELECT  e.first_name AS "First Name", 
        e.last_name AS "Last Name",
        d.department_name AS "Department Name"
FROM employees e INNER JOIN departments d
ON e.department_id = d.department_id
AND SOUNDEX(last_name) = SOUNDEX('olson');

-- SQL/92 with USING --
SELECT  e.first_name AS "First Name", 
        e.last_name AS "Last Name",
        d.department_name AS "Department Name"
FROM employees e INNER JOIN departments d
USING (department_id)
WHERE SOUNDEX(last_name) = SOUNDEX('olsen');



/*********************************************************************************
 Question 5
 Use the tables in your schema.  
 Write a query that produces the following for each employee whose last name begins 
 with an R: <employee last name> earns <salary> monthly but wants <3 times salary>.
 Use a function to format the salary with a dollar sign, commas, and 2 decimal places.
 If formatting salaries in this way introduces extra spaces, use a trimming function 
 to get rid of them. (Hint: This will likely require nesting functions - one within
 the other.) Label the single column produced as "Dream Salaries". Protect against 
 upper/lowercase anomalies in the database using a function.
**********************************************************************************/ 

COLUMN "Dream Salaries" FORMAT "$9,999,999.00"
SELECT CONCAT(CONCAT(CONCAT(CONCAT(last_name, ' earns ' ), 
	   TRIM(TO_CHAR(salary, '$9,999,999.00'))),
	   ' monthly but wants '),
	   TRIM(TO_CHAR(salary * 3, '$9,999,999.00'))) AS "Dream Salaries"
FROM employees
WHERE last_name LIKE 'R%';


/*********************************************************************************
 Question 6
 Use the tables in your schema. 
 Find the average salary for employees in the IT department (the department name
 will be 'IT').  Label this column as "Avg Sal". Format the result to display in 
 dollars using commas (for thousands) with 2 decimal places. Use the SQL/86 and 
 SQL/92.
**********************************************************************************/ 

-- SQL/86 --
COLUMN "Avg Sal" FORMAT "$9,999,999.00"
SELECT d.department_name, 
		AVG(e.salary) AS "Avg Sal"
FROM employees e, departments d
WHERE e.department_id = d.department_id
AND d.department_name = 'IT'
GROUP BY d.department_name;


-- SQL/92 with ON --
SELECT d.department_name, 
		AVG(e.salary) AS "Avg Sal"
FROM employees e INNER JOIN departments d
ON e.department_id = d.department_id
AND d.departmenT_name = 'IT'
GROUP BY d.department_name;

-- SQL/92 with USING --
SELECT  d.department_name, 
		AVG(e.salary) AS "Avg Sal"
FROM employees e INNER JOIN departments d
USING (department_id)
HAVING d.department_name = 'IT'
GROUP BY d.department_name;

/*********************************************************************************
 Question 7
 Use the tables in your schema.  
 Alter the previous query to print out the average salary for all departments, showing
 the department name. (Hint: use the "group by" clause - see p121 of text).  Order the
 output by lowest to highest average salary (Hint: use the column alias). Write this 
 using SQL/92 with USING. Include a report header of "Average Salaries Per Department".
 Clear the title after running the report so it doesn't appear in the next query.
**********************************************************************************/ 
TTITLE LEFT "Average Salaries Per Department"
COLUMN "Avg Sal" FORMAT "$9,999,999.00"

SELECT  d.department_name AS "Department Name", 
		AVG(e.salary) AS "Avg Sal"
FROM employees e INNER JOIN departments d
USING (department_id)
GROUP BY d.department_name
ORDER BY "Avg Sal";

TTITLE OFF


/*********************************************************************************
 Question 8
 Use the tables in your schema.  
 Alter the previous query to only print out those departments that have an average
 salary greater than 10,000.   This time order the results in based on average salary
 in descending sequence.
**********************************************************************************/ 
TTITLE LEFT "Average Salaries Per Department"
COLUMN "Avg Sal" FORMAT "$9,999,999.00"

SELECT  d.department_name AS "Department Name", 
		AVG(e.salary) AS "Avg Sal"
FROM employees e INNER JOIN departments d
USING (department_id)
GROUP BY d.department_name
HAVING AVG(e.salary) > 10000
ORDER BY "Avg Sal" DESC;

TTITLE OFF




/*********************************************************************************
 Question 9
 Use the tables in your schema. 
 For each job, display the job title followed by the number of employees with that
 job title, then the min, max, and avg salary for that job.  Format the results 
 to display in dollars with no decimal places. Set the column headers to be NUM, MIN, 
 MAX and AVERAGE and a report title of "Salaries Per Job".  Use SQL/92 - Implement 
 with USING statement. Hint: you will need to  use a "group by" clause.  Keep the 
 ordering by ascending average salary. Clear the report header at the end.
**********************************************************************************/ 
TTITLE "Salaries Per Job"
COLUMN "MIN" FORMAT "$9,999,999"
COLUMN "MAX" FORMAT "$9,999,999"
COLUMN "AVERAGE" FORMAT "$9,999,999"
SELECT j.job_title AS "Job Title",
	   COUNT(j.job_title) AS "NUM", 
	   MIN(e.salary) AS "MIN", 
	   MAX(e.salary) AS "MAX", 
	   AVG(e.salary) AS "AVERAGE"
FROM jobs j INNER JOIN employees e
USING (job_id)
GROUP BY job_title
ORDER BY AVG(e.salary);

TTITLE OFF

/*********************************************************************************
 Question 10
 Use the tables in your schema.  
 Alter the previous query to only print out those job titles that have more than
 1 employee for the job title.
**********************************************************************************/ 

SELECT j.job_title AS "Job Title",
	   COUNT(j.job_title) AS "NUM", 
	   MIN(e.salary) AS "MIN", 
	   MAX(e.salary) AS "MAX", 
	   AVG(e.salary) AS "AVERAGE"
FROM jobs j INNER JOIN employees e
USING (job_id)
GROUP BY job_title
HAVING COUNT(j.job_title) > 1
ORDER BY AVG(e.salary);



/*********************************************************************************
 Question 11
 Use the tables in your schema.  
 Show the last name, hire date, and use a case statement to form a third 
 column labeled "Experience" If the employee was hired before 1990, they are an 'Old Timer', 
 before 1994 'Senior', before 1997 'Experienced', before 1999 'Junior' and everyone 
 else is a 'Rookie'. Only show employees whose name begins with B. (protect against 
 case anomalies). Order by ascending last name.
**********************************************************************************/ 

SELECT last_name AS "Last Name",
	   TO_CHAR(hire_date, 'yyyy-mm-dd') AS "Hire Date",
		(CASE
			WHEN hire_date < '01-JAN-1990' THEN 'Old Timer'
			WHEN hire_date < '01-JAN-1994' THEN 'Senior'
			WHEN hire_date < '01-JAN-1997' THEN 'Experienced'
			WHEN hire_date < '01-JAN-1999' THEN 'Junior'
			else 'Rookie'
			end) AS "Experience"
FROM employees
WHERE UPPER(last_name) LIKE 'B%'
ORDER BY last_name;
