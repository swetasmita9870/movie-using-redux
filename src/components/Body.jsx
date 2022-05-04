import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/productactions";
import { Container } from "react-bootstrap";
import Header from "./header";
const Body = () => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pageno, setPageNo] = useState(1);
  const[query,setQuery]= useState("")
  useEffect(() => {
    fetchProducts();
  }, [pageno,query]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=${query||"a"}&page=${pageno}&include_adult=false`
      );
      dispatch(setProducts(response.data.results));
      // console.log("response",response);
    } catch (err) {
      console.log("error", err.message);
    }
  };
  // console.log("product here",product);
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <div className="Main-container">
        <LeftSide pageno={pageno} setPageNo={setPageNo} />
        <RightSide />
      </div>
    </>
  );
};

export default Body;
