import { NextRequest, NextResponse  } from "next/server"
const fs = require('fs');
let test = require('db/data.json');


export async function GET(req, {params}) {
    
    let getData = JSON.parse(fs.readFileSync('db/data.json'))
    let data = getData.filter(obj=>obj.id == params.id)
    return NextResponse.json(data);
}
