const Koa = require('koa');
const app = new Koa();

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Zboy1301',
  database : 'movies'
});
 
connection.connect();
var dbReturn
connection.query('Select * from movies.customers', function (error, results, fields) {
  if (error) throw error;
  dbReturn=JSON.stringify(results)
  console.log('The solution is: ', results);
});
// response
app.use(ctx => {
  ctx.body = dbReturn;
});

app.listen(3000);