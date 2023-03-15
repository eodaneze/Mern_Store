import bcrypt from "bcryptjs"
const users = [
  {
    name: "daniel",
    email: "ezealidaniel90@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Network Paul",
    email: "network90@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Deo",
    email: "deo@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
