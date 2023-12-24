import React, { useState } from 'react';

const TreeView = ({ data }) => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (name, value) => {
        setCheckedItems({
            ...checkedItems,
            [name]: value,
        });
    };

    const renderTree = (items) => {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.value}>
                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                            <input
                                type="checkbox"
                                name={item.value}
                                value={item.value}
                                checked={checkedItems[item.value] || false}
                                onChange={(e) => handleCheckboxChange(item.value, e.target.checked)}
                                className="me-2"
                            />
                            <label className="text-blue-700">{item.label}</label>
                        </span>
                        {item.children && renderTree(item.children)}
                    </li>
                ))}
            </ul>
        );
    };

    return <div className="w-[50%] p-4">{renderTree(data)}</div>;
};

export default TreeView;
