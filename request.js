let cat_switch = ['overall', 'tactical', "support"]
const rp = require("request-promise")
/**
 * 
 * @param {String} playername The ingame Username of the seeked players 
 * @param {Number} category Statistic tab wanted : 0 = overall, 1 = tactical, ...
 * @returns {Promise} Promise of the HTML data block from the site in an array. [String:'Lastupdate dd/mm/yyyy hh:mm:ss UTC', Array[String: HTML DATA]]
 */
exports.getDataBlock = async function (playername, category = 0) {
    if (typeof playername != typeof "") throw new Error("getRawData playername need to be a string.")
    if (typeof category != typeof 1) throw new Error("getRawData category have to be a number.")
    if (category < 0 | category > 5) throw new Error("getRawData category need to be between 1 and 6.")
    let uri = `https://heroesandgenerals.com/leaderboard/${cat_switch[category]}/?gamertag=${playername}`
    let rd
    await rp({
        "rejectUnauthorized": false,
        "url": uri
    }).then((r) => {
        rd = [[...r.match(/Last updated: \d*\/\d*\/\d* \d*:\d*:\d*..../gms)][0], [...r.match(/<tr class="selected">.{0,1500}<td>Lucasgood<\/td>.{0,50}<\/tr>/gms)]]
    }).catch(e => { throw new Error(e) })
    return rd
}