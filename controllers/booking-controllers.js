import { booking } from "../models/booking-model.js";

export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')
}

 export const getOneBooking = (req, res) => {
    res.status(200).json('This is just one booking')
}

export const postBooking = async (req, res) => {
    const newBooking = new booking()
    const bookings = await newBooking.save(req.body)

    // console.log('request', req)



    res.status(201).json(bookings)
}

export const updateBooking = (req, res) => {
    res.status(200).json('Booking Updated!')
}

export const deleteBooking = ( req, res) => {
    res.status(200).json('Booking Deleted')
}