/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           minLength: 3
 *           maxLength: 50
 *           example: testuser
 *           description: Tên đăng nhập (chỉ chữ cái, số và gạch dưới)
 *         email:
 *           type: string
 *           format: email
 *           example: test@example.com
 *           description: Địa chỉ email hợp lệ
 *         password:
 *           type: string
 *           minLength: 6
 *           example: "123456"
 *           description: Mật khẩu (tối thiểu 6 ký tự)
 * 
 *     RegisterResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Đăng ký thành công!
 *         data:
 *           $ref: '#/components/schemas/User'
 * 
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: testuser
 *         email:
 *           type: string
 *           example: test@example.com
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           example: user
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: 2024-01-01T00:00:00.000Z
 * 
 *     ValidationError:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         errors:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               msg:
 *                 type: string
 *                 example: Username phải từ 3-50 ký tự
 *               param:
 *                 type: string
 *                 example: username
 *               location:
 *                 type: string
 *                 example: body
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: Email đã được sử dụng
 */

module.exports = {};