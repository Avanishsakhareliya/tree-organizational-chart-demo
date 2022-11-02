import React, { useRef } from 'react';
import OrgTreeComponent, { useTree } from 'react-drag-hierarchy-tree';
import { Tree, TreeNode } from "react-organizational-chart";
import { DndProvider, useDrag, useDrop, DragObjectWithType } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { v4 as uuid } from "uuid";
import { cloneDeep } from "lodash";
import { LeafNode } from './LeafNode';

function TreeStruct() {
  const searchInput = useRef();
  const [tree, setTree] = React.useState({
    id: uuid(),
    user: {
      name: "Init",
      email: "",
      picture: "",
      id: ""
    },
    children: []
  });

  const [searchValue, setSearchValue] = React.useState()

  const userData =
    [
      {
        id: uuid(),
        name: "mark Hill",
        picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        email: 'Chief executive Officer',
        children: [{
          id: uuid(),
          name: "joe Linux",
          picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          email: 'chief technology officer',
          children: [{
            id: uuid(),
            name: "Rohn Blomquist",
            picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
            email: 'Chief Info. security Officer',
          },
          {
            id: uuid(),
            name: "Michael rubbin",
            picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
            email: 'Chief Invoation Officer',
          }]
        },
        {
          id: uuid(),
          name: "Linda may",
          picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          email: 'chief Business officer',
          children: [{
            id: uuid(),
            name: "Alice Lopex",
            picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
            email: 'Chief com. Officer'
          },
          {
            id: uuid(),
            name: "Mary Johnson",
            picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
            email: 'Chief Brand Officer',
          },
          {
            id: uuid(),
            name: "Kirik Dounglas",
            picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
            email: 'Chief Dev.   Officer',
          }]
        },
        {
          id: uuid(),
          name: "John Green",
          picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          email: 'chief account officer',
          children: [{
            id: uuid(),
            name: "Erica Reel",
            picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
            email: 'chief Customer officer',
          }]
        },
        ]
      },
      {
        id: uuid(),
        name: "mark Hill",
        picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        email: 'markhill@gmail.com',
        children: [{
          id: uuid(),
          name: "joe Linux",
          picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          email: 'joelinux@gmail.com',
        },
        {
          id: uuid(),
          name: "Linda may",
          picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          email: 'Lindamay@gmail.com',
        },
        ]
      },
      {
        id: uuid(),
        name: "mark Hill",
        picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        email: 'markhill@gmail.com',
        children: [{
          id: uuid(),
          name: "joe Linux",
          picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          email: 'joelinux@gmail.com',
        },
        {
          id: uuid(),
          name: "Linda may",
          picture: "https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          email: 'Lindamay@gmail.com',
        },
        ]
      }
    ]

  React.useEffect(() => {
    setTree({
      user: userData[0],
      id: uuid(),
      children: [
        {
          user: userData[0],
          id: uuid(),
          children: [{
            user: userData[0]?.children[0],
            id: uuid(),

          },
          {
            user: userData[0]?.children[1],
            id: uuid(),

          },
          {
            user: userData[0]?.children[2],
            id: uuid(),

          }]
        }

      ]
    });
  }, []);
  function findParent(id, tree) {
    function search(tree) {
      if (!tree.children) return undefined;
      for (let child of tree.children) {
        if (child.id === id) return tree;

        let found = search(child);
        if (found) return found;
      }
    }
    return search(tree);
  }

  const handleDrop = (tree, { }) => {
    const parent = findParent(tree.id, tree);
    if (parent) {
      parent.children = parent.children.filter((c) => c.id !== tree.id);
    }
    tree.children = [...tree.children, tree];
    const newTree = cloneDeep(tree);
    setTree(newTree);
  };
  const handleRootDrop = (tree) => {
    const parent = findParent(tree.id, tree);
    if (parent) {
      parent.children = parent.children.filter((c) => c.id !== tree.id);
    }
    tree.children = [...tree.children, tree];
    const newTree = cloneDeep(tree);
    setTree(newTree);
  };

  const RootLabel = (
    <div ref={tree}>
      <div>
        <h4 style={{ margin: "0" }}>
          {tree.user.name} {tree.user.email}
        </h4>
      </div>
    </div>
  );

  // --------------------------------------------------------------------------------------old
  const data = {
    id: 1,
    label: "Mark Hill",
    image: 'https://images.unsplash.com/photo-1667143331615-5fd21dce544b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    children: [
      {
        id: 2,
        label: "joe Linux",
        children: [
          {
            id: 3,
            label: "Ron Blomquist",
            children: [],
          },
        ],
      },
      {
        id: 4,
        label: "Linda may",
        children: [
          {
            id: 5,
            label: "Alice Lopez",
            children: [],
          },
          {
            id: 6,
            label: "Mary Johnson",
            children: [],
          },
          {
            id: 7,
            label: "kirik Douglas",
            children: [],
          },
        ],
      },
      {
        id: 8,
        label: "John Green",
        children: [
          {
            id: 9,
            label: "Erica reel",
            children: [],
          },
        ],
      }
    ],
  };
  const { treeRef } = useTree();

  const recursiveSearch = (obj, searchKey, results = []) => {
    const r = results;
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (key === searchKey && typeof value !== 'object') {
        r.push(value);
      } else if (typeof value === 'object') {
        recursiveSearch(value, searchKey, r);
      }
    });
    return r;
  };
  let arr = recursiveSearch(data, 'label')
  let iterator = arr.values()
  let newArr
  for (const value of iterator) {
    newArr = value
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const lowercasedValue = value.toLowerCase();
    let res = arr?.filter(el =>
      el.toLowerCase().includes(lowercasedValue)
    )
    //   return res;
    setSearchValue(res)
  }

  return (
    <>
      <div className='d-flex justify-content-end m-5'>
        <span className='mr-1'> employee List: </span>

        <select type="text" name='userList' onChange={handleChange}>
          {
            arr.map((val) => (<>
              <option>{val}</option>
            </>))
          }
        </select>

      </div>
      <div className='dragAllow'>
        <span style={{ color: "red" }}>user allow to drag and drop here :    </span>
        <OrgTreeComponent data={data} ref={treeRef} vertical />
      </div>

      <div>
        <span style={{ color: "red" }}>user only allow to show chart with all detail :    </span>

        <Tree
          lineHeight="50px"
          lineWidth="1px"
          lineColor="#E2E8F0"
          nodePadding="10px"
          lineBorderRadius="5px"
          label={RootLabel}
        >
          {tree.children &&
            tree.children.map((c) => (
              <LeafNode onDrop={handleDrop} key={c.id} node={c} />
            ))}
        </Tree>
      </div>
    </>
  )
}

export default TreeStruct