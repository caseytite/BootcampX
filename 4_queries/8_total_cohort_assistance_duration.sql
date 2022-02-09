
-- Get the total duration of all assistance requests for each cohort.

-- Select the cohort's name and the total duration the assistance requests.
-- Order by total_duration.
-- Look at the ERD to see how to join the tables.
-- cohort | total_duration 

SELECT cohorts.name as cohort, SUM(started_at-completed_at) as total_duration
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id  = student_id
GROUP BY cohorts.name
ORDER BY total_duration DESC;
