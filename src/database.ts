import { connect } from "mongoose";


 export async function starConection() {
     await connect('mongodb://localhost/photo-gallery-db');
     console.log('database is connected');
}