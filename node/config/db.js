const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('AnimeVietsub', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  timezone: '+07:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('✅ Sequelize kết nối database thành công!'))
  .catch(err => console.error('❌ Lỗi kết nối Sequelize:', err));

module.exports = sequelize;