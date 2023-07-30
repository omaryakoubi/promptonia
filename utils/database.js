import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MONGO-DB CONNECTED");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prompt",
      useNewUrlParser: true,
      useUnifedTopology: true,
    });

    isConnected = true;
    console.log("MONGO-DB CONNECTED");
  } catch (error) {
    console.log("MONGO DB NOT CONNECTED", error);
  }
};
