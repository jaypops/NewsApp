import Select from "react-select";
import { useEffect, useState } from "react";
import { useApicalls } from "../context/Apicalls";
function Sort() {
  const options = [
    { value: "sports", label: "Sports" },
    { value: "crime", label: "Crime" },
    { value: "food", label: "Food" },
    { value: "education", label: "Education" },
    { value: "entertainment", label: "Entertainment" },
    { value: "business", label: "Business" },
    { value: "health", label: "Health" },
    { value: "politics", label: "Politics" },
  ];
  const [Selectoption, setSelectoption] = useState();
  // const [Picked, setPicked] = useState([]);
  const { fetchCategory, fetchSearch, news } = useApicalls();
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "250px",
      borderRadius: "8px",
      textAlign: "left",
      boxShadow: "0px 4px 8px 4px rgba(0, 0, 0, 0.4)",
    }),
    options: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "black" : "grey",
      backgroundColor: state.isSelected ? "#11101d" : "white",
    }),
  };
  function Handlefilter(option) {
    setSelectoption(option);
  }
  // useEffect(() => {
  //   if (Picked) {
  //     setPicked(news[Selectoption.value] || []);
  //   }
  // }, [news, Selectoption, Picked]);
  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        value={Selectoption}
        onChange={Handlefilter}
      />
    </div>
  );
}

export default Sort;
