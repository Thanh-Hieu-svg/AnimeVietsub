const express = require('express');
const cors = require('cors');  // ✅ Import cors
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swagger');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// ✅ CORS - Đặt trước các middleware khác
app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'AnimeVietsub API Docs'
}));

app.get('/', (req, res) => {
  res.send(`
    <h1>AnimeVietsub API</h1>
    <p><a href="/api-docs">📚 Xem API Documentation</a></p>
  `);
});

// Routes
app.use('/api/auth', authRoutes);

// Error handler
app.use(errorHandler);

app.listen(3000, async () => {
  console.log('Server chạy tại http://localhost:3000');
  console.log('📚 API Docs: http://localhost:3000/api-docs');
  
  try {
    await sequelize.authenticate();
    console.log('✅ Kết nối database thành công!');
  } catch (error) {
    console.error('❌ Lỗi kết nối database:', error.message);
  }
});