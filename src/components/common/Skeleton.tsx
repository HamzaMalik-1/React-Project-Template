import React from "react";
import { Placeholder } from "react-bootstrap";

interface SkeletonProps {
  height?: string;
  width?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ height = "1rem", width = "100%", className = "" }) => {
  return (
    <Placeholder
      as="div"
      animation="wave"
      className={`rounded ${className}`}
      style={{ height, width }}
    />
  );
};

export default Skeleton;
