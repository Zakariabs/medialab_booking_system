'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ReserveButton = () => {
  const [isReserved, setIsReserved] = useState(false);

  const handleClick = () => {
    setIsReserved(true);
  };

  return (
    <Button
      variant="secondary"
      className={`bg-cyan-500 text-white py-2 px-4 rounded ${isReserved ? 'bg-green-500' : ''}`}
      onClick={handleClick}
    >
      {isReserved ? 'Reserved' : 'Reserve'}
    </Button>
  );
};

export default ReserveButton;
