HnG_Scrapper = {}
HnG_Scrapper.getDataBlock = require("./request").getDataBlock
HnG_Scrapper.translateRawData = require("./reader").translateRawData
let man = require("./manager")
HnG_Scrapper.getOverallStat = man.getOverallStat
HnG_Scrapper.getTacticalStat = man.getTacticalStat
HnG_Scrapper.getSupportStat = man.getSupportStat

module.exports = HnG_Scrapper