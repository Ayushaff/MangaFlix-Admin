import React, { memo } from "react";

const MangaSynopsis = memo(({ description }) => {
  return <p>{description}</p>;
});

export default MangaSynopsis;
