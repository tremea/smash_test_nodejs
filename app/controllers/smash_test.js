

const db = require('/Desenvolvimento/smash/smash-test/config')
const express = require('express')


exports.smash_test = async (req, res, next) => {

  const csvFilePath = 'world-cities.csv'
  const csv = require('csvtojson')
  csv()
    .fromFile(csvFilePath)
    .then(async (jsonObj) => {


      var listAdd = [];
      listAdd.push(jsonObj[0]);
      var auxCountry = jsonObj[0].country;


      for (var i = 1; i < jsonObj.length; i++) {
        if (auxCountry == jsonObj[i].country) {
          listAdd.push(jsonObj[i]);
        } else {

          db.collection("world-cities").doc(auxCountry).set({"countries" : listAdd}).then(() => {
            console.log("Elementos inseridos");
          });
          listAdd = [];
          listAdd.push(jsonObj[i]);
          auxCountry = jsonObj[i].country;


        }
        console.log(jsonObj[i].country);
      }


      /*db.collection("world-cities").doc("world-cities").set({ "world-cities": jsonObj }).then(() => {
        console.log("Elementos inseridos");
      });*/


    })


  res.status(200).send({
    success: true
  });
};


exports.smash_test_get = async (req, res, next) => {


  const world_cities = db.collection('world-cities');//.doc('world-cities');

  const doc = await world_cities.get();

  var data = doc.docs.map(doc => doc.data());

  return res.status(200).send({
    success: true,
    data
  });

  /*if (!data.exists) {
    return res.status(200).send({
      success: false,
      data
    });
  } else {
    console.log('Document data:', doc.data());
    return res.status(200).send({
      success: true,
      data
    });
  }

*/


};

exports.smash_test_get_country = async (req, res, next) => {

var country = req.params.country; 
  const world_cities = db.collection('world-cities').doc(country);

  const doc = await world_cities.get();


  if (!doc.exists) {
    return res.status(200).send({
      success: true,
      data: []
    });
  } else {
    console.log('Document data:', doc.data());
    return res.status(200).send({
      success: true,
      data: doc.data()
    });
  }





};
