import michael from '../images/michael.png';

let blogData = [
    {
        image: michael,
        name: 'Rashed Kabir',
        date: '22 Aug 2018',
        speech: 'Check at least a doctor in a year for your teeth',
        des: 'It is a long established fact that by the readable content of a lot layout. The point'
    },
    {
        image: michael,
        name: 'Dr. Caudi',
        date: '23 April 2019',
        speech: '2 times of brush in a day can Keep you healthy',
        des: 'It is a long established fact that by the readable content of a lot layout. The point'
    },
    {
        image: michael,
        name: 'Dr. John Mitchel',
        date: '23 April 2019',
        speech: 'The tooth cancer is taking a challenge',
        des: 'It is a long established fact that by the readable content of a lot layout. The point'
    }
];

for (let i = 0; i < blogData.length; i++) {
    blogData[i].id = i;
};

export default blogData;