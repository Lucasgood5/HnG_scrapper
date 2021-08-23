/**
 * 
 * @param {String} rawDataObject RawDataBlock from getDataBlock()
 * @returns {Object} JSON converted information
 */
exports.translateRawData = function (rawDataObject) {
    let date = new Date(rawDataObject[0].slice(15, 38))
    console.log(date)
    let ResultArrays = []
    for (let bloc of rawDataObject[1]) {
        // console.log(bloc.match(/<td>\d{0,15}<\/td>/gm))
        ResultArrays.push({
            rank: bloc.match(/<h3>\d{0,15}<\/h3>/gm)[0].slice(4, -5),
            score: bloc.match(/<td>\d{0,15}<\/td>/gm)[0].slice(4, -5)
        })
    }
    console.log(ResultArrays)
    return {
        date: date,
        info: ResultArrays
    }
}