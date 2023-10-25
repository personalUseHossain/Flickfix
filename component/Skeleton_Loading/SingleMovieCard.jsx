import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SingleMovie() {
  return (
    <div style={{ height: "550px", width: "208px" }}>
      <Skeleton width={208} height={384} />
      <br />
      <Skeleton count={1} />
      <br />
      <Skeleton count={2} />
      <div className="flex gap-2">
        <Skeleton height={20} width={40} />
        <Skeleton height={20} width={40} />
      </div>
    </div>
  );
}
