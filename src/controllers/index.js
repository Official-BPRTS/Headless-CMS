class IndexController {
    getIndex(req, res) {
        res.render('index', { title: 'Home Page' });
    }
}

module.exports = IndexController;