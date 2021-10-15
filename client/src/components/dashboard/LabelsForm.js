import React from "react";
const LabelsForm = ({ selectedLabels, onClose, onClickLabel }) => {
  const labelColors = ["green", "yellow", "orange", "red", "purple", "blue"];

  return (
    <div id="add-options-labels-dropdown">
      <header>
        <span>Labels</span>
        <a href="#" className="icon-sm icon-close" onClick={onClose}></a>
      </header>
      <div className="content">
        <input
          className="dropdown-input"
          placeholder="Search labels..."
          type="text"
        />
        <div className="labels-search-results">
          <ul className="label-list">
            {labelColors.map((color) => {
              return (
                <li key={color} onClick={() => onClickLabel(color)}>
                  <div className={color + " colorblindable"} data-id="1">
                    {selectedLabels.includes(color) ? (
                      <i className="check-icon sm-icon"></i>
                    ) : null}
                  </div>
                  <div className={"label-background " + color}></div>
                  <div className="label-background-overlay"></div>
                  <i className="edit-icon icon not-implemented"></i>
                </li>
              );
            })}
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Create a new label</li>
            <hr />
            <li className="toggleColorblind">
              Enable color blind friendly mode.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LabelsForm;
