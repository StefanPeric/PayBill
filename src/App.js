import './App.css';
import PayBillPage from "./components/PayBillPage/PayBillPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
            <PayBillPage/>
        </Layout>
    </div>
  );
}

export default App;