let rr = require("./request").getDataBlock
let td = require("./reader").translateRawData
exports.getOverallStat = async function (username) {
    let Stats = td(await rr(username))
    return {
        date: Stats.date,
        score: Stats.info[0],
        kill: Stats.info[1],
        headshot: Stats.info[2],
        username: username
    }
}
exports.getTacticalStat = async function (username) {
    let Stats = td(await rr(username))
    return {
        date: Stats.date,
        capture: Stats.info[0],
        leadership: Stats.info[1],
        squadplay: Stats.info[2],
        encounterwin: Stats.info[3],
        skirmishwin: Stats.info[4],
        assaultwin: Stats.info[5],
        defendwin: Stats.info[6],
        parajump: Stats.info[7],
        username: username
    }
}
exports.getSupportStat = async function (username) {
    let Stats = td(await rr(username))
    return {
        date: Stats.date,
        mobiledeploy: Stats.info[0],
        saviorkill: Stats.info[1],
        healbox: Stats.info[2],
        ammobox: Stats.info[3],
        panzerbox: Stats.info[4],
        medichp: Stats.info[5],
        enginer: Stats.info[6],
        username: username
    }
}