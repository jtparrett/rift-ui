import Component from "../Component";

export const Root = (element, ...children) => {
  return new Component(element, ...children);
};

export const View = (...children) => {
  return new Component("div", ...children);
};

export const Text = (value, element = "p") => {
  return new Component(element, new Component(document.createTextNode(value)));
};

export const Button = (...children) => {
  return new Component("button", ...children);
};

export const Img = src => {
  return new Component("img").attr("src", src);
};
