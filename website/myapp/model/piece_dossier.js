var db = require('./db.js');
var cand = require('./candidature.js')
module.exports = {
    read: async (id_piece) => {
        return new Promise((resolve, reject) => {
            db.query("select * from Piece_Dossier where id_piece= ?", id_piece, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    },

    readall: async () => {
        return new Promise((resolve, reject) => {
            const sql = "select * from Piece_Dossier"
            db.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    create: async (type, candidature, fichier) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO Piece_Dossier (id_piece, type, candidature, fichier) \
            VALUES(NULL, ?, ?, ?);", [type, candidature, fichier], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    var id = results.insertId;
                    resolve(id);
                }
            });
        });
    },

    delete : async (id_piece) => {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM Piece_Dossier WHERE id_piece = ?";
            db.query(sql, id_piece, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    },

    updateType : async (id_piece, new_type) => {
        return new Promise((resolve, reject) => {
            const sql = "UPDATE Piece_Dossier SET type = ? WHERE id_piece =?";
            db.query(sql, [new_type, id_piece], (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            })
        })
    },

    updateFichier : async (id_piece, new_fichier) => {
        return new Promise((resolve, reject) => {
            const sql = "UPDATE Piece_Dossier SET fichier = ? WHERE id_piece = ?";
            db.query(sql, [new_fichier, id_piece], (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            })
        })
    },

    // read: function (id_piece, callback) {
    //     db.query("select * from Piece_Dossier where id_piece= ?",id_piece, function(err, results) {
    //         if (err) throw err;
    //         callback(results);
    //     });
    // },

    // readall: function (callback) {
    //     db.query("select * from Piece_Dossier", function (err, results) {
    //         if (err) throw err;
    //         callback(results);
    //     });
    // },


    

    // //à voir
    // create: function (type, candidature, fichier, callback) {
    //     cand.read(candidature, function(err, results) {
    //         if (err) {
    //             callback(err, null);
    //         } else {
    //             if (results.length == 1) {
    //                 rows = db.query("INSERT INTO Piece_Dossier (id_piece, type, candidature, fichier) \
    //                 VALUES(NULL, ?, ?, ?);", [type, candidature, fichier], function (err, results) {
    //                     if (err) {
    //                         console.log("erreur2");
    //                         callback(err, null);
    //                     } else {
    //                         callback(err, "Pièce de dossier ajoutée !");
    //                     }
    //                 });
    //             } else {
    //                 console.log("Candidature inexistante.")
    //             }
    //         }
    //     })
    // },


    // updateType: function (id_piece, new_type, callback) {
    //     rows = db.query("UPDATE Piece_Dossier SET type = ? WHERE id_piece =?", [new_type, id_piece], function (err, results) {
    //         if (err) {
    //             callback(err, null);
    //         } else {
    //             callback(null, true);
    //         }
    //     });
    // },


    // updateFichier: function (id_piece, new_fichier, callback) {
    //     rows = db.query("UPDATE Piece_Dossier SET fichier = ? WHERE id_piece = ?", [new_fichier, id_piece], function (err, results) {
    //         if (err) {
    //             callback(err, false);
    //         } else {
    //             callback(null, true);
    //         }
    //     });
    // },


}