import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";

function HomePage() {
    return (
        <>
        <Banner/>
        <Attributes />
      <Definition />
      <Companies />
      <Guide />
        </>
    )
}

export default HomePage
