import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
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
      description: "",
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
      case "description":
        return this.setState({ description: e.target.value });
    }
  };

  handleChangeSelect = (e) => {
    this.setState({ genre: e.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { bookcover, name, author, genre, price, description } = this.state;
    const { createBook } = this.props;
    let formData = new FormData();

    formData.append("bookcover", bookcover);
    formData.append("name", name);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("price", price);
    formData.append("description", description);

    createBook(formData);
  };

  render() {
    const { genres, handleOnClickOk } = this.props;
    const options = [
      {
        value: "default",
        label: "Жанр",
        isdisabled: true,
      },
      ...genres,
    ];
    const customStyles = {
      control: (base, state) => ({
        ...base,
        width: 265,
        fontSize: 16,
        padding: "2px 22px",

        background: "#eceff1",
        borderRadius: "5px",
        border: "2px solid #5c99e9",
        margin: "10px auto",
      }),
      menu: (base) => ({
        ...base,
        width: 265,
        borderRadius: 0,
        marginTop: 0,
        margin: "0px 45%",
      }),
      menuList: (base) => ({
        ...base,
        padding: 0,
        margin: "0px auto",
      }),
    };
    const { bookcover } = this.state;

    return (
      <div className="new-book-container">
        <h1 className="create-book-title">Добавить книгу</h1>
        <form
          className="new-book"
          encType="multipart/form-data"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <label htmlFor="image" className="new-book-image">
            {bookcover ? bookcover.name : "Загрузить обложку для книги"}
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
            isOptionDisabled={(option) => option.isdisabled}
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
            placeholder="Цена"
            type="number"
            min="0"
            name="price"
            className="new-book-input"
            onChange={(e) => this.handleChange(e)}
          />
          <textarea
            name="description"
            rows="10"
            cols="50"
            className="new-book-description"
            onChange={(e) => this.handleChange(e)}
            placeholder="Добавьте описание для книги"
          />
          <input
            className="new-book-submit"
            type="submit"
            value="Добавить книгу"
            onClick={handleOnClickOk}
          />
        </form>
      </div>
    );
  }
}
export default compose(withRouter, connect)(NewBook);
