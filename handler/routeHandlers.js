import { getData } from "../utility/getData.js"
import { sendResponse } from "../utility/sendResponse.js"
import { getDataByPathParams } from "../utility/getDataByPathParams.js"


export const handleGet = async (req, res) => {
    try {
        const parsedData = await getData()
        if (req.url === "/api") {
            sendResponse(res, 200, 'application/json', JSON.stringify(parsedData))
        } else if (req.url.startsWith('/api')) {
            const filteredData = getDataByPathParams(req, parsedData, "id")
            sendResponse(res, 200, 'application/json', JSON.stringify(filteredData))
        }
    } catch (error) {
        throw new Error(error)
    }
}

