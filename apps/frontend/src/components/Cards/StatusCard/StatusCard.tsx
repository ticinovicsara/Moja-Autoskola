import React from "react";
import "./statusCard.module.css";
import CardComponent from "../CardComponent/CardComponent";

interface StatusItem {
  title: string;
  color: string;
}

interface StatusCardProps {
  title: string;
  statusItems?: StatusItem[];
}

export const StatusCard: React.FC<StatusCardProps> = ({
  title,
  statusItems,
}) => {
  return (
    <CardComponent bodyBgColor="#f77c7c" className="status-card">
      <div className="status-title">{title}</div>
      <div className="status-items">
        {statusItems &&
          statusItems.map((item, index) => (
            <div key={index} className="status-item">
              <div
                className="status-item-indicator"
                style={{
                  backgroundColor:
                    item.color === "green" ? "#8dc978" : "#f77c7c",
                }}
              ></div>
              <div className="status-item-title">{item.title}</div>
            </div>
          ))}
      </div>
    </CardComponent>
  );
};
