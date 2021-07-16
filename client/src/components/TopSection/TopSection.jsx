import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import { getTopPlayeByField } from "../../utils/totals";
import "./TopSection.css";
const TopSection = () => {
  const [topPinger, setTopPinger] = useState(undefined);
  const [leastEfficient, setLeastEfficient] = useState(undefined);
  const [leastAPM, setLeastAPM] = useState(undefined);
  useEffect(() => {
    getTopPlayeByField("pings").then((res) => {
      console.log(`Top pinger is `, res);
      setTopPinger(res);
    });
    getTopPlayeByField("lane_efficiency_pct", true, true).then((res) => {
      console.log(`Least efficient in lane is `, res);
      setLeastEfficient(res);
    });
    getTopPlayeByField("actions_per_min", true, true).then((res) => {
      console.log(`Lowest APM `, res);
      setLeastAPM(res);
    });
  }, []);
  const topPingerContent = (
    <Card hoverable title={"Top Pinger"} className={"top-card"}>
      {topPinger ? (
        `Top Pinger is ${topPinger.name} with ${topPinger.sum} pings in ${
          topPinger.n
        } 
      games. That's an average of ${Math.round(topPinger.sum / topPinger.n)} 
      pings per game.`
      ) : (
        <Spin />
      )}
    </Card>
  );

  const leastEfficientContent = (
    <Card hoverable title={"Least Efficient In Lane"} className={"top-card"}>
      {leastEfficient ? (
        `Least efficient in lane is ${leastEfficient.name} with 
      ${Math.round(leastEfficient.sum / leastEfficient.n)}% efficacy on average.
      Sad.`
      ) : (
        <Spin />
      )}
    </Card>
  );
  const leastAPMContent = (
    <Card hoverable title={"Least APM"} className={"top-card"}>
      {leastAPM ? (
        `Player with least APM is ${leastAPM.name} with 
      ${Math.round(leastAPM.sum / leastAPM.n)}APM on average. Slow.`
      ) : (
        <Spin />
      )}
    </Card>
  );

  return (
    <div className={"top-card-container"}>
      {topPingerContent} {leastEfficientContent} {leastAPMContent}
    </div>
  );
};

export default TopSection;
