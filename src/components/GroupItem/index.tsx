import React from "react";
import hat from "../../assets/pictures/wizardhat.png";
import "./GroupItem.scss";

type TProps = {
  character: string;
};

const GroupItem = ({ character }: TProps) => {
  return (
    <div className="group-item">
      <span>{character}</span>
      <div className="image">
        <img src={hat} alt="wizard hat" />
      </div>
    </div>
  );
};

export default GroupItem;
