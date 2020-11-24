import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import Header from "../header/header";

class ChangeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookcover: "",
      name: this.props.name,
      author: this.props.author,
      price: this.props.price,
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
    let formData = new FormData();
    formData.append("bookcover", this.state.bookcover);
    formData.append("name", this.state.name);
    formData.append("author", this.state.author);
    formData.append("price", this.state.price);
    formData.append("id", this.props.match.params.id);
    this.props.changeBook(formData);
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getOneBook(id);
    this.setState({
      name: this.props.book.name,
      author: this.props.book.author,
      price: this.props.book.price,
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
