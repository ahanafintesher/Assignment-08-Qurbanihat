"use client";

import { toast } from "react-toastify";

const BookingButton = () => {
  const handleBook = () => {
    toast.success("Booking Successful!");
  };

  return (
    <button
      onClick={handleBook}
      className="btn bg-green-800 text-white rounded-lg"
    >
      Book Now
    </button>
  );
};

export default BookingButton;