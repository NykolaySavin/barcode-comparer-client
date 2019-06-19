import React from "react";
import { Redirect } from "react-router-dom";
import Button from "../button/Button";

export default function ProductMatch({ jobSheetName, data, history, pickingClick }) {
  return (
    <>
      <div className="productMatch">
        <div className="header">
          <div>{jobSheetName}</div>
          <Button onClick={() => {pickingClick();history.push("/")}} label="Picking" />
          <Button label="" />
        </div>
        <div className="input-box" />
        <div className="table-box" />
      </div>
    </>
  );
}
