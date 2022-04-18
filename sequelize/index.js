const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sadb', 'sa', 'sadb', { // dbname, user, pass
  host: 'localhost',
  dialect: 'postgres',
});


const run = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

run();