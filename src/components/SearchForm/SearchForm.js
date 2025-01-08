import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchString } from "../../redux/store";

const SearchForm = () => {
  const searchString = useSelector((state) => state.searchString);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSearchString(e.target.value));
  };

  return (
    <form className={styles.searchForm}>
      <TextInput
        placeholder="Search..."
        value={searchString}
        onChange={(e) => handleChange(e)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
