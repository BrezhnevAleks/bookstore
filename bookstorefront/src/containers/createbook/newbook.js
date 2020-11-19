import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./style.css";

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookcover: "",
      name: "",
      author: "",
      genre: "",
      price: "",
    };
  }
  handleChange = (e) => {
    switch (e.target.name) {
      case "image":
        return this.setState({ bookcover: e.target.files[0] });
      case "name":
        return this.setState({ name: e.target.value });
      case "author":
        return this.setState({ author: e.target.value });
      case "genre":
        return this.setState({ genre: e.target.value });
      case "price":
        return this.setState({ price: e.target.value });
    }
  };
  handleChangeSelect = (e) => {
    this.setState({ genre: e.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("bookcover", this.state.bookcover);
    formData.append("name", this.state.name);
    formData.append("author", this.state.author);
    formData.append("genre", this.state.genre);
    formData.append("price", this.state.price);

    this.props.createBook(formData);
    // let { name, author, price, file } = this.state;
    // console.log("Request is going: " + name, author, price, file);
    // this.props.createBook(name, author, price, file);
    // this.setState({ name: "", author: "", price: "", file: {} });
  };

  render() {
    const options = [
      { value: "fantasy", label: "Фантастика", selected: true },
      { value: "detective", label: "Детектив" },
      { value: "classic", label: "Классика" },
      { value: "journey", label: "Путешестия" },
      { value: "textbooks", label: "Учебники" },
      { value: "kids", label: "Детские книги" },
      { value: "poetry", label: "Поэзия" },
    ];

    const customStyles = {
      control: (base, state) => ({
        ...base,
        width: 280,
        fontSize: 16,
        paddingLeft: "4px",
        background: "#eceff1",
        borderRadius: "5px",
        border: "2px solid #5c99e9",
        margin: "0 auto",
      }),
      menu: (base) => ({
        ...base,
        width: 280,
        borderRadius: 0,
        marginTop: 0,
        margin: 0,
      }),
      menuList: (base) => ({
        ...base,
        padding: 0,
        margin: 0,
      }),
    };

    return (
      <div>
        <h1>Добавить книгу</h1>
        <form
          className="new-book"
          encType="multipart/form-data"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <label htmlFor="image" className="new-book-image">
            {this.state.bookcover
              ? this.state.bookcover.name
              : "Загрузить обложку для книги"}
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="name"
            className="new-book-input"
            placeholder="Название книги"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="author"
            className="new-book-input"
            placeholder="Имя автора"
            onChange={(e) => this.handleChange(e)}
          />
          <Select
            styles={customStyles}
            defaultValue={options[0]}
            options={options}
            onChange={(e) => this.handleChangeSelect(e)}
            closeMenuOnSelect={true}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,

              padding: 0,
              colors: {
                ...theme.colors,
                primary25: "#5dc8e9",
                primary: "#5c99e9",
              },
            })}
          />
          <input
            type="text"
            name="genre"
            className="new-book-input"
            placeholder="Жанр"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            placeholder="Цена"
            type="number"
            min="0"
            name="price"
            className="new-book-input"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            className="new-book-submit"
            type="submit"
            value="Добавить книгу"
          />
        </form>
        <Link to="/"> На главную</Link>
      </div>
    );
  }
}
export default compose(withRouter, connect)(NewBook);
