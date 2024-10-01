
export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')

}

 export const getOneBooking = (req, res) => {
    res.status(200).json('This is just one booking')
 
}

export const postBooking = (req, res) => {
    res.status(201).json('Booking confirmed')
}

export const updateBooking = (req, res) => {
    res.status(200).json('Booking Updated!')
}

export const deleteBooking = ( req, res) => {
    res.status(200).json('Booking Deleted')
}