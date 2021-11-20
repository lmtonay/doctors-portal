import michael from '../images/michael.png';
import jessica from '../images/jessica.png';
import eddie from '../images/eddie.png';

let testimonialData = [
    {
        image: michael,
        name: 'Michael Jackson',
        location: 'California',
        speech: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using ‘Content here, content'
    },
    {
        image: jessica,
        name: 'Jessica Jenny',
        location: 'Houston',
        speech: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using ‘Content here, content'
    },
    {
        image: eddie,
        name: 'Ms. Eddie',
        location: 'Los Angeles',
        speech: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using ‘Content here, content'
    }
];

for (let i = 0; i < testimonialData.length; i++) {
    testimonialData[i].id = i;
};

export default testimonialData;