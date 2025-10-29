import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { engine as handlebars } from 'express-handlebars';
import { fileURLToPath } from 'url';
import Routes from './routes/index.js';
import db from './config/db/index.js';

// Connect to DB
db.connect();

// __dirname fix for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies (as sent by API clients)
app.use(express.json());

// HTTP logger
//app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// initialize routes
Routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
// nếu k có nodemon thì khi sửa file main.js thì phải dừng server và chạy lại lệnh node main.js để server nhận thay đổi
// template engine
// http logger morgan
// static files
// scss -> css sass --watch src/resources/scss/:src/public/css/ --no-source-map
// thêm bootstrap dùng cdn vào layout.hbs
// tạo thư mục routes, controllers -> xử lý routes và controller riêng biệt
// tạo thư mục models -> tạo model Course dùng mongoose
// tạo thư mục config/db -> cấu hình kết nối mongoose với mongodb ()
// chỉnh sửa controller SiteController để lấy dữ liệu từ mongodb và truyền vào view home.hbs
// tạo thư mục util -> tạo file mongoose.js để xử lý mongoose object về object thường
// tạo thư mục courses, tạo route course.js và controller CourseController.js để xử lý trang chi tiết khóa học
// chỉnh sửa home.hbs để link đến trang chi tiết khóa học
// tạo trang courses/show.hbs để hiển thị chi tiết khóa học
// chinh sua data
