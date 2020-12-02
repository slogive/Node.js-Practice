var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname));
// app.listen(port, () => {
//   console.log(`Server is listening in port: ${port}`);
// });

var expressport = app.listen(3000, () => {
  console.log(`Server is listening in port ${expressport.address().port}`);
});
