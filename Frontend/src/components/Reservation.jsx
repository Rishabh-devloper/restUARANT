import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Reservation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    // Function to clear form fields
    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setTime('');
        setDate('');
    };

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                'https://restuarant-backend-3fl1.onrender.com/send',
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    time,
                    date
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message || "Reservation submitted successfully!");
            clearForm();
            navigate('/success');
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="reservation">
            <div className="container">
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>Make a Reservation</h1>
                        <p>Fill out the form below to book your table</p>
                        <form onSubmit={handleReservation}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    aria-label="First Name"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    aria-label="Last Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    aria-label="Reservation Date"
                                />
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                    aria-label="Reservation Time"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-label="Email Address"
                                />
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    aria-label="Phone Number"
                                />
                            </div>
                            <button type="submit" className="submit-button">
                                Submit<span><HiArrowNarrowRight /></span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="banner">
                    <img src="/reservation.png" alt="Reservation Banner" />
                </div>
            </div>
        </div>
    );
};

export default Reservation;
