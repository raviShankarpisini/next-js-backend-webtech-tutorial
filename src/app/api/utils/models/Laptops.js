import mongoose from "mongoose";

export const LaptopsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		model: {
			type: String,
			required: true,
			unique: true,
		},
		price: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const LaptopModel =
	mongoose.models.laptops || mongoose.model("laptops", LaptopsSchema);
