module.exports = (application) => {
    
    application.get('/erro', (req, res) => {
        res.render("errors/email-erro");
    });
}