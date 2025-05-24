import Link from "next/link"
import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"


const page = () => {
  return (
    <div>
      hello next js 
      <h1><Link href={'/about'}>Redirect to about page</Link>  </h1>
    </div>
  )
}

export default page
