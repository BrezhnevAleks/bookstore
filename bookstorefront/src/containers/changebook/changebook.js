import React from "react";
import connect from "./connect";
import { Redirect, withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Select from "react-select";

class ChangeBook extends React.Component {
  constructor(props) {
    super(props);
    const { name, author, price, description } = this.props;
    this.state = {
      bookcover: "",
      name: name,
      author: author,
      price: price,

      description: description,
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

      case "price":
        return this.setState({ price: e.target.value });
      case "description":
        return this.setState({ description: e.target.value });
    }
  };
  handleChangeSelect = (e) => {
    this.setState({ genre: e.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { bookcover, name, author, price, genre, description } = this.state;
    const { id } = this.props.match.params;
    let formData = new FormData();
    formData.append("bookcover", bookcover);
    formData.append("name", name);
    formData.append("author", author);

    formData.append("price", price);
    formData.append("description", description);
    formData.append("id", id);
    this.props.changeBook(formData);
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getOneBook(id);
    const { name, author, price, description } = this.props.book;
    this.setState({
      name,
      author,
      price,
      description,
    });
  }

  render() {
    const { name, author, price, description } = this.state;

    return (
      <div>
        <Header />
        <h1>Изменить книгу</h1>
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
            value={name}
            type="text"
            name="bookName"
            className="new-book-input"
            placeholder="Название книги"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            value={author}
            type="text"
            name="author"
            className="new-book-input"
            placeholder="Имя автора"
            onChange={(e) => this.handleChange(e)}
          />

          <input
            value={price}
            placeholder="Цена"
            type="number"
            min="0"
            name="price"
            className="new-book-input"
            onChange={(e) => this.handleChange(e)}
          />
          <textarea
            value={description}
            name="description"
            rows="10"
            cols="50"
            className="new-book-description"
            style={{ width: "350px" }}
            onChange={(e) => this.handleChange(e)}
            placeholder="Добавьте описание для книги"
          />

          <input
            className="new-book-submit"
            type="submit"
            value="Изменить книгу"
          />
        </form>
      </div>
    );
  }
}
export default compose(withRouter, connect)(ChangeBook);
