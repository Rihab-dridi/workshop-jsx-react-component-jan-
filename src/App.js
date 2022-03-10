import "./App.css";
import Navbar from "./components/navbar";
import Select from "./components/select";
//import files
//method1: in src file: 2 steps :
// import the images in a variable
// affect the  variable in the src attribute
import image from "./pVibe.jpg";
//method1: in public  file: 1 step :
// affect the path to the src attribute

function App() {
  //inline styling
  const paraStyle = {
    color: "green",
    backgroundColor: "yellow",
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <Select />
        
        <p style={{ color: "tan", fontSize: "20px" }}>
          jsx is an html like syntax ( js syntax extension)
        </p>
        <p style={paraStyle}>
          inline styling is a JS object : keep it in mind{" "}
        </p>
        <div className="images">
          <img src={image} alt="picture" />

          <img src="/images/pVibe2.jpg" alt="pic2" />
        </div>
      </div>
      <div>hgf</div>
    </>
  );
}

export default App;
