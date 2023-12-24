const treeViewData = [
    {
        value: "mars",
        label: "Mars",
        children: [
            {
                value: "phobos",
                label: "Phobos",
                children: [
                    { value2: "phobosC1", label: "Phobos C1" },
                    { value: "phobosc2", label: "Phobos C2" },
                    {
                        value: "phobosC3",
                        label: "Phobos C3",
                        children: [
                            { value: "phobosC3C1", label: "Phobos C3 C1" },
                            { value: "phobosC3C2", label: "Phobos C3 C2" },
                            { value: "phobosC3C3", label: "Phobos C3 C3" },
                        ]
                    },
                    { value: "phobosc4", label: "Phobos C4" },
                    { value: "phobosC5", label: "Phobos C5" },
                    { value: "phobosc6", label: "Phobos C6" },
                ],
            },
            { value: "deimos", label: "Deimos" }
        ]
    },
    {
        value: "saturn",
        label: "Satrun"
    },
    {
        value: "jupitor",
        label: "Jupitor",
        children: [{ value: "jupitorC", label: "JupitorC" }],
    },
    {
        value: "saturn1",
        label: "Satrun1"
    },
    {
        value: "jupitor1",
        label: "Jupitor1",
        children: [
            { value: "jupitor1C", label: "Jupitor1C" },
            { value: "jupitor2C", label: "Jupitor2C" },
            { value: "jupitor3C", label: "Jupitor3C" }
        ],
    }
];
const TreeView = () => {

    return (
        <>
            <div className="w-full p-4">
                <ul>
                    <li>
                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                            <input type="checkbox" name="mars" value="mars" className="me-2" />
                            <label className="text-blue-700">Mars</label>
                        </span>
                        <ul className="relative after:absolute after:top-0 after:left-8 after:border-l-[1px] after:border-blue-300 after:h-[100%]">
                            <li>
                                <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                    <input type="checkbox" name="phobos" value="phobos" className="me-3" />
                                    <label className="ms-4 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-13px]">Phobos</label>
                                </span>
                                <ul className="relative after:absolute after:top-0 after:left-[54px] after:border-l-[1px] after:border-blue-300 after:h-[100%]">
                                    <li>
                                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                            <input type="checkbox" name="phobosC1" value="phobosC1" className="me-4" />
                                            <label className="ms-8 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C1</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                            <input type="checkbox" name="phobosC2" value="phobosC2" className="me-4" />
                                            <label className="ms-8 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C2</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                            <input type="checkbox" name="phobosC3" value="phobosC3" className="me-4" />
                                            <label className="ms-8 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C3</label>
                                        </span>
                                        <ul className="relative after:absolute after:top-0 after:left-[78px] after:border-l-[1px] after:border-blue-300 after:h-[100%]">
                                            <li>
                                                <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                                    <input type="checkbox" name="phobosC3C1" value="phobosC3C1" className="me-6" />
                                                    <label className="ms-12 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C3 C1</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                                    <input type="checkbox" name="phobosC3C2" value="phobosC3C2" className="me-6" />
                                                    <label className="ms-12 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C3 C2</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                                    <input type="checkbox" name="phobosC3C3" value="phobosC3C3" className="me-6" />
                                                    <label className="ms-12 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C3 C3</label>
                                                </span>
                                            </li>
                                        </ul>

                                    </li>
                                    <li>
                                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                            <input type="checkbox" name="phobosC4" value="phobosC4" className="me-4" />
                                            <label className="ms-8 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C4</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                            <input type="checkbox" name="phobosC5" value="phobosC5" className="me-4" />
                                            <label className="ms-8 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C5</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                            <input type="checkbox" name="phobosC6" value="phobosC6" className="me-4" />
                                            <label className="ms-8 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-12px]">Phobos C6</label>
                                        </span>
                                    </li>
                                </ul>

                            </li>
                            <li>
                                <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                                    <input type="checkbox" name="deimos" value="deimos" className="me-3" />
                                    <label className="ms-4 text-blue-700 relative after:absolute after:h-[1px] after:w-[8px] after:border-t-[1px] after:border-blue-300 after:top-3 after:left-[-13px]">Deimos</label>
                                </span>
                            </li>
                        </ul>

                    </li>

                    <li>
                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                            <input type="checkbox" name="saturn" value="saturn" className="me-2" />
                            <label className="text-blue-700">Satrun</label>
                        </span>
                    </li>
                    <li>
                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                            <input type="checkbox" name="jupitor" value="jupitor" className="me-2" />
                            <label className="text-blue-700">Jupitor</label>
                        </span>
                    </li>
                    <li>
                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                            <input type="checkbox" name="saturn1" value="saturn1" className="me-2" />
                            <label className="text-blue-700">Saturn1</label>
                        </span>
                    </li>
                    <li>
                        <span className="block p-[5px] mt-[3px] mb-[3px] hover:bg-[#a8b2b7]">
                            <input type="checkbox" name="jupitor1" value="jupitor1" className="me-2" />
                            <label className="text-blue-700"> Jupitor1</label>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default TreeView;