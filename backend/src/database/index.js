import mongoose from "mongoose";
import { db } from "../config.js";

const dbURI = `mongodb+srv://${db.user}:${encodeURIComponent(
  db.password
)}@cluster0.g05ieid.mongodb.net/${
  db.name
}?retryWrites=true&w=majority&appName=Cluster0`;

const options = {
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

mongoose.set("strictQuery", true);

mongoose
  .connect(dbURI, options)
  .then(() => console.log("MongoDb connected"))
  .catch((error) => console.log(error));



process.on("SIGINT", () => {
  mongoose.connection.close().finally(() => {
    console.log(
      "Mongoose default connection disconnected through an app termination"
    );
    process.exit(0);
  });
});
