import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Message from "../message/message";

class ChangeBook extends React.Component {
  constructor(props) {
    super(props);
    const { name, author, price, description } = this.props;
    this.state = {
      bookcover: "",
      name,
      author,
      price,
      description,
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
    const {
      changeBook,
      match: {
        params: { id },
      },
    } = this.props;
    let formData = new FormData();

    formData.append("bookcover", bookcover);
    formData.append("name", name);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("id", id);

    changeBook(formData);
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      book: { name, author, price, description },
      getOneBook,
    } = this.props;

    getOneBook(id);

    this.setState({
      name,
      author,
      price,
      description,
    });
  }

  render() {
    const { name, author, price, description, bookcover } = this.state;
    const {
      match: {
        params: { id },
      },
      completed,
    } = this.props;

    return (
      <div style={{ height: "80%" }}>
        <Header />
        {completed ? (
          <Link
            to={{
              pathname: `/books/${id}`,
              state: { fromDashboard: true },
            }}
          >
            <Message />
          </Link>
        ) : (
          <div>
            <h1>Изменить книгу</h1>

            <form
              className="new-book"
              encType="multipart/form-data"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="image" className="new-book-image">
                {bookcover ? bookcover.name : "Загрузить обложку для книги"}
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={this.handleChange}
              />
              <input
                value={name}
                type="text"
                name="name"
                className="new-book-input"
                placeholder="Название книги"
                onChange={this.handleChange}
              />
              <input
                value={author}
                type="text"
                name="author"
                className="new-book-input"
                placeholder="Имя автора"
                onChange={this.handleChange}
              />
              <input
                value={price}
                placeholder="Цена"
                type="number"
                min="0"
                name="price"
                className="new-book-input"
                onChange={this.handleChange}
              />
              <textarea
                value={description}
                name="description"
                rows="10"
                cols="50"
                className="new-book-description"
                style={{ width: "350px" }}
                onChange={this.handleChange}
                placeholder="Добавьте описание для книги"
              />
              <input
                className="new-book-submit"
                type="submit"
                value="Изменить книгу"
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default compose(withRouter, connect)(ChangeBook);
