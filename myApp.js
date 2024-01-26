let express = require('express');
let app = express();


app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

  app.listen(3000, function(){console.log('Rodando')});



// get => pedir info
// post => receber info
// put => atulizar info
// delete => é obvio
// options => informações sobre api (requisição)































 module.exports = app;
