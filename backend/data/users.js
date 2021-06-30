import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'tanu',
    email: 'tanu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'allie',
    email: 'allie@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users