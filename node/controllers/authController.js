const User = require('../Models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// Đăng ký
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { username, email, password } = req.body;

    const existingEmail = await User.findOne({ 
      where: { email }
    });
    if (existingEmail) {
      return res.status(400).json({ 
        success: false,
        message: 'Email đã được sử dụng' 
      });
    }

    const existingUsername = await User.findOne({ 
      where: { username }
    });
    if (existingUsername) {
      return res.status(400).json({ 
        success: false,
        message: 'Username đã được sử dụng' 
      });
    }

    const user = await User.create({
      username,
      email,
      password
    });

    res.status(201).json({ 
      success: true,
      message: 'Đăng ký thành công!',
      data: user
    });

  } catch (error) {
    console.error('Lỗi đăng ký:', error);
    
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        success: false,
        message: 'Username hoặc Email đã tồn tại'
      });
    }

    res.status(500).json({ 
      success: false,
      message: 'Lỗi server' 
    });
  }
};

// ✅ Đăng nhập
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { email, password } = req.body;

    // Tìm user theo email
    const user = await User.findOne({ 
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Email hoặc mật khẩu không đúng' 
      });
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = await user.validatePassword(password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false,
        message: 'Email hoặc mật khẩu không đúng' 
      });
    }

    // Tạo JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email,
        role: user.role 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.status(200).json({ 
      success: true,
      message: 'Đăng nhập thành công!',
      token,
      data: user
    });

  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    
    res.status(500).json({ 
      success: false,
      message: 'Lỗi server' 
    });
  }
};