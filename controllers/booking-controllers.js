import { BookingModel } from "../models/booking-model.js"

export const getAllBookings = async (req, res) => {
    try {
        
        const bookings = await BookingModel.find();
        
        res.status(200).json(bookings);
    } catch (error) {
        next(error)

    }
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is just one booking')
}

export const postBooking = async (req, res, next) => {
    try {
        
        await BookingModel.create(req.body);
        
        res.status(201).json('Booking added succesfully');
    } catch (error) {
        next(error)

    }
}

export const updateBooking = (req, res) => {
    res.status(200).json('Booking Updated!')
}

export const deleteBooking = (req, res) => {
    res.status(200).json('Booking Deleted')
}