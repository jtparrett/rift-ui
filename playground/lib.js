const statefulChild = async (parent, child) => {
  let state;
  const updater = async value => {
    state = value;
    const updatedChildNode = await child(state, updater);
    parent.replaceChild(updatedChildNode.node, childNode.node);
    childNode = updatedChildNode;
  };
  let childNode = await child(state, updater);
  return await appendChildren(parent, [childNode]);
};

const appendChildren = async (parent, children) => {
  return Promise.all(
    children.map(async child => {
      if (!child) return;

      if (typeof child === "function") {
        return await statefulChild(parent, child);
      }

      if (Array.isArray(child)) {
        return await appendChildren(parent, child);
      }

      if (child.node) {
        return await parent.appendChild(child.node);
      }
    })
  );
};

class Component {
  constructor(element, ...children) {
    this.node =
      typeof element === "string" ? document.createElement(element) : element;

    Object.keys(document.body.style).forEach(prop => {
      this[prop] = value => {
        this.node.style[prop] = value;
        return this;
      };
    });

    appendChildren(this.node, children);
  }

  onClick = method => {
    this.node.onclick = method;
    return this;
  };

  attr = (key, value) => {
    this.node.setAttribute(key, value);
    return this;
  };
}
