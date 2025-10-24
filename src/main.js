import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { engine as handlebars } from 'express-handlebars'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})
// nếu k có nodemon thì khi sửa file main.js thì phải dừng server và chạy lại lệnh node main.js để server nhận thay đổi
// template engine
// http logger morgan
// static files
// scss -> css sass --watch src/resources/scss/:src/public/css/ --no-source-map