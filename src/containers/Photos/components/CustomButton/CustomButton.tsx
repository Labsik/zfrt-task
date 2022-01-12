import React from "react";

interface btnProps {
  onClB: () => void;
}

const CustomButton = ({ onClB }: btnProps) => (
  <button type="button" className="btn btn-info" onClick={onClB}>
    Back to all photos
  </button>
);

export default CustomButton;
