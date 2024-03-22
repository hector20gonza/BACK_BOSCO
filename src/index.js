require("dotenv").config();
const { conn } = require("./DB_conection");
const { app } = require("./app");
const {PORT}=process.env
const  PORTS= PORT || 3001
conn.sync({ alter: false }).then(() => {
  app.listen(PORTS, () => {
    console.log("On work")
})
});
