function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Snekars",
    },
    {
      id: 4,
      title: "Women's",
    },
    {
      id: 5,
      title: "Men's",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => {
        return (
          <div key={id} className="category-conatiner">
            <div className="background-image" />
            {/* <img/> */}
            <div className="category-body-container">
              <h1>{title}</h1>
              <p>Shop now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
