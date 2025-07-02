import React, { useState } from 'react'

const Feedback = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        lastname: '',
        Address: '',
        phone: '',
        email: '',
        message: ''


    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to a server
        setSubmitted(true);
        if (!feedback.name || !feedback.lastname || !feedback.Address || !feedback.phone || !feedback.email || !feedback.message) {
            alert("Please fill all fields");
            return;
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div
                className="w-full max-w-xs bg-white rounded-lg shadow-lg p-4"
                style={{ maxHeight: '420px', overflowY: 'auto' }}
            >
                <h2 className="text-xl font-semibold text-center mb-4 text-blue-700">Feedback Form</h2>
                {submitted && (
                    <div className="mb-2 p-2 bg-green-100 text-green-700 rounded text-center text-sm">
                        Thank you for your feedback!
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className=" mb-1 font-medium text-gray-700 text-sm">First Name</label>
                        <input
                            name="name"
                            placeholder="First name"
                            value={feedback.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Last Name</label>
                        <input
                            name="lastname"
                            type="text"
                            placeholder="Last name"
                            value={feedback.lastname}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Address</label>
                        <input
                            name="Address"
                            type="text"
                            placeholder="Address"
                            value={feedback.Address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Phone Number</label>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone number"
                            value={feedback.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={feedback.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Feedback</label>
                        <textarea
                            name="message"
                            placeholder="Your feedback..."
                            value={feedback.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                            rows="2"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-1 rounded font-semibold hover:bg-blue-700 transition text-sm"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};
export default Feedback; 
