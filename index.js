let mongoose = require('mongoose');
let express = require('express');
const User = require('./model/User');
let jwt = require('jsonwebtoken');
let app = express();
let bcypt = require('bcryptjs');

let cors = require('cors');
app.use(cors());
// Middile Ware......
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// set the ejs Path...
app.set('view engine', 'ejs');

// Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/databasename').then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
})

// Home Page
app.get('/', (req, res) => {
    res.render("index");
})


// Register Page Creation..
app.get('/create', (req, res) => {
    res.render('Create')
})

app.post("/create", async (req, res) => {
    let user = req.body;
    // console.log(user);
    let data = await User.findOne({ email: user.email })

    if (data) {
        res.send("User Alreadyy Exits")
        // res.status(400).send("User Alreadyy Exits")
    } else {

        let hashedPassword = await bcypt.hash(user.passWord, 10);
        console.log(hashedPassword);

        let dbUser = new User({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            // passWord:user.passWord,
            passWord: hashedPassword,
            role: user.role || 'user'
        })
        await dbUser.save();
        res.send("your account has been Successfully Created ");
    }
})


// Login Page
app.get('/login', (req, res) => {
    res.render('Login')
})

app.post('/login', async (req, res) => {
    let loginData = req.body;

    let data = await User.findOne({ email: loginData.email });
    if (data) {
        // let validPass = await loginData.passWord == data.passWord;
        let validPass = await bcypt.compare(loginData.passWord, data.passWord)
        // console.log(validPass);

        if (validPass) {
            // Jsonwebtoken Used.
            let token = jwt.sign({ data: data.email, role: data.role }, 'wduohuodihidhind', { expiresIn: '1h' });
            console.log(token, "Token Generated");
            res.send({ token });
        } else {
            res.send("Invalid Password");
        }
    } else {
        res.send("Try registering first")
    }
})

//Logout page
app.get('/logout',(req,res)=>{
    localStorage.removeItem('token');
})

function checkRole(role) {
    return (req, res, next) => {
        let token = req.headers.authorization;

        if (!token) {
            return res.send('unAuthorization User...........!!!')
        } else {
            let decodeToken = jwt.verify(token, 'wduohuodihidhind')
            if (decodeToken.role !== role) {
                res.send('Access Denided........!!!!')
            } else {
                next();
            }
        }
    }
}

// Admin Page.
app.get('/admin', checkRole('admin'), (req, res) => {
    res.send("this page is only accessible by the admin");
})

// User Page.
app.get('/user', checkRole('user'), (req, res) => {
    res.send("This page is accessible by user");
})

//moderator page
app.get('/moderator',checkRole('moderator'),(req,res)=>{
    res.send('moderator hu mai heheheh')
 
 })

// Server Readyyyy
app.listen(8000, console.log("Server On Port 8000"));
