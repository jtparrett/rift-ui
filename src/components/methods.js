export const ForEach = (data, render) => {
  return data.map(render);
};

export const If = (condition, ...children) => {
  return condition && children;
};
