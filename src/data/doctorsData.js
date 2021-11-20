import doctor from '../images/doctor-half.png';

let doctorsData = [
    {
        image: doctor,
        name: 'Dr. Caudi',
        number: '+61 437 200 126'
    },
    {
        image: doctor,
        name: 'Dr. Caudi',
        number: '+61 437 200 126'
    },
    {
        image: doctor,
        name: 'Dr. Caudi',
        number: '+61 437 200 126'
    }
];

for (let i = 0; i < doctorsData.length; i++) {
    doctorsData[i].id = i;
};

export default doctorsData;