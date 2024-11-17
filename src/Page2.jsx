
import "@/styles/Page2.scss"
import { Link } from "react-router-dom"

const Page2 = () => {
     console.log("I am Other Page Application")
  return (
    <>
    <h1 className="page2"> OTHER PAGE APPLICATION <Link to="/"> go to the home page</Link></h1>
    </>
  )
}

export default Page2