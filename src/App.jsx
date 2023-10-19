import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Policy from './Components/Policy';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="h-screen flex flex-col justify-center items-center m-3">
      <Navbar/>

      <Form />

      <Policy/>

      <div className="mt-10 border-b-2 w-96"></div>

      <Footer/>

    </div>
  );
}

export default App;
