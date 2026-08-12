const homeData = require("../dev-data/data/home.data");

const getHome = (req,res) =>{
    res.status(200).json({
        status: "success",
        data: homeData
    })
};

module.exports = {getHome};