import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data inside the Provider so it runs once when the app starts
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const fetchedData = await response.json();
      setProducts(fetchedData.products);
    } catch (error) {
      console.error("Context Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // We pass an object containing products and loading state
    <AppContext.Provider value={{ products, loading }}>
      {children}
    </AppContext.Provider>
  );
};