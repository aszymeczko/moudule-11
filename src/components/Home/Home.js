import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";
import Hero from "../Hero/Hero";

const Home = () => (
  <>
    <Hero
      title={"My first React App"}
      subtitle={"A simple to-do app, with lists, columns and card"}
    />
    <SearchForm />
    <List />
  </>
);

export default Home;
