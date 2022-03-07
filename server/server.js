require('dotenv').config();
require('./DB/ZooDb');

const express = require('express');
const cors = require('cors');
const animalRouter = require('./routers/animals-route');
const employeesRouter = require('./server/routers/employees-route');
const useRouter = require('./server/routers/users-route');
const port =process.env.PORT 
const app = express();
const passport = require('passport');
require('./config/passport')(passport);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
    
});
app.use('/auth', useRouter)
app.use(passport.initialize())
app.use('/home',(req,res)=>{res.send("home page")});
app.use('/animals',passport.authenticate('jwt', { session: false }) , animalRouter);
app.use('/employee',passport.authenticate('jwt', { session: false }), employeesRouter);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join('client/build')))
    app.get('*', (req, res) =>
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
    )
  }