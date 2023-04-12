import { useState, useRef, useEffect } from "react";
import useAutoComplete from "hook/use-auto-complete";
import useClick from "hook/use-click";
import { city } from "types";
import classes from "./search-input.module.scss";
import { MdLocationOn } from "react-icons/md";

const SearchInput = ({ data }: { data: city[] }) => {
  const [hideCard, setHideCard] = useState(true)
  const cardRef = useRef<HTMLDivElement>(null);
  const {
    searchedInput,
    suggestions,
    selectedSearch,
    activeSuggestion,
    handleChange,
    handleKeyDown,
    handleClick,
  } = useAutoComplete(data);

  useClick(() => {
    setHideCard(true)
  }, cardRef);

  useEffect(() => {
    if(suggestions.length !== 0) {
      setHideCard(false)
    }
  }, [suggestions])

  return (
    <div ref={cardRef} className="relative">
      <div className={classes.input}>
        <MdLocationOn className={classes.input__icon} color="#343a40" />
        <input
          type="text"
          placeholder="Where are you going?"
          value={searchedInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={classes.input__field}
          required
        />
      </div>
      {suggestions.length !== 0 && !hideCard && (
        <div className={`${classes.input_card} w-[150%]`}>
          {suggestions.slice(0, 6).map((item, idx) => (
            <div
              key={item._id.toString()}
              className={`${classes.input_card__item} ${
                idx === activeSuggestion - 1 && classes.input_card__active
              }`}
            >
              <h4 className={classes.input_card__text}>
                {item.city}, {item.country}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
