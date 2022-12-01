import Panner from "./Panner";

const Page1 = (props) => {
  return (
    <Panner
      main={props.name}
      src="https://ca-times.brightspotcdn.com/dims4/default/c9d84e9/2147483647/strip/true/crop/3663x2442+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F87%2Fdf%2Ff1b51734478e98b023b4871deefd%2Fvirus-outbreak-spain-soccer-restart-01706.jpg"
      name="Messi"
      content="He has received seven Ballon d'Or awards, the most for any football
  player, as well as the 2009 FIFA World Player of the Year and 2019 The
  Best FIFA Men's Player. Messi holds the record for most goals in La
  Liga (474), the Supercopa de España (14), the UEFA Super Cup (3) and
  is the player with the most official recorded assists in football
  history (348). He has scored 788 goals for club and country throughout
  his professional career and is also the first player in history to win
  five and six European Golden Shoes."
    ></Panner>
  );
};

export default Page1;
