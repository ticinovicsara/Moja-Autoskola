import React from "react";
import CardComponent from "../CardComponent/CardComponent";

import { StatusCardProps } from "./StatusCardProps";

export const StatusCard: React.FC<StatusCardProps> = ({ title }) => {
  return (
    <CardComponent
      bodyBgColor="#F97C7C"
      width="100%"
      height="100%"
      bodyPadding="1.5em"
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          height: "100%",
        }}
      >
        {title}
      </div>
    </CardComponent>
  );
};
