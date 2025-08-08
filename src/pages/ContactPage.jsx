import React, { useState } from 'react';
import Judul from '../components/TittlePage';
import AOS from 'aos'

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
  <>
  <Judul judul="Leave Your Feedback" keterangan="Send Me Anything maybe a Questions, Request, or Something else" />

  <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6" data-aos='fade-down' data-aos-delay='200'>
      <h2 className="text-3xl text-center text-gray-800 font-semibold">Get In Touch</h2>

      <div className="mb-4">
        <label className="block text-sky-800 mb-2 text-lg tracking-wider">Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-100 bg-gray-100 text-gray-600 rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 transition-all"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sky-800 mb-2 text-lg tracking-wider">Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-100 bg-gray-100 text-gray-600 rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 transition-all"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sky-800 mb-2 text-lg tracking-wider">Message :</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border border-gray-100 bg-gray-100 text-gray-600 rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 transition-all"
          placeholder="Write your message here"
          rows="6"
          required/>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-gray-50 border-gray-800 border-2 py-3 rounded-md hover:bg-gray-500 hover:border-gray-500 tracking-widest focus:outline-none transition-all">
        Submit Feedback
      </button>
    </form>
  </>
  );
};

const LocationFeedback = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-100">
      <FeedbackForm />
    </div>
  );
};

export default LocationFeedback;
