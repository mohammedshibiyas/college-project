import mongoose from "mongoose";
const admin_schema=new mongoose.Schema({
    name:{type:String},
    username:{type:String
    // required:[true,"Username is required"],
    // unique:[true,"username is already exist"]
},

    password:{type:String
    // required:[true,"Username is required"],
    // unique:[true,"username is already exist"]
}
})

export default mongoose.model.admins||mongoose.model("admin",admin_schema)