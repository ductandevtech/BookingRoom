
let getHomePage = (req, res)=> {
    return res.render('homepage.ejs')
}

let getInfo = (req, res) => {
    return res.render('test/info.ejs')
}
module.exports = {
    getHomePage: getHomePage,
    getInfo:getInfo,
}