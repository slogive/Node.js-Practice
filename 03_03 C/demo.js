var fs = require('fs');
var data = {
  name: 'Sara',
};

fs.writeFile('data.json', JSON.stringify(data), (err, data) => {
  console.log('write finished');
});
