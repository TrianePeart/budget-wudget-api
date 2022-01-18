const app = require(".app");

require("dotenv").config();
const Port = process.env.PORT

app.list(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})