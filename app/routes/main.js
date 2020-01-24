const ValidationContract = require('../validation/form')

module.exports = (application) => {

    application.get('/', (req, res) => {
        res.render("main/index");
    });
    application.post('/contatos/salvar', (req, res) => {
        let contract = new ValidationContract();
        contract.isEmail(req.body.email, 3, 'O texto para teste');

        if (!contract.isValid()) {
            res.redirect('/erro')
            return;
        }
      
        let contato = req.body;
        let connection = application.config.dbConnection();
        let contatosModel = application.app.models.contatosModel;
        contatosModel.salvarContato(contato, connection, (erro, result) => {
            res.redirect('/');
        });

    });
}

