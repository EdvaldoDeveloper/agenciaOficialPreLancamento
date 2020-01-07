var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: '51.79.72.47',
        user: 'root',
        password: 'pr06390721',
        database: 'iscodec1_agencia'
    });
    
}
module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}