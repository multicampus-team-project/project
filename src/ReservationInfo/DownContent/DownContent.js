import { useState } from "react";
import "./DownContent.css";
import PerformInfo from "./content/PerformInfo";
import SalesInfo from "./content/SalesInfo";
import ReviewInfo from "./content/ReviewInfo";

const infoArr = ["공연정보", "판매정보", "관람후기"];

const DownContent = (props) => {
  const { performanceData } = props;
  const [currentId, setCurrentId] = useState(1);

  return (
    <div className="downCotnent-wrapper">
      <ul className="downCotnent-tabs">
        {infoArr.map((category, index) => {
          return (
            <li key={category + index} className={category} onClick={() => setCurrentId(index + 1)}>
              {category}
            </li>
          );
        })}
      </ul>
      <div className="downCotnent-contents">
        {currentId === 1 && <PerformInfo performanceData={performanceData} />}
        {currentId === 2 && <SalesInfo performanceData={performanceData} />}
        {currentId === 3 && <ReviewInfo performanceData={performanceData} />}
      </div>
    </div>
  );
};

export default DownContent;
