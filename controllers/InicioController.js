module.exports = {
    inicio: async (req, res, next) => {
        res.render('index', {cat: false})
    },
}