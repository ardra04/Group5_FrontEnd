import React, { Component } from "react";

import { connect } from "react-redux";
import {
  saveBook,
  fetchBook,
  updateBook,
  fetchGenres,
} from "../../services/index";

import { Card, Form, Button, Col, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faPlusSquare,
  faUndo,
  faList,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import MyToast from "../MyToast";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state = {
      seatcapacity: [],
      show: false,
    };
  }

  initialState = {
    id: "",
    address:"",
    floor:"",
    availablespaces:"",
    seatcapacity:""
  };



  findBookById = (bookId) => {
    this.props.fetchBook(bookId);
    setTimeout(() => {
      let book = this.props.bookObject.book;
      if (book != null) {
        this.setState({
          id: book.id,
          address: book.address,
          floor: book.floor,
          availablespaces: book.availablespaces,
          seatcapacity: book.seatcapacity,
        });
      }
    }, 1000);
  };

  resetBook = () => {
    this.setState(() => this.initialState);
  };

  submitBook = (event) => {
    event.preventDefault();

    const book = {
      address: this.state.address,
      floor: this.state.floor,
      availablespaces: this.state.availablespaces,
      seatcapacity: this.state.seatcapacity,
    };

    this.props.saveBook(book);
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "post" });
        setTimeout(() => this.setState({ show: false }), 3000);
      } else {
        this.setState({ show: false });
      }
    }, 2000);
    this.setState(this.initialState);
  };

  updateBook = (event) => {
    event.preventDefault();

    const book = {
      address: this.state.address,
      floor: this.state.floor,
      availablespaces: this.state.availablespaces,
      seatcapacity: this.state.seatcapacity,
    };
    this.props.updateBook(book);
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "put" });
        setTimeout(() => this.setState({ show: false }), 3000);
      } else {
        this.setState({ show: false });
      }
    }, 2000);
    this.setState(this.initialState);
  };

  bookChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  bookList = () => {
    return this.props.history.push("/list");
  };

  render() {
    const { address, floor, availablespaces, seatcapacity } =
      this.state;

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={
              this.state.method === "put"
                ? "Book Updated Successfully."
                : "Book Saved Successfully."
            }
            type={"success"}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />{" "}
            {this.state.id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form
            onReset={this.resetBook}
            onSubmit={this.state.id ? this.updateBook : this.submitBook}
            id="bookFormId"
          >
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="address"
                    value={title}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Address"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFloor">
                  <Form.Label>Floor</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="floor"
                    value={author}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Floor"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAvailableSpaces">
                  <Form.Label>AvailableSpaces</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      autoComplete="off"
                      type="test"
                      name="availablespaces"
                      value={coverPhotoURL}
                      onChange={this.bookChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter AvailableSpaces"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSeatCapacity">
                  <Form.Label>SeatCapacity</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="seatcapacity"
                    value={isbnNumber}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter SeatCapacity"
                  />
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} />{" "}
                {this.state.id ? "Update" : "Save"}
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                type="button"
                onClick={() => this.bookList()}
              >
                <FontAwesomeIcon icon={faList} /> Book List
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookObject: state.book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveBook: (book) => dispatch(saveBook(book)),
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    updateBook: (book) => dispatch(updateBook(book)),
    fetchGenres: () => dispatch(fetchGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);