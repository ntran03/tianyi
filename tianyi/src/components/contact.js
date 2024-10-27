import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com';
import han from './images/han.jpg';
import './contact.css'

function ContactUs() {
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

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            alert("All fields are required!");
            return;
        }

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
        <Box sx={{ padding: 0 }}>
            <Box id="slideshow" sx={{ position: 'relative', height: '400px', width: '100%', mb: 4 }}> {/* Increased mb */}
                <div className="slide active">
                    <img src={han} alt="Han 2023"/>
                </div>
            </Box>

            {/* Cards Section */}
            <Grid container spacing={2}>
                {/* Left Card: Contact Form */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Contact Us
                            </Typography>
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
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Card: Additional Information */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Additional Information
                            </Typography>
                            <Typography variant="body1">
                                Feel free to contact us for any inquiries or performance opportunities. We aim to respond to all messages
                                within 48 hours. You can also reach us at tianyidance@gmail.com.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactUs;