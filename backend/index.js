const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const EmployeeModel = require("./models/employee")
let app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
var url = process.env.MONGO_URL;

mongoose.connect(url,
{
    usenewUrlparser:true,
    useUnifiedTopology:true
})

app.get('/', (req,res) =>{
    res.send("<h1>Testing- basic server working</h1>")
})
//Get All
app.get('/employees',cors(), async(req,res) => {
    const employee = await EmployeeModel.find({}).select("firstName lastName emailID")
    try {
        res.status(200).send(employee);
      } catch (err) {
        res.status(500).send(err);
      }
});
//Get One
app.get('/employee',cors(), async(req,res) =>{

    const employee = await EmployeeModel.find({_id: req.query.id})
    console.log(req.query.id)
    try{
        res.send(employee);
    }catch(err){
        res.status(500).send(err)
    }

});


//add New Employee
app.post('/employee', async (req, res) => {
  
    const employee = new EmployeeModel(req.body);
    console.log("here below is the Data")
    console.log(req.body)
    
    try {
      await employee.save((err) => {
        if(err){
          res.send(err)
        }else{
          res.send(employee);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

  //Update Empolyee
  app.patch('/employee/:id',cors() ,async(req,res)=>{
    console.log(req.body)
    try{
        const empolyee = await EmployeeModel.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        res.send(empolyee)
    } catch(error){
        res.status(500).send(error)
    }
  });
  //Delete Empolyee
  app.delete('/employee/:id',cors(), async(req,res) =>{
    try {
        const employee = await EmployeeModel.findByIdAndDelete(req.params.id)
        if(!employee){
            res.status(404).send(JSON.stringify({status: false, message:"ID not Found"}))
        }else{
            res.status(200).send(JSON.stringify({status:true, message:"Delete successful"}))
        }
    } catch (error) {
        res.status(500).send(err)
        
    }
  })
app.listen(process.env.PORT, () => {
    console.log("Server running at http://localhost:8071")
})





