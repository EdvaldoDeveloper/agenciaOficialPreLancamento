var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: ' localhost:3306',
        user: 'iscodec1_edvaldo-developer',
        password: 'pr06390721',
        database: 'iscodec1_agencia'
    });
    
}
module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}