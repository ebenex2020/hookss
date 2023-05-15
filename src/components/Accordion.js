import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeTags, setActiveTags] = useState(null);

  const onClickedTags = index => {
    setActiveTags(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeTags ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onClickedTags(index)}>
          <i className=" dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
