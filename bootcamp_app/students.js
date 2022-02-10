const { Pool } = require('pg');

const pool = new Pool({
  user: 'caseytite',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

const cohort = process.argv[2];
const limit = process.argv[3];

pool
  .query(
    `SELECT students.id, students.name as student, cohorts.name as cohort 
    FROM students 
    JOIN cohorts ON cohort_id = cohorts.id 
    WHERE cohorts.name LIKE $1
    LIMIT $2;`,[`%${cohort}%`, limit]
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.student}'s id is ${user.id} and they are in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error('query error', err.stack));
