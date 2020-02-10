import React from 'react';
import Layout from "./components/Layouts/Layouts";
import BurgerBuilder from "./containers/BugerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
        <Layout>
            <BurgerBuilder/>
        </Layout>
    </div>
  );
}

export default App;
