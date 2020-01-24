module.exports = (application) => {
    
    application.get('/confirmed', (req, res) => {
        res.render("confirmation/confirmation-email");
    });
}