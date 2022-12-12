let mongoose = require('mongoose')



const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailID:{
        type:String,
        unique:[true,"Duplicate email are not alowed"],
        required:true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
          }
    }

})

const Empolyee = mongoose.model('employee', EmployeeSchema)
module.exports = Empolyee