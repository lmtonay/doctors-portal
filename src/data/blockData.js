import clock from '../images/clock.svg';
import location from '../images/location.svg';
import telephone from '../images/telephone.svg';

let blockData = [
    {
        icon: clock,
        title: 'Opening Hours',
        des: 'Lorem Ipsum is simply dummy text of the pri',
        col: '#1CC7C1'
    },
    {
        icon: location,
        title: 'Visit our location',
        des: 'Brooklyn, NY 10036, United States',
        col: '#3A4256'
    },
    {
        icon: telephone,
        title: 'Contact us now',
        des: '+000 123 456789',
        col: '#1CC7C1'
    }
];

for (let i = 0; i < blockData.length; i++) {
    blockData[i].id = i;
};

export default blockData;