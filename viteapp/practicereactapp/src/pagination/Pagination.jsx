import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPagination = (selectedpage) => {
    setPage(selectedpage);
  };

  const Btnhandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <>
                <div className="prod" key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <p>{prod.price}</p>
                </div>
              </>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span className="prevBtn" onClick={() => Btnhandle(page - 1)}>
            ⬅️
          </span>

          {[...Array(products.length / 10)].map((_, id) => {
            return (
              <span
                onClick={() => {
                  selectedPagination(id + 1);
                }}
              >
                {id + 1}
              </span>
            );
          })}
          <span className="nextBtn" onClick={() => Btnhandle(page + 1)}>
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
