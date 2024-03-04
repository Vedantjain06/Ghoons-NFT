import React from "react";
import Support from "../../images/home/support.svg";

import "./TechSupportIcon.scss";

interface TechSupportIconProps {
  href: string;
}

const TechSupportIcon: React.FC<TechSupportIconProps> = ({ href }) => {
  return (
    <a className="tech-support-icon" href={href} target="_blank" rel="noreferrer">
      <img src={Support} className="support-image" alt="support background"/>
    </a>
  );
};

export default TechSupportIcon;
