import SearchForm from "../SearchForm/SearchForm";
import Hero from "../Hero/Hero";
import Lists from "../Lists/Lists";
const Home = () => (
  <>
    <Hero
      title={"My first React App"}
      subtitle={"A simple to-do app, with lists, columns and card"}
    />
    <Lists />
  </>
);

export default Home;
