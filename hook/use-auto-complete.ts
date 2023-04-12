import React, { useState } from "react";
import { city } from "types";

const useAutoComplete = (data: city[] | undefined) => {
  const [searchedInput, setSearchedInput] = useState("");
  const [suggestions, setSuggestions] = useState<city[]>([]);
  const [selectedSearch, setSelectedSearch] = useState<city | null>(null);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "" && data) {
      const suggestedValue = data.filter((item) => {
        const typedInput = event.target.value.toUpperCase();
        const value = item.city.toUpperCase();

        return value.startsWith(typedInput);
      });
      setSearchedInput(event.target.value);
      setSuggestions(suggestedValue);
    } else {
      setSearchedInput("");
      setSuggestions([]);
      setSelectedSearch(null);
      setActiveSuggestion(0);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && activeSuggestion < 6) {
      setActiveSuggestion(activeSuggestion + 1);
    } else if (event.key === "ArrowUp" && activeSuggestion > 1) {
      setActiveSuggestion(activeSuggestion - 1);
    } else if (event.key === "Enter") {
      setSearchedInput(suggestions[activeSuggestion - 1].city);
      setSelectedSearch(suggestions[activeSuggestion - 1]);
      setSuggestions([]);
      setActiveSuggestion(0);
    }
  };

  const handleClick = (value: city) => {
    setSearchedInput(value.city);
    setSuggestions([]);
    setSelectedSearch(value);
    setActiveSuggestion(0);
  };

  return {
    searchedInput,
    suggestions,
    selectedSearch,
    activeSuggestion,
    handleChange,
    handleKeyDown,
    handleClick,
  };
};

export default useAutoComplete;
