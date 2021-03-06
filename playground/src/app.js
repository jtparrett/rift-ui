import "core-js/stable";
import { Root, Text, View, Button, HStack, ForEach, If } from "rift-ui";

const Header = title =>
  Text(title, "h1")
    .fontSize("25px")
    .fontWeight("normal");

const logIt = () => {
  console.log("woah!");
};

const Ticker = (state = { count: 0 }, setState) => {
  const update = () => {
    setState({
      count: state.count + 1
    });
  };

  return View(
    Text(state.count)
      .color("red")
      .onClick(update)
      .fontSize("20px"),
    If(state.count > 5, Text("over 5!"))
  );
};

const Thing = countPropValue => (count = countPropValue, setCount) => {
  const update = () => {
    setCount(count + 1);
  };
  return Text(count).onClick(update);
};

const Tabs = (...tabs) => (activeTab = 0, setTab) =>
  View(
    ForEach(tabs, (_, index) =>
      Button(Text(`Tab ${index + 1}`, "span")).onClick(() => {
        setTab(index);
      })
    ),
    tabs[activeTab]
  )
    .background("#eee")
    .padding("20px");

const App = View(
  Header("Welcome to Rift UI!"),
  Text("Testing 123", "h1")
    .fontWeight("bold")
    .fontSize("40px")
    .attr("data-thing", "true"),
  Text("Testing 456"),
  Button(Text("Testing Button", "span")).onClick(logIt),
  HStack(Text("Wow"), Text("Nice one")),
  Tabs(
    Text("Tab 1"),
    Text("Tab 2"),
    Text("Tab 3"),
    Text("Tab 4"),
    Text("Tab 5")
  ),
  HStack(
    ForEach([1, 2, 3, 4], child =>
      Text(child)
        .flex(1)
        .textAlign("center")
    )
  ),
  Ticker,
  Thing(100)
);

Root(document.getElementById("root"), App);
