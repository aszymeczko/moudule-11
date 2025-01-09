import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getSearchString, updateSearchString } from "../../redux/store";
import { useEffect } from "react";

const SearchForm = () => {
  const searchString = useSelector(getSearchString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchString(""));
  }, []);

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
