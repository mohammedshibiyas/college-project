import mongoose from "mongoose";
const staff_schema=new mongoose.Schema({
    admin:{type:String},
    empid:{type:String},
    name:{type:String},
    username:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
    email:{type:String},
    phone:{type:String},
    designation:{type:String},
    salary:{type:String},
    expirience:{type:String},
    address:{type:String},
    photo:{type:String}
})

export default mongoose.model.staffs||mongoose.model("staff",staff_schema)