import AboutPreview from "../components/AboutPreview";
import MyDetails from "../components/MyDetails";

const Aboutme = () => {
    return (
        <section className="py-12">
          <AboutPreview  showButton={false}/>
          <MyDetails />
        </section>
    );
};

export default Aboutme;