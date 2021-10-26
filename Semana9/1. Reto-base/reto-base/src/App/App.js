import "./../App/App.css";
import Body from "../Components/Body/Body";
import Header from "../Components/Header/Header";
import SidenavD from "../Components/SidenavD/SidenavD";
import SidenavI from "../Components/SidenavI/SidenavI";
import Footer from "../Components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <div className="general">
        <SidenavI/>
        <Body />
        <SidenavD />
      </div>
      <Footer/>
    </div>
  );
}

export default App

