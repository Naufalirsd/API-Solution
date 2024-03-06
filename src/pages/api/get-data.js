const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Data temporary untuk menyimpan informasi pengguna
let userData = {};

// Endpoint untuk mendapatkan data berdasarkan NIP
app.get("/api/get-data", (req, res) => {
    const { nip } = req.query;

    if (userData[nip]) {
        const { NAME } = userData[nip];
        res.status(200).json({ name: NAME });
    } else {
        res.status(404).json({ message: "Data not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
