let appointmentData = [
    {
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM||8:00 PM - 9:00 PM',
        space: 7,
    },
    {
        name: 'Cosmetic Dentistry',
        time: '10:05 AM – 11:30 AM||10:00 PM - 10:30 PM',
        space: 10,
    },
    {
        name: 'Teeth Cleaning',
        time: '5:00 PM – 6:30 PM||10:00 PM - 11:00 PM',
        space: 5,
    },
    {
        name: 'Cavity Protection',
        time: '7:00 AM – 8:30 AM||7:00 PM - 9:00 PM',
        space: 8,
    },
    {
        name: 'Fluoride Restoration',
        time: '8:00 AM - 9:00 AM||8:00 PM - 9:00 PM',
        space: 9,
    },
    {
        name: 'Teeth General Diagnosis',
        time: '9:00 AM – 10:30 AM||9:00 PM - 10:30 PM',
        space: 5,
    }
];

for (let i = 0; i < appointmentData.length; i++) {
    appointmentData[i].id = i;
};

export default appointmentData;