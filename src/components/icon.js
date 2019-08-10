import posed from 'react-pose';
import MyJumbotron from './MyJumbotron';

const Icon = posed(MyJumbotron)({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        margin: `auto`,
        marginBottom: `2%`
    },
    hover: { scale: 1.03 },
    press: { scale: 1.005 }
});

export default Icon;
