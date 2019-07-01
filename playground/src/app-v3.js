const Suspense = (fallback, render) => {
  let component;

  return async (isLoading = true, setLoading) => {
    if (isLoading) {
      new Promise(async resolve => {
        component = await render();
        resolve();
      }).then(() => setLoading(false));
    }

    if (isLoading) {
      return fallback;
    }

    return component;
  };
};

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

const Products = async () => {
  const req = await fetch("https://j-parre.myshopify.com/products.json");
  const { products } = await req.json();

  return View(
    ForEach(products, product => {
      return Text(product.title);
    })
  );
};

const App = View(
  Text("Testing Query"),
  Suspense(Text("Loading..."), Products),
  LoadingProducts
);

Root(document.getElementById("root"), App);
