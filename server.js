const app = require(".app");

require("dotenv").config();
const PORT = process.env.PORT

app.list(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})