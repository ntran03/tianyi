import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form data
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            alert("All fields are required!");
            return;
        }

        // EmailJS integration
        // service id, template id, formData, public key :D
        emailjs.send('service_paf608n', 'template_svdzges', formData, 'MFNwH62f03DsaG9cM')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Your message has been sent!');
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
                alert('Failed to send your message. Please try again later.');
            });
    };

    return (
        <Box sx={{ minWidth: 275, padding: 2, pt: 10 }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                    label="First Name"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                />
                <TextField
                    label="Message"
                    name="message"
                    required
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">
                    Send Message
                </Button>
            </form>
        </Box>
    );
}

export default Contact;