import React from "react";
import Select from "react-select";

class BooksFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const options = [
      { value: "default", label: "По умолчанию", selected: true },
      { value: "expensive", label: "Сначала дороже" },
      { value: "name", label: "По названию" },
    ];
    return (
      <div>
        <Select
          className="react-select-container"
          defaultValue={options[0]}
          options={options}
          onChange={(e) => this.props.handleOnChangeFilter(e, options)}
          closeMenuOnSelect={true}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            borderColor: "none",
            padding: 0,
            colors: {
              ...theme.colors,
              primary25: "#5dc8e9",
              primary: "#5c99e9",
            },
          })}
        />
      </div>
    );
  }
}
export default BooksFilter;
