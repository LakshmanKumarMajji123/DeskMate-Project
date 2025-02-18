import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import image from "../../assets/desktopimage.jpg";
import '../../App.css'
// import { useFetch } from "../../hooks/useFetch";
import { DisplayText } from "../../components/DisplayText";
import { Button } from "../../components/Button";
export const MyDesktop = () => {
  // const [url, setUrl] = useState("http://localhost:8000/products/");
  // const { data: products } = useFetch(url);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const activeProducts = products.filter((product) => product.status === 'Active');


  // console.log("activeProducts");
  //  console.log(activeProducts);

  return (
    <>
      <Link to="/create" >
        <Button children="New" />
      </Link>
      <section className="products">
        {activeProducts.map((product) => (
          <div key={product.id} className="productCard">
            <ul>
              <li >
                <img src={image} alt="desktop" />
                <p>{product.name}</p>
                <DisplayText text1="OS" text2={product.system} />
                <DisplayText text1="Configuration" text2={` ${product.configuration.cpu} , ${product.configuration.memory} Ram , ${product.configuration.storage} Storage`} />
                <DisplayText text1="Status" text2={product.status} />
              </li>
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}
