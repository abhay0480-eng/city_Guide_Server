

export const getDataByPathParams = (req, data, filterName) => {

    const urlParams = req.url.split('/').pop()
    const filteredData = data?.buddies?.filter((item) => item[filterName] === urlParams)
    return filteredData
}