import TreeView from './components/treeView/TreeView';

function App() {
    const treeViewData = [
      {
        value: "mars",
        label: "Mars",

        children: [
          {
            value: "phobos",
            label: "Phobos",
            children: [
              { value: "phobosC1", label: "Phobos C1" },
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
      }
    ];

  const newKeyNames = {};



  // const treeViewData = [
  //   {
  //     id: "marsAri",
  //     name: "Mars",

  //     children: [
  //       {
  //         id: "phobos",
  //         name: "Phobos",
  //         children: [
  //           { id: "phobosC1", name: "Phobos C1" },
  //           { id: "phobosc2", name: "Phobos C2" },
  //           {
  //             id: "phobosC3",
  //             name: "Phobos C3",
  //             children: [
  //               { id: "phobosC3C1", name: "Phobos C3 C1" },
  //               { id: "phobosC3C2", name: "Phobos C3 C2" },
  //               { id: "phobosC3C3", name: "Phobos C3 C3" },
  //             ]
  //           },
  //           { id: "phobosc4", name: "Phobos C4" },
  //           { id: "phobosC5", name: "Phobos C5" },
  //           { id: "phobosc6", name: "Phobos C6" },
  //         ],
  //       },
  //       { id: "deimos", name: "Deimos" }
  //     ]
  //   },
  //   {
  //     id: "saturn",
  //     name: "Satrun"
  //   },
  //   {
  //     id: "jupitor",
  //     name: "Jupitor",
  //     children: [{ id: "jupitorC", name: "JupitorC" }],
  //   },
  //   {
  //     id: "saturn1",
  //     name: "Satrun1"
  //   },
  //   {
  //     id: "jupitor1",
  //     name: "Jupitor1",
  //   }
  // ];

  // //const keyValuePair = ['id', 'names'];
  // const newKeyNames = { id: "value", name: "label" };
  // //const newKeyNames = { keyValuePair[0]: "value", keyValuePair[1]: "label" };

  const getTreeViewCheckedData = (data) => {
    //console.log('getCheckedData->', data)
  }

  // function findDuplicateValues(dataArray) {
  //   const uniqueValues = new Set();
  //   const duplicateValues = [];

  //   function checkDuplicates(node) {
  //     if (uniqueValues.has(node.value)) {
  //       duplicateValues.push(node.value);
  //     } else {
  //       uniqueValues.add(node.value);
  //     }

  //     if (node.children && node.children.length > 0) {
  //       for (const childNode of node.children) {
  //         checkDuplicates(childNode);
  //       }
  //     }
  //   }

  //   for (const node of dataArray) {
  //     checkDuplicates(node);
  //   }

  //   return duplicateValues;
  // }

  // // Example usage:
  // const duplicates = findDuplicateValues(treeViewData);
  // if (duplicates.length > 0) {
  //   console.log('Duplicate values found:', duplicates);
  // } else {
  //   console.log('No duplicate values');
  // }

  // function makeValuesUnique(dataArray) {
  //   const uniqueValues = new Set();

  //   function updateDuplicates(node) {
  //     if (uniqueValues.has(node.value)) {
  //       let originalValue = node.value;
  //       let counter = 1;

  //       // Keep appending a counter until a unique value is found
  //       while (uniqueValues.has(node.value)) {
  //         node.value = `${originalValue}_${counter}`;
  //         counter++;
  //       }
  //     } else {
  //       uniqueValues.add(node.value);
  //     }

  //     if (node.children && node.children.length > 0) {
  //       for (const childNode of node.children) {
  //         updateDuplicates(childNode);
  //       }
  //     }
  //   }

  //   for (const node of dataArray) {
  //     updateDuplicates(node);
  //   }
  // }

  // // Example usage:
  // makeValuesUnique(treeViewData);
  // console.log('Updated treeViewData:', treeViewData);



  return (
    <div className="bg-white">
      <TreeView data={treeViewData} newKeyNames={newKeyNames} getTreeViewCheckedData={getTreeViewCheckedData} />
    </div>
  );
}

export default App;