const { NextResponse } = require("next/server")

//here we are sending json data as response when user access the url by localhost:3000/api/students
// this is backend operation
// for api handling from the backend folder name should be api/[parameter]/route.js


// const DbConnection = async () => {
// 	await MongoDbConnection();
// };

// DbConnection();

export const GET = async() => {
    return NextResponse.json({students:"all students data"})
}