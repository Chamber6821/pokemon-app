import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Pikachu from "./assets/bg1.jpg";
import bg3 from "./assets/bg3.jpg";

function App() {
    return (
        <>
            <Header title={'Pokemon App'} desc={'Created with React'}/>
            <Layout title={'Pikachu'} desc={'⚠Бьётся током'} urlBg={Pikachu}/>
            <Layout title={'Замечательный цвет'} desc={'Ну мне так кажется'} colorBg={'white'}/>
            <Layout desc={'*шелест травы*'} urlBg={bg3}/>
            <Footer/>
        </>
    );
}

export default App;
