import mongoose from "mongoose";

export const MongoDbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Db connected sucessfully");
	} catch (error) {
		console.log("error while mongodb connection", error);
	}
};

MongoDbConnection();
