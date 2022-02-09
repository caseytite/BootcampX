
-- Get the average duration of assistance requests for each cohort.

-- Select the cohort's name and the average assistance request time.
-- Order the results from shortest average to longest.
--  name  | average_assistance_time 

SELECT cohorts.name as name, AVG(started_at-completed_at) as average_assistance_time
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id  = student_id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC;
