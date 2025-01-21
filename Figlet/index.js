const figlet = require("figlet");

// figlet("Hello World!!", function(err,data){
//    if (err) {
//       console.log("Something is wrong ..");
//       console.log(err);
//       return;
//    }
//    console.log(data);
// });

figlet("5 : 30 AM ", function(err,data){
   if (err) {
      console.log("Something is wrong ..");
      console.log(err);
      return;
   }
   console.log(data);
});