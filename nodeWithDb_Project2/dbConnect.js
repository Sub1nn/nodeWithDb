import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sub_1n:maya2046Lai@subin01.bbc2g1d.mongodb.net/narrowway?retryWrites=true&w=majority"
    );
    console.log("Connected to the mongoose DB");
  } catch (error) {
    console.log(error.message);
    console.log("Error connecting");
  }
};
