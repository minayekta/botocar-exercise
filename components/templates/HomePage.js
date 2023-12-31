import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.container}>
        <Banner/>
        <Attributes />
      <Definition />
      <Companies />
      <Guide />
        </div>
    )
}

export default HomePage
