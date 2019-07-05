const Title = (value, element) => Text(value, element).margin(0);

const Container = (...children) =>
  View(...children)
    .width("800px")
    .maxWidth("100%")
    .margin("0 auto")
    .boxSizing("border-box")
    .padding("0 20px");

const Banner = ({ title }) =>
  HStack(
    Img("./banner.jpg")
      .width("100%")
      .height("100%")
      .display("block")
      .position("absolute")
      .zIndex(-1)
      .opacity(0.4)
      .objectFit("cover"),
    Container(
      Title(title, "h1")
        .color("#fff")
        .textAlign("center")
    )
  )
    .position("relative")
    .overflow("hidden")
    .minHeight("400px")
    .background("#000")
    .alignItems("center")
    .zIndex(1);

const Ticker = (count = 0, setCount) =>
  Button(Text(`Click Me ${count}`, "span")).onClick(() => setCount(count + 1));

const App = View(
  Banner({ title: "Framework" }),
  Container(Text("This is a test page for the framework"), Ticker).paddingTop(
    "50px"
  )
);

Root(document.getElementById("root"), App);
