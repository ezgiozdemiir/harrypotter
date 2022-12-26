import React, { useEffect, useState } from "react";
import useDebounce from "../../libs/hooks/useDebounce";

type TProps = {
  placeholder?: string;
  value?: string;
  delay?: number;
  name?: string;
  onChange?: (value: string) => void;
  minLength?: number;
};

const SearchInput = ({
  placeholder = "Search...",
  value,
  delay = 200,
  name = "term",
  onChange,
  minLength = 2,
}: TProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(value ?? "");

  const debouncedTerm = useDebounce(searchTerm, delay);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  useEffect(() => {
    if (
      debouncedTerm.trim().length === 0 ||
      debouncedTerm.trim().length > minLength
    ) {
      if (onChange) {
        onChange(debouncedTerm.trim());
      }
    }
  }, [debouncedTerm, minLength, onChange]);
  return (
    <div>
      <label id="search-input">Search: </label>
      <input
        name={name}
        type="search"
        placeholder={placeholder}
        id="search-input"
        value={searchTerm}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchInput;
