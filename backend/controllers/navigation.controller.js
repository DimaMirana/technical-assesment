const navigationData = require("../dev-data/data/navigation.data");

const getNavigation = (req, res) => {
    res.status(200).json({
        status: "success",
        data: navigationData
    });
};

module.exports = {getNavigation};