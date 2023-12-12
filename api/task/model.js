// build your `Task` model here
const db = require('../../data/dbConfig')

async function get(){
    const rows = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select(
        'task_id',
        'task_description', 
        'task_notes',
        'task_completed',
        'p.project_name',
        'p.project_description'
        )
        const result = rows.map((tasks) => {
            return {
              ...tasks,
              task_completed: tasks.task_completed ? true : false,
            };
          });
          return result
}

module.exports ={
    get
}