const statefulChild = (parent, child) => {
  let state;

  const updater = value => {
    state = value;
    const updatedChildNode = child(state, updater);
    parent.replaceChild(updatedChildNode.node, childNode.node);
    childNode = updatedChildNode;
  };

  let childNode = child(state, updater);

  return appendChildren(parent, [childNode]);
};

const appendChildren = (parent, children) => {
  children.map(child => {
    if (!child) return;

    if (typeof child === "function") {
      return statefulChild(parent, child);
    }

    if (Array.isArray(child)) {
      return appendChildren(parent, child);
    }

    if (child.node) {
      return parent.appendChild(child.node);
    }
  });
};

export default appendChildren;
