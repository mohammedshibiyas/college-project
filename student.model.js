import mongoose from "mongoose";

const student_schema=new mongoose.Schema({

    staff:{type:String},
    studentid:{type:String},
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    address:{type:String},
    dob:{type:String},
    course:{type:String},
    batch:{type:String},
    sem:{type:String},
    attandance:{type:String},
    internal:{
        internalChe:{type:String},
        internalPhy:{type:String},
        internalMath:{type:String}
    },
    test:{
        testChe:{type:String},
        testPhy:{type:String},
        testMath:{type:String},
   },
    photo:{type:String}
})

export default mongoose.model.students||mongoose.model("student",student_schema)