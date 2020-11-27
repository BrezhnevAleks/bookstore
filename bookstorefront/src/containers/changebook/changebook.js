import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import Header from "../header/header";

class ChangeBook extends React.Component {
  constructor(props) {
    super(props);
    const { name, author, price } = this.props;
    this.state = {
      bookcover: "",
      name: name,
      author: author,
      price: price,
    };
  }
  handleChangeImage = (e) => {
    this.setState({ bookcover: e.target.files[0] });
  };
  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChangeAuthor = (e) => {
    this.setState({ author: e.target.value });
  };
  handleChangePrice = (e) => {
    this.setState({ price: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { bookcover, name, author, price } = this.state;
    const { id } = this.props.match.params;
    let formData = new FormData();
    formData.append("bookcover", bookcover);
    formData.append("name", name);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("id", id);
    this.props.changeBook(formData);
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getOneBook(id);
    const { name, author, price } = this.props.book;
    this.setState({
      name,
      author,
      price,
    });
  }

  render() {
    const { name, author, price } = this.state;
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
            onChange={(e) => this.handleChangeImage(e)}
          />
          <input
            value={name}
            type="text"
            name="bookName"
            className="new-book-input"
            placeholder="Название книги"
            onChange={(e) => this.handleChangeName(e)}
          />
          <input
            value={author}
            type="text"
            name="author"
            className="new-book-input"
            placeholder="Имя автора"
            onChange={(e) => this.handleChangeAuthor(e)}
          />
          <input
            value={price}
            placeholder="Цена"
            type="number"
            min="0"
            name="price"
            className="new-book-input"
            onChange={(e) => this.handleChangePrice(e)}
          />
          <input
            className="new-book-submit"
            type="submit"
            value="Изменить книгу"
          />
        </form>
        <Link to="/"> На главную</Link>
      </div>
    );
  }
}
export default compose(withRouter, connect)(ChangeBook);
