import React from "react";
import CardComponent from "../CardComponent/CardComponent";

import { StatusCardProps } from "./StatusCardProps";

export const StatusCard: React.FC<StatusCardProps> = ({ title }) => {
  return (
    <CardComponent bodyBgColor="#F97C7C" width="250px" bodyPadding="1.5em">
      <div style={{ textAlign: "center", fontWeight: "bold" }}>{title}</div>
    </CardComponent>
  );
};
