const fs = require("fs");

const a = new Promise(function(resolve, reject) {
  fs.readdir("/", (err, result) => {
    if (err) {
      reject(err.message);
    }
    resolve(result);
  });
});

a.then(result => console.log("Result",result))
.catch(err => console.log('Error',err));                                                                                                                                                                                                                                                                                                                                                                
