import { NextResponse } from "next/server";
import { LaptopModel } from "../../utils/models/Laptops";

export const GET = async () => {
    // return NextResponse.json({ laptops: "all laptops data" });
    const laptopsData = await LaptopModel.find({})
    return NextResponse.json({ laptopsData });

};

export const POST = async (request) => {
	const { title, model, price } = await request.json();
	await LaptopModel.create({ title, model, price });
	return NextResponse.json({ message: "laptop added succesfully" });
};
