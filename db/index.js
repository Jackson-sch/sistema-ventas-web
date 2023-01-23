const mongoose = require("mongoose");

const dbConnect = (app) => {
/* Connecting to the MongoDB database. */
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGO_DB_PASS}@desarrollo.vge1rqc.mongodb.net/sistema-web?retryWrites=true&w=majority`
  )
  .then((result) => {
    /* Setting the port to 4000 if the environment variable PORT is not set. */
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`servidor en el puerto ${PORT}`);
    });
    console.log("conexion exitosa a la base de datos mongodb");
  })
  .catch((err) => console.log(err));  
}

module.exports = dbConnect;