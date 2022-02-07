
-- Get the names of all the students from a single cohort
-- select id and name
-- order by their name alphabetically

SELECT id, name
FROM students
WHERE cohort_id = 1
ORDER BY name;