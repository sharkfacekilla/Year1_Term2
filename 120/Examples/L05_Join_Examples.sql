-- ICS120  Lecture 05 Joins
--         SQL Examples

set pagesize 40
set linesize 120

--
-- Slide 5 --
--
set linesize 250;
Desc countries;
Desc regions;
Select * from countries;
Select * from regions;

--
-- Slide 7 --
--
SELECT *
FROM countries, regions
WHERE countries.region_id = regions.region_id;

SELECT country_name, region_name
FROM countries, regions
WHERE countries.region_id = regions.region_id;

--
-- Slide 8 ---
--
SELECT *
FROM countries c, regions r
WHERE c.region_id = r.region_id;

--
-- Slide 10 --
--
SELECT ename, dname FROM scott.emp, scott.dept;

--
-- Slide 11 --
--
SELECT ename, dname�FROM scott.emp CROSS JOIN scott.dept;

--
-- Slide 14 --
--
SELECT 	emp.empno, emp.ename, emp.deptno, dept.deptno, dept.loc
FROM scott.emp, scott.dept
WHERE emp.deptno = dept.deptno;

--
-- Slide 20 --
--
SELECT p.name, pt.name
FROM storedb.products p, storedb.product_types pt
WHERE p.product_type_id = pt.product_type_id;

SELECT p.name, pt.name
FROM storedb.products p INNER JOIN storedb.product_types pt
ON p.product_type_id = pt.product_type_id;

SELECT p.name, pt.name
FROM storedb.products p INNER JOIN storedb.product_types pt
USING (product_type_id);

--
-- Slide 21 --
--
SELECT e.last_name, d.department_name
FROM employees e INNER JOIN departments d
ON (e.department_id = d.department_id);

--
-- Slide 23 --
--
SELECT e.last_name, d.department_name
FROM employees e INNER JOIN departments d
USING (department_id);

SELECT e.last_name, d.department_name
FROM employees e, departments d
WHERE e.department_id = d.department_id;


--
-- Slide 27 --
--
SELECT employee_id, city, department_name
FROM locations l INNER JOIN departments d
ON (d.location_id = l.location_id)
INNER JOIN employees e
ON (d.department_id = e.department_id);
					or
SELECT employee_id, city, department_name
FROM locations l INNER JOIN departments d
USING (location_id)
INNER JOIN employees e
USING (department_id);

--
-- Slide 29 --
--
SELECT last_name, city, department_name
FROM locations l, departments d, employees e
WHERE d.location_id = l.location_id
AND d.department_id = e.department_id
AND l.city = 'Southlake';

--
-- Slide 31 --
--
SELECT 	e.first_name, e.last_name, e.salary, s.salary_grade_id
FROM storedb.employees e, storedb.salary_grades s
WHERE e.salary BETWEEN s.low_salary AND s.high_salary;

--
-- Slide 36 --
--
SELECT e.ename, d.deptno, d.dname
FROM scott.emp e, scott.dept d
WHERE e.deptno = d.deptno(+)
ORDER BY e.deptno;

SELECT e.ename, deptno, d.dname
FROM scott.emp e LEFT OUTER JOIN scott.dept d USING (deptno)
ORDER BY deptno;


--
-- Slide 37 --
--
select e.ename, d.deptno, d.dname
from scott.emp e, scott.dept d
where e.deptno(+) = d.deptno
order by e.deptno;

select e.ename, deptno, d.dname
from scott.emp e RIGHT OUTER JOIN scott.dept d USING (deptno)
order by deptno;

--
-- SLide 40 --
--
SELECT e.ename, d.deptno, d.dname
FROM scott.emp e, scott.dept d
WHERE e.deptno(+) = d.deptno;

SELECT e.ename, d.deptno, d.dname
FROM scott.emp e RIGHT OUTER JOIN scott.dept d
ON e.deptno = d.deptno;

SELECT e.ename, deptno, d.dname
FROM scott.emp e RIGHT OUTER JOIN scott.dept d
USING (deptno);

--
-- Slide 42 --
--
SELECT e.ename,d.dname
FROM scott.emp e FULL OUTER JOIN scott.dept d USING (deptno)
order by 1;

--
-- Slide 43
--

SELECT e.ename,d.dname
FROM scott.emp e, scott.dept d 
where e.deptno(+) = d.deptno
UNION
SELECT e.ename,d.dname
FROM scott.emp e, scott.dept d 
where e.deptno = d.deptno(+)
order by 1;



--
-- Slide  45  --
--
SELECT worker.ename||' works for '||manager.ename
FROM scott.emp worker, scott.emp manager
WHERE worker.mgr = manager.empno;

--
-- Slide 46 --
--
select e.last_name as emp, m.last_name as mgr
from storedb.employees e, storedb.employees m
where e.manager_id = m.employee_id�;

--
-- left outer join --
--
select e.last_name as emp, m.last_name as mgr
from storedb.employees e, storedb.employees m
where e.manager_id = m.employee_id(+)�;

--
-- right outer join --
--
select e.last_name as emp, m.last_name as mgr
from storedb.employees e, storedb.employees m
where e.manager_id = m.employee_id(+)�;








