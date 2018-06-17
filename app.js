const express = require('express');
const app = express();
const axios = require('axios');

app.listen(process.env.PORT || 3000, function () {
  console.log('Server running ┬──┬◡ﾉ(°-°ﾉ)');
});

app.get('/', function (req,res){
	res.send("Server running");
})

axios({
  url: 'https://antserver-blocjgjbpw.now.sh/graphql?query={ants{length}}',
  method: 'post'
  // data: {
  //   query: `
  //       {
  //         ants {
  //           name
  //         }
  //       }
  //     `

}).then((result) => {
  // console.log(result.data)
  var object = result.data;
  //traversing through the object that we get back
  for (var dude in object) {
      var object2 = object[dude];
      // console.log(object[dude]);
      for( var antThing in object2){
        var resultsArray = object2[antThing];
        // console.log(resultsArray[0]);
        for (var i = 0; i < resultsArray.length; i++) {
          console.log(resultsArray[i].length);
        }
      }
  }
});

function generateAntWinLikelihoodCalculator() {
  var delay = 7000 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}
