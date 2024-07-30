import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'user', 'password', {
  dialect: 'sqlite',
  host: 'localhost',
  port: 5432,
  storage: 'database.sqlite',
  logging: false,
});

export default sequelize;
