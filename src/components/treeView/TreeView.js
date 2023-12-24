import React, { useState } from 'react';

const TreeNode = ({ node, onCheck, depth }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckChange = (isChecked) => {
    onCheck(node, isChecked);
  };

  const marginLeft = depth > 0 ? `${depth * 20}px` : '0px';

  return (
    <div style={{ marginLeft: marginLeft }}>
      <label>
        <input
          type="checkbox"
          checked={node.isChecked}
          onChange={(e) => handleCheckChange(e.target.checked)}
        />
        {node.label}
      </label>
      {node.children && node.children.length > 0 && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '[-]' : '[+]'}
        </button>
      )}
      {isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.value} node={child} onCheck={onCheck} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  const [nodes, setNodes] = useState(data);

  const handleCheckChange = (node, isChecked) => {
    setNodes((currentNodes) => updateNodeCheckState(currentNodes, node, isChecked));
  };

  const updateNodeCheckState = (nodes, targetNode, isChecked, isInitialNode = true) => {
    return nodes.map((node) => {
      let newNode = { ...node };

      if (isInitialNode && node.value === targetNode.value) {
        // Update the target node and its children
        newNode.isChecked = isChecked;
        if (newNode.children) {
          newNode.children = updateNodeCheckState(newNode.children, targetNode, isChecked, false);
        }
      } else if (!isInitialNode) {
        // Update all child nodes
        newNode.isChecked = isChecked;
        if (newNode.children) {
          newNode.children = updateNodeCheckState(newNode.children, targetNode, isChecked, false);
        }
      } else if (node.children) {
        // Update parent nodes if this is a recursive call
        newNode.children = updateNodeCheckState(node.children, targetNode, isChecked, isInitialNode);
        newNode.isChecked = newNode.children.every((child) => child.isChecked);
      }

      return newNode;
    });
  };

  return (
    <div>
      {nodes.map((node) => (
        <TreeNode key={node.value} node={node} onCheck={handleCheckChange} depth={0} />
      ))}
    </div>
  );
};

export default TreeView;
