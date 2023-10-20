import express from "express";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

//checking code is working fine or not
app.get("/", async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "E-commerce is working fine."
    })
});


export default app;
