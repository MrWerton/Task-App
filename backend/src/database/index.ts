import mongoose from 'mongoose'

function conectionDatabase(){
  mongoose.connect(`${process.env.DB_URL}`);
      const db = mongoose.connection;
      db.on("error", (error) => console.error(error));
      db.once("open", () => console.log("🚀 Connected to the database!"));
}

export {conectionDatabase}