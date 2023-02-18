import React, { useEffect, useState } from "react";
import DraggableChildComponent from "../draggableChildren/draggableChildren";

interface DraggableComponentProps {
  children: any;
  onPosChange?: (currentDiv: number, toDiv: number, currentEle: any) => void;
}

export default function DraggableComponent(props: DraggableComponentProps) {
  const [state, setState] = useState<{
    divs: any[];
    currentDiv: number | null;
    toDiv: number | null;
  }>({
    divs: [],
    currentDiv: null,
    toDiv: null,
  });

  useEffect(() => {
    setState((state) => ({ ...state, divs: props.children }));
  }, [props.children, setState]);

  const insertElementBefore = () => {
    let divs = [...state.divs];
    let currentDiv = state.currentDiv!;
    let toDiv = state.toDiv!;
    let currentEle;
    if (currentDiv !== toDiv) {
      currentEle = { ...divs[currentDiv] };
      divs = divs.filter((val, idx) => {
        return idx !== currentDiv;
      });
      divs.splice(toDiv, 0, currentEle);
      setState({ divs, currentDiv: null, toDiv: null });
    }
    if (props?.onPosChange) props.onPosChange(currentDiv, toDiv, currentEle);
  };

  const dragStart = (idx: number) => {
    setState((state) => ({ ...state, currentDiv: idx }));
  };

  const dragEnter = (idx: number) => {
    setState((state) => ({ ...state, toDiv: idx }));
  };

  const dragDrop = () => {
    insertElementBefore();
  };

  const ele = [];
  for (let i = 0; i < state.divs.length; i++) {
    ele.push(
      <DraggableChildComponent
        dragStart={() => dragStart(i)}
        dragEnter={() => dragEnter(i)}
        dragEnd={dragDrop}
        key={i}
      >
        {state.divs[i]}
      </DraggableChildComponent>
    );
  }

  return <React.Fragment>{ele}</React.Fragment>;
}
