var mysql = require('mysql');
var dbconfig = require('../config/database');
var pool = mysql.createPool(dbconfig.connection);

// Function to get scores for the leaderboard page
exports.getScores = function(callback) {
    var sql = "SELECT username, score, display_name FROM score ORDER BY score DESC LIMIT 10";
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        connection.query("USE " + dbconfig.database);
        connection.query(sql, function(err, results) {
            console.log(results);
            connection.release();
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
}