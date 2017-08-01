var express = require('express')
var compression = require('compression')
var app = express()

app.set('view engine', 'html')
app.use(express.static('build'))
app.use(compression())
app.get('*', (req,res) => {
  res.render('index.html')
})

app.listen(process.env.PORT || 4000, (err, succ) => {
   console.log('Server set ')
})
