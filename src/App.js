import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Pikachu from "./assets/img/bg1.jpg";
import Bg3 from "./assets/img/bg3.jpg";

function App() {
    return (
        <>
            <Header title="Pokemon App" desc="Created with React"/>
            <Layout title="Pikachu" urlBg={Pikachu}>
                <p>⚠Бьётся током</p>
            </Layout>
            <Layout title="Замечательный цвет" colorBg="white">
                Ну мне так кажется
            </Layout>
            <Layout urlBg={Bg3}>
                *шелест травы*
            </Layout>
            <Footer/>
        </>
    );
}

export default App;
