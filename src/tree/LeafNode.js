import { Tree, TreeNode } from "react-organizational-chart";
import { DndProvider, useDrag, useDrop, DragObjectWithType } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import React, { useEffect, useState } from "react";

 export const LeafNode = (props) => {
    const ItemTypes = {
        NODE: "node"
      };
    // const [, drag] = useDrag({
    //   item: { type: ItemTypes.NODE, node: props.node }
    // });
    // const [, drop] = useDrop(() => ({
    //     accept:null
    //   }))
    // const [, drop] = useDrop({
    //   accept: ItemTypes.NODE,
    //   drop: (item, monitor) => {
    //     return props.onDrop(props.node, item.node);
    //   }
    // });
    const Label = (
      <div >
        {
            props.node.user.children.map((val,id)=>(
<div
        //   ref={drag}
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            border: "1px solid #EDF2F7",
            borderRadius: "5px",
            display: "inline-block",
            color: "black"
          }}
        >
          <h5
            style={{
              margin: 0,
              background: "#EDF2F7",
              padding: "0.5rem",
              borderBottom: "1px solid #eee"
            }}
          >
            {val.name} 
          </h5>
          <div
            style={{
              background: "#F7FAFC",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <img src={val.picture} style={{ flex: 1 }} alt="face" />
            <p style={{ padding: "0.5rem" }}>{val.email}</p>
          </div>
        </div>

            ))
        }
        
      </div>
    );
  
    return (
      <>
        <TreeNode label={Label}>
          {props.node.children &&
            props.node.children.map((c) => (
              <LeafNode onDrop={props.onDrop} key={c.id} node={c} />
            ))}
        </TreeNode>
      </>
    );
  };