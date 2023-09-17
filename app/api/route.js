import { NextRequest, NextResponse } from "next/server"
const fs = require('fs');
let test = require('db/data.json');


export async function GET(req, res) {
    // req.nextUrl.searchParams.get('id')
    let getData = JSON.parse(fs.readFileSync('db/data.json'))
    return NextResponse.json(getData);
}

export async function POST(req,res) {
    let b = await req.json()
    
    fs.writeFileSync('db/data.json',JSON.stringify([...test,b]))
    let getData = JSON.parse(fs.readFileSync('db/data.json'))
    return NextResponse.json(getData);
}