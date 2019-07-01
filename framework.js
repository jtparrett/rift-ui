// Elements
const Root = (element, ...children) => {
  return new Component(element, ...children);
};

const View = (...children) => {
  return new Component("div", ...children);
};

const Text = (value, element = "p") => {
  return new Component(element, new Component(document.createTextNode(value)));
};

const Button = (...children) => {
  return new Component("button", ...children);
};

const Img = src => {
  return new Component("img").attr("src", src);
};

// Stacks
const Stack = (...children) => {
  return View(...children).display("flex");
};

const HStack = (...children) => {
  return Stack(...children).flexDirection("row");
};

const VStack = (...children) => {
  return Stack(...children).flexDirection("column");
};

// Methods
const ForEach = (data, render) => {
  return data.map(render);
};

const If = (condition, ...children) => {
  return condition && children;
};
