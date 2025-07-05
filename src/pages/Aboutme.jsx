import AboutPreview from "../components/AboutPreview";
import MyDetails from "../components/MyDetails";

const Aboutme = () => {
    return (
        <section className="py-12 container mx-auto">
          <AboutPreview  showButton={false}/>
          <MyDetails />
        </section>
    );
};

export default Aboutme;