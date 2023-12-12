exports.seed = async function (knex) {
    await knex("tasks").del();
    await knex("tasks").insert([
      {
        task_description: "task is tough",
        task_notes:"almost done",
        task_completed: false,
        project_id:2
      },
      {
        
        task_description: "need to cook food",
        task_notes:"gather all ingredients",
        task_completed: true,
        project_id:1
      }, 
      {
       
        task_description: "heat up oven",
        task_notes:"needs to be set at 400 degrees",
        task_completed: false,
        project_id:3
      },
    ]);
  };