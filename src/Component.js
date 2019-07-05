import appendChildren from "./appendChildren";

class Component {
  constructor(element, ...children) {
    this.node =
      typeof element === "string" ? document.createElement(element) : element;

    Object.keys(document.body.style).forEach(attr => {
      this[attr] = value => {
        this.node.style[attr] = value;
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

export default Component;
