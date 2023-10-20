import connectDb from "./config/db.js";
import app from "./index.js";

import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 4000;


//db connection
connectDb();

app.listen(port, () => {
    console.log(`Ecommerce apis is run on the port: ${port}`);
});
