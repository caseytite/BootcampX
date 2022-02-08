-- Get the total number of assignments for each day of bootcamp.

-- Select the day and the total assignments.
-- Order the results by day.
-- This query only requires the assignments table.
-- Expected Result:

SELECT day, count(*)
FROM assignments
GROUP BY day
ORDER BY day;
