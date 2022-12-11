
import './App.css';
import Last from './components/Last/Last';
import ModalLogin from './components/Modale/ModalLogin';
import ModalCont from './components/Modale/ModalCont';
import Navbar from './components/Navbar/Navbar';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';


function App() {
  return (
   <>
    <Navbar></Navbar>
    <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>
    <Last></Last>
    <dialog id="Modal">
      <ModalLogin></ModalLogin>
    </dialog>

    <dialog id="Modal2">
      <ModalCont></ModalCont>
    </dialog>

   </>
  );
}

export default App;
