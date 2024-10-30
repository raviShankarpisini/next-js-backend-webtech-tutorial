import mongoose from "mongoose";

export const mobileSchema = new mongoose.Schema(
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

export const MobileModal =
	mongoose.models.mobile || mongoose.model("mobile", mobileSchema);
