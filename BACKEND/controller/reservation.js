import ErrorHandler from "../error/error.js";
import { reservation } from "../models/Reservation.js"

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("please fill full reservation form ", 400))
    }
    try {
        await reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
        });
        res.status(201).json({
            success: true,
            message: "RESERVATION SENT SUCCESSFULLY"
        });
    } catch (error) {
        console.error("Reservation Error:", error);
        let validationErrors = [];
        if (error.name === "ValidationError") {
            validationErrors = Object.values(error.errors).map((val) => val.message);
            return next(new ErrorHandler(validationErrors.join(","), 400));
        } else {
            return next(new ErrorHandler("Something went wrong. Please try again later.", 500));
        }
    }
}