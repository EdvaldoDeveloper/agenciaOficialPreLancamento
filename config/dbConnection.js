var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: 'localhost:3306',
        user: 'iscodec1_admin',
        password: 'social4904',
        database: 'iscodec1_db'
    });
    
}
module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}