import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/AxiosSecure";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const axiosSecure = useAxiosSecure();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axiosSecure.post("/contact", formData);

            if (data.success) {
                await Swal.fire({
                    icon: "success",
                    title: "Thank you!",
                    text: "Thank you for contacting us! We will reply soon.",
                    confirmButtonColor: "#3085d6",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to send message. Please try again later.",
                    confirmButtonColor: "#d33",
                });
            }
        } catch (error) {
            console.error("Error sending contact data:", error);
            await Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong. Please try again later.",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <div className="w-11/12 mx-auto my-20">
            <div className="max-w-4xl  px-6 py-12">
                <h1 className="text-3xl font-bold text-center text-primary mb-6">
                    Contact Us
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Have a question or want to know more about BiteShare? Fill out the form
                    below, and we’ll get back to you soon.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-lg p-6 space-y-4"
                >
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Write your message..."
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full text-white font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
