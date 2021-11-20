import fluoride from '../images/fluoride.png';
import cavity from '../images/cavity.png';
import whitening from '../images/whitening.png';

let serviceData = [
    {
        image: fluoride,
        title: 'Fluoride Treatment',
        des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
    },
    {
        image: cavity,
        title: 'Cavity Filling',
        des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
    {
        image: whitening,
        title: 'Teeth Whitening',
        des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
    }
];

for (let i = 0; i < serviceData.length; i++) {
    serviceData[i].id = i;
};

export default serviceData;