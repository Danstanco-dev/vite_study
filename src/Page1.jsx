
import "@/styles/Page1.scss"
import { Link } from "react-router-dom";

const Page1 = () => {
     console.log(" I am Home Page Appliction ");
  return (
    <>

    <h1 className="page1"> HOME PAGE APPLICATION  <Link to="/other"> go to other </Link></h1>
    </>
  )
}

export default Page1