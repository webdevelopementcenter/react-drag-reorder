import React from "react";
import "./draggableChild.css";
export default function DraggableChildComponent(props) {
  return (
    /*#__PURE__*/
    React.createElement("div", {
      draggable: true,
      onDragStart: props.dragStart,
      onDragEnter: props.dragEnter,
      onDragEnd: props.dragEnd,
      className: "grabbable"
    }, props.children)
  );
}
;