/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable("project", table =>{
        table.increments("project_id")
        table.string("project_name", 200).notNullable().unique()
        table.text("project_description", 300)
        table.boolean("project_completed").defaultTo(0)
      })
      .createTable("resource", table => {
        table.increments('resource_id')
        table.string("resource_name", 200).notNullable().unique()
        table.text("resource_description", 300)
      })
      .createTable("task", table =>{
        table.increments("task_id")
        table.text("task_description", 300).notNullable()
        table.text("task_notes")
        table.boolean("task_completed").defaultTo(0)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project')

      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
  .dropTableIfExists('')
};
