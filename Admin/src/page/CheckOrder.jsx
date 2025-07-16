import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const CheckOrder = ({ token }) => {
  const [contacts, setContacts] = useState([]);

  const fetchAllContacts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/contact`);
      if (response.data.success) {
        setContacts(response.data.data);
      }
    } catch (error) {
      toast.error("Failed to fetch contact submissions");
    }
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  return (
    <div className="p-6">
      <h3 className='text-center py-6 text-2xl'>Contact Form Submissions</h3>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-600">No contact submissions found.</p>
      ) : (
        contacts.map((contact, index) => (
          <div key={index} className='border border-gray-300 p-4 rounded my-4 text-sm bg-white shadow'>
            <p><b>Name:</b> {contact.firstName} {contact.lastName}</p>
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Phone:</b> {contact.phone}</p>
            <p><b>Address:</b> {contact.address}, {contact.city}, {contact.state}, {contact.zipcode}, {contact.country}</p>
            <p><b>Selected Package:</b> {contact.package}</p>
            <p><b>Submitted On:</b> {new Date(contact.date).toLocaleString('en-IN', {
              dateStyle: 'medium',
              timeStyle: 'short',
              hour12: true
            })}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckOrder;
