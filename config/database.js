import { Sequelize } from "sequelize";

const db = new Sequelize("pt_immobi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
