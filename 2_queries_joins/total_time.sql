SELECT SUM(duration) as total_duration
FROM assignment_submissions
JOIN students ON student_id = students.id 
WHERE students.name = 'Ibrahim Schimmel';

--  so we select the sum of a duration and set it to be displayed as total_duration
--  we then pick the table to select from, assignment_submissions
-- we then need to join students because assignment_submissions does not have student names, but, it does have student_id
-- with that we can say join on student_id(from assgn) = students.id(from stds) and that makes the link
-- now we pick the student where student.name = whomever