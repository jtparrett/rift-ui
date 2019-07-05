const LoadingProducts = (state = { loading: true, products: [] }, setState) => {
  if (state.loading) {
    fetch("https://j-parre.myshopify.com/products.json")
      .then(req => req.json())
      .then(({ products }) => {
        setState({
          products,
          loading: false
        });
      });
  }

  return View(
    If(state.loading, Text("Loading...")),
    ForEach(state.products, product => {
      return Text(product.title);
    })
  );
};

const App = View(Text("Testing Query"), LoadingProducts);

Root(document.getElementById("root"), App);
