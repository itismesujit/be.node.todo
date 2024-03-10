
module.exports.init = (app) => {
    app.use("/ping", (req, res, next) => 
        res.send(`Server is alive and uptime is : ${process.uptime()}`)
    )
}
