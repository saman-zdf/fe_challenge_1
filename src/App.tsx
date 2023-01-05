import { useState } from "react";
import styles from "./App.module.scss";
import FormContainer from "./components/Form/FormContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.AppContainer}>
      <div className={styles.AppWrapper}>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
