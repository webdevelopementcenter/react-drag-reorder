import React, { useEffect, useState } from "react";
import DraggableChildComponent from "../draggableChildren/draggableChildren";
export default function DraggableComponent(props) {
  const [state, setState] = useState({
    divs: [],
    currentDiv: null,
    toDiv: null
  });
  useEffect(() => {
    setState(state => ({ ...state,
      divs: props.children
    }));
  }, [props.children, setState]);

  const insertElementBefore = () => {
    let divs = [...state.divs];
    let currentDiv = state.currentDiv;
    let toDiv = state.toDiv;
    let currentEle;

    if (currentDiv !== toDiv) {
      currentEle = { ...divs[currentDiv]
      };
      divs = divs.filter((val, idx) => {
        return idx !== currentDiv;
      });
      divs.splice(toDiv, 0, currentEle);
      setState({
        divs,
        currentDiv: null,
        toDiv: null
      });
    }

    if (props?.onPosChange) props.onPosChange(currentDiv, toDiv, currentEle);
  };

  const dragStart = idx => {
    setState(state => ({ ...state,
      currentDiv: idx
    }));
  };

  const dragEnter = idx => {
    setState(state => ({ ...state,
      toDiv: idx
    }));
  };

  const dragDrop = () => {
    insertElementBefore();
  };

  const ele = [];

  for (let i = 0; i < state.divs.length; i++) {
    ele.push(
    /*#__PURE__*/
    React.createElement(DraggableChildComponent, {
      dragStart: () => dragStart(i),
      dragEnter: () => dragEnter(i),
      dragEnd: dragDrop,
      key: i
    }, state.divs[i]));
  }

  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null, ele)
  );
}