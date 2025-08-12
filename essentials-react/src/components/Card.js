import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ 
  icon, 
  title, 
  description, 
  className = '', 
  iconClassName = '',
  onClick,
  ...props 
}) => {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
      {...props}
    >
      {icon && (
        <div className={`card-icon ${iconClassName}`}>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;