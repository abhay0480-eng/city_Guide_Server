import http from "node:http"
import { handleGet } from "./handler/routeHandlers.js"

const PORT = process.env.PORT || 8000

const server = http.createServer(async (req, res) => {

    if (req.method === "GET") {
        await handleGet(req, res)
    }

})

server.listen(PORT, "0.0.0.0", () => console.log(`Server is running on port ${PORT}`))