var express = require("express");

var app = express();

var PORT = proces.env.PORT || 3000;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

require(".routes/apiRoutes")(app);
require(".routes/htmlRoutes")(app);

app.listen(PORT , function(){
    console.log("App Listening on Port: " + PORT);
})