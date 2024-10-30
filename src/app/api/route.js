import { NextResponse } from "next/server"

import { MongoDbConnection } from "./utils/config/db"

// const DbConnection = async () => {
//    await MongoDbConnection()
// }

// DbConnection();

export const GET = async () => {
   return NextResponse.json({name:"eren "})
}