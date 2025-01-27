import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require: true,
        minLength : [3,"first name contain atleast 3 charcter"],
        maxLength : [30,"first name contain atmost 30 charcter"]
    },
    lastName:{
        type:String,
        require: true,
        minLength : [3,"last name contain atleast 3 charcter"],
        maxLength : [30,"last name contain atmost 30 charcter"]
    },
    phone:{
        type:String,
        require: true,
        minLength : [10,"phone no contain atleast 10 charcter"],
        maxLength : [10,"phone no contain atmost 10 charcter"]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: "Please provide a valid email address.",
        },
    },
    time:{
        type:String,
        require: true
    },
    date:{
        type:String,
        require: true
        },

});

export const reservation = mongoose.model("Reservation" , reservationSchema)


