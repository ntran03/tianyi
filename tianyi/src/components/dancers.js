import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import groupPic from './group.jpg'


// Sample dancer data
const dancersData = [
    {
        id: 1,
        name: "Changwen",
        description: "President",
        additionalDetails: "Member since: Fall 2022\nMajor: Public Health Science '26",
    },
    {
        id: 2,
        name: "Evelyn",
        description: "Artistic Director",
        additionalDetails: "Member since: Fall 2021\nMajor: Immersive Media Design '25",
    },
    {
        id: 3,
        name: "Sophie",
        description: "Treasurer",
        additionalDetails: "Member since: Fall 2023\nMajor: Business '27",
    },
    {
        id: 4,
        name: "Katherine Y",
        description: "Fundraising",
        additionalDetails: "Member since: Fall 2023\nMajor: General Biology '27",
    },
    {
        id: 5,
        name: "Caitlyn",
        description: "Secretary",
        additionalDetails: "Member since: Fall 2023\nMajor: Neuroscience '27",
    },
    {
        id: 6,
        name: "Riva",
        description: "Public Relations",
        additionalDetails: "Member since: Fall 2022\nMajor: Computer Science '26",
    }
];

// Dynamically import images
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '').replace('.jpg', '')] = r(item);
    });
    return images;
};


const images = importAll(require.context('./dancer_images', false, /\.jpg$/));

function Dancers() {
    return (
        <Box sx={{ minWidth: 275, padding: 2, position: 'relative', overflow: 'hidden', pt: 10}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    mb: 4, 
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={groupPic}
                        alt="Team"
                        style={{
                            width: '100%',
                            maxWidth: '500px', 
                            height: 'auto', 
                            borderRadius: '8px',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' }, // Center text on small screens
                        textAlign: { xs: 'center', md: 'left' },
                        padding: { xs: 2, md: 4 },
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom>
                        Meet the Team
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Hover over each picture for more information on our current team!
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={2}>
                {dancersData.map(dancer => (
                    <Grid item xs={12} sm={6} md={3} key={dancer.id}>
                        <Card 
                            variant="outlined" 
                            sx={{ 
                                position: 'relative', 
                                height: '300px', 
                                overflow: 'hidden',
                                '&:hover .overlay': {
                                    opacity: 1, 
                                }
                            }}
                        >
                            <img
                                src={images[dancer.name.toLowerCase()]} 
                                alt={dancer.name}
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover', 
                                    position: 'absolute', 
                                    top: 0,
                                    left: 0,
                                    zIndex: 0 
                                }}
                            />
                            <CardContent 
                                sx={{ 
                                    position: 'absolute', 
                                    bottom: 0, 
                                    left: 0, 
                                    right: 0, 
                                    zIndex: 1,
                                    color: '#00000', 
                                    backgroundColor: 'rgba(256, 256, 256, 0.6)', 
                                    padding: '16px',
                                    margin: '8px',
                                    opacity: 0, 
                                    transition: 'opacity 0.3s ease', 
                                    '&.overlay': { 
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '8px',
                                    }
                                }}
                                className="overlay"
                            >
                                <Typography variant="h6" component="div">
                                    {dancer.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                    {dancer.description}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ whiteSpace: 'pre-line', textAlign: 'center' }}
                                >
                                    {dancer.additionalDetails}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Dancers;
