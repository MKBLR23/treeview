import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";


const TreeViewF = ({ data }) => {
    const [checkedItems, setCheckedItems] = useState({});
    const [toggleItem, setToggleItem] = useState({});
    const [ulClass, setUlClass] = useState();
    const [ulLeft, setUlLeft] = useState(56);
    //const [ulLeft, setUlLeft] = useState({});
    const [labelClass, setLabelClass] = useState();
    const [checkBoxClass, setCheckBoxClass] = useState();

    const handleCheckboxChange = (name, value) => {
        setCheckedItems({
            ...checkedItems,
            [name]: value,
        });
    };

    const toggleSubItem = (value, children) => {
        setToggleItem({ ...toggleItem, [value]: !toggleItem[value] });

        if (children?.length > 0) {

            let ulLeftValue = ulLeft + 20;
            setUlLeft(ulLeftValue);

            const ulClassValue = 'relative after:absolute after:top-0 after:left-14 after:border-l after:border-blue-300 after:h-full';
            setUlClass(ulClassValue);

            const labelClassValue = 'ms-6 text-blue-700 relative after:absolute after:h-px after:w-2 after:border-t after:border-blue-300 after:top-3 after:-left-4';
            setLabelClass(labelClassValue);

            const checkBoxClassValue = 'me-3 ms-2';
            setCheckBoxClass(checkBoxClassValue);
        }

    }

    const renderTree = (items, id, ulClassA, labelClassA, checkBoxClassA, depth = 0) => {
        return (
            <ul key={id} className={`${ulClassA}`}>
                {items.map((item) => (
                    <li key={item.value}>
                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                            {item.children ? (
                                <FontAwesomeIcon
                                    onClick={() => toggleSubItem(item.value, item.children)}
                                    className="text-xs pb-0.5 w-3 text-gray-500"
                                    icon={toggleItem[item.value] ? faAngleDown : faAngleRight}
                                />
                            ) : (
                                <span className="w-3 inline-block"></span>
                            )}
                            <input
                                type="checkbox"
                                name={item.value}
                                value={item.value}
                                checked={checkedItems[item.value] || false}
                                onChange={(e) => handleCheckboxChange(item.value, e.target.checked)}
                                className={checkBoxClassA ? checkBoxClassA : 'me-2 ms-2'}
                            />
                            <label
                                className={`text-blue-700 ${labelClassA}`}
                                onClick={() => toggleSubItem(item.value, item.children)}
                                style={{ marginLeft: `${depth * 20}px` }}
                            >
                                {item.label}
                            </label>
                        </span>
                        {item.children &&
                            toggleItem[item.value] &&
                            renderTree(item.children, item.value, ulClass, labelClass, checkBoxClass, depth + 1)}
                    </li>
                ))}
            </ul>
        );
    };

    return <div className="w-2/4 p-4 m-auto mb-8 rounded border border-gray-400">{renderTree(data)}</div>;
};

export default TreeViewF;


