const db = require('/Desenvolvimento/smash/node-js-smash-test/config')


  exports.smash_test = async (req, res, next) => {

    const csvFilePath='world-cities.csv'
    const csv=require('csvtojson')
    csv()
    .fromFile(csvFilePath)
    .then(async (jsonObj)=>{
        console.log(jsonObj);
        
    
    const Teste = db.collection("smash-teste");
    await Teste.add(jsonObj[0]);
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */ 
    })
     
    // Async / await usage
    const jsonArray=await csv().fromFile(csvFilePath);


    

    res.status(200).send({
      success: true
    });
  };

 