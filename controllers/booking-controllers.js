import { BookingModel } from "../models/booking-model.js"

export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is just one booking')
}

export const postBooking = async (req, res, next) => {
    try {
        
        await BookingModel.create(req.body);
        
        res.status(201).json("Booking was added");
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