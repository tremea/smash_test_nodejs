const db = require('/Desenvolvimento/smash/node-js-smash-test/config')


  exports.smash_test = async (req, res, next) => {
    const Usuario = db.collection("teste");
    await Usuario.add({"ok" : true});

    res.status(200).send({
      success: true
    });
  };

 