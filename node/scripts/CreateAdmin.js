const User = require('../Models/User');

/**
 * Tạo tài khoản admin mặc định nếu chưa tồn tại
 */
async function createAdminAccount() {
  try {
    // Kiểm tra xem đã có admin chưa
    const existingAdmin = await User.findOne({
      where: { email: 'admin@gmail.com' }
    });

    if (existingAdmin) {
      console.log('ℹ️  Tài khoản admin đã tồn tại');
      return;
    }

    // Tạo admin mới
    const admin = await User.create({
      username: 'admin',
      email: 'admin@gmail.com',
      password: '12345678', 
      role: 'admin'
    });

    console.log('✅ Tạo tài khoản admin thành công!');
    console.log('📧 Email: admin@gmail.com');
    console.log('🔑 Password: 12345678');
    console.log('👤 Username:', admin.username);
    console.log('🆔 ID:', admin.id);

  } catch (error) {
    console.error('❌ Lỗi khi tạo admin:', error.message);
  }
}

module.exports = createAdminAccount;