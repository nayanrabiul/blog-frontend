import React from 'react';
import * as IconName from 'react-icons/fc';

const IconChooser = ({ onSelect }) => {
  const handleIconClick = (iconName) => {
    onSelect(iconName);
  };

  return (
    <div>
      <h3>Select an Icon:</h3>
      <div className="icon-list">
        {Object.keys(IconName).map((iconKey) => {
          const IconComponent = IconName[iconKey];
          return (
            <div key={iconKey} onClick={() => handleIconClick(iconKey)}>
              <IconComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconChooser;
