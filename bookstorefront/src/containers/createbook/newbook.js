import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import "./style.css";

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", author: "", price: "", file: {} };
  }
  handleChangeImage = (e) => {
    //this.setState({ file: e.target.files[0] });
    this.props.createBook(e.target.files[0]);
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

    let { name, author, price, file } = this.state;
    console.log("Request is going: " + name, author, price, file);
    this.props.createBook(name, author, price, file);
    this.setState({ name: "", author: "", price: "", file: {} });
  };

  render() {
    return (
      <div>
        <h1>Добавить книгу</h1>
        <form className="new-book" encType="multipart/form-data">
          <label htmlFor="image" className="new-book-image">
            Загрузить обложку для книги
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => this.handleChangeImage(e)}
          />
          <input
            type="text"
            name="bookName"
            className="new-book-input"
            placeholder="Название книги"
            onChange={(e) => this.handleChangeName(e)}
          />
          <input
            type="text"
            name="author"
            className="new-book-input"
            placeholder="Имя автора"
            onChange={(e) => this.handleChangeAuthor(e)}
          />
          <input
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
            value="Добавить книгу"
          />
        </form>
        <Link to="/"> На главную</Link>
      </div>
    );
  }
}
export default compose(withRouter, connect)(NewBook);
