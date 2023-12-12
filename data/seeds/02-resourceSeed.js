exports.seed = async function (knex) {
  await knex("resources").del();
  await knex("resources").insert([
    {
      resource_name: "home depot",
      resource_description: "searches for building materials",
    },
    {
      resource_name: "discord",
      resource_description: "helps connect individuals",
    },
    {
      resource_name: "sprints",
      resource_description: "tests peoples abilities",
    },
  ]);
};
