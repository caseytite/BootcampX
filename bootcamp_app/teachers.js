const { Pool } = require('pg');

const pool = new Pool({
  user: 'caseytite',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

// SELECT DISTINCT teachers.name as teacher,
// cohorts.name as cohort
// FROM teachers
// JOIN assistance_requests ON teachers.id = teacher_id
// JOIN students ON students.id = student_id
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name = 'JUL02'
// ORDER BY teacher;

const cohort = process.argv[2];

pool
  .query(
    `
    SELECT DISTINCT teachers.name as teacher,
    cohorts.name as cohort
    FROM teachers
    JOIN assistance_requests ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name = $1 ORDER BY teacher;`,
    [cohort]
  )
  .then((res) => {
    res.rows.forEach((teacher) => {
      console.log(`${teacher.cohort}: ${teacher.teacher} `);
    });
  })
  .catch((err) => {
    console.log('Query error', err.stack);
  });
