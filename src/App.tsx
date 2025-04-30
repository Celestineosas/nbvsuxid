import { BrowserRouter } from "react-router";
import Footer from "./components/Footer/Footer";
import MainLayout from "./MainLayout/MainLayout";

const App = () => {

  return (
    <BrowserRouter>
      
      <MainLayout />
     <Footer />
    </BrowserRouter>

  )
}

export default App
