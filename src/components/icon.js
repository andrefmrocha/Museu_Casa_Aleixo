import posed from "react-pose";

const Icon = posed.div({
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
