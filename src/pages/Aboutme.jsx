import AboutPreview from "../components/AboutPreview";
import MyDetails from "../components/MyDetails";

const Aboutme = () => {
    return (
        <section className="py-6 container mx-auto">
          <AboutPreview  showButton={false}/>
          <MyDetails />
        </section>
    );
};

export default Aboutme;