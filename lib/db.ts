import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "next-blog",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log("Error connecting to MongoDB", error);
    throw new Error(error);
  }
};

export default connect;
