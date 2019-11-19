module.exports = {
    environment: process.env.DB_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET || 'shhhhh'
}