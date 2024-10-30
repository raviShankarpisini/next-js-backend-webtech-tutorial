import { NextResponse } from "next/server";
import { MobileModal } from "../../utils/models/Mobile";

export const GET = async () => {
    // return NextResponse.json({ mobiles: "all mobiles data" });
    const mobileData = await MobileModal.find({});
     return NextResponse.json({ mobileData });
};

export const POST = async (request) => {
	const { title, model, price } = await request.json();
	await MobileModal.create({ title, model, price });
	return NextResponse.json({ message: "mobile added successfully" });
};
