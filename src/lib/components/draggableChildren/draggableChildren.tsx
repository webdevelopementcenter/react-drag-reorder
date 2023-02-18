import React from "react";

import "./draggableChild.css";

interface DraggableChildComponentProps {
	dragStart: () => void;
	dragEnter: () => void;
	dragEnd: () => void;
	children: any;
}
export default function DraggableChildComponent(
	props: DraggableChildComponentProps
){
	return (
		<div
			draggable
			onDragStart={props.dragStart}
			onDragEnter={props.dragEnter}
			onDragEnd={props.dragEnd}
			className="grabbable"
		>
			{props.children}
		</div>
	);


};

