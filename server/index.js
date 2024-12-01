import dbConnect from "./db/dbConnect.js";
import app from "./app.js";

dbConnect().then(() => {
    app.listen(3000, () => {
        console.log("Server Started...");
    })
})