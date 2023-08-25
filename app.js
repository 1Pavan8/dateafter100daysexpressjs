var addDays = require("date-fns/addDays");
const exp = require("express");
const app = exp();

module.exports = app.get("/", (req, resp) => {
  let d = addDays(new Date(), 100);
  resp.send(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
});

app.listen(3000);
