async function Card() {
  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/", {
      cache: "no-store",
      next: { revalidate: 10 },
    });
    return res.json();
  };

  const data = await getProducts();

  return (
    <>
      {data.products.map((product, id) => (
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={id}
        >
          <div className="w-full h-100">
           <img src={product.thumbnail} alt="product" className="fill"/>
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={product.url}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Vist Website
              </a>
              <a
                href={product.github}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;

