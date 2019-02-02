const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/", express.static("public"));

// mongodb
mongoose.connect("mongodb://read:test123@ds119085.mlab.com:19085/gql-ninja", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  //console.log("mongodb connected");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: false
  })
);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Now listening on port ", PORT);
});
