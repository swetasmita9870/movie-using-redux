
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectProduct } from "../actions/productactions";
import { Button,Container } from "react-bootstrap";
// import { setSelectProduct } from "../actions/productactions";
const LeftSide = ({setPageNo,pageno}) => {
  const[count,setCount]= useState(2)
  const product = useSelector((state) => state.allproduct.product);
  const nextPage = ()=> {
    setCount(prev => prev+1);
    setPageNo(prev=>prev+1);
    
  }
  const prevPage = () =>{
    setCount(count-1);
    setPageNo(prev => prev-1)
  }
  const dispatch = useDispatch()
  const showdata = (id)=>{
    dispatch(setSelectProduct(id))
  }
  const renderMovie = product.map((product) => {
    const { id,title, backdrop_path} = product;
    return (
      <div className="box-1" key={id}>
        <div className="eachMovie" onClick={()=>showdata(id)} >
          <div className="movieLogo">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`}
              alt={title}
              className="logo"
            />
          </div>
          <div className="movieTitle">
            <p>{title}</p>
          </div>
        </div>
        
      </div>
    );
  });
  console.log("here is ", pageno);
  return (
    <>
      <div className="LeftContainer">{renderMovie}
      
      <div className="btn-Group">
        
       {pageno !== 1 && <Button className="next" variant="success" onClick={prevPage}>
          Previous Page {count-2}
        </Button>}
        <Button  className="prev" variant="warning" onClick={nextPage}>
          Next Page {count}
        </Button>
      </div>
      </div>
      
    </>
  );
};
export default LeftSide;
