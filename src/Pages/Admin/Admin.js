import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const blog = {
      title,
      heading,
      description,
      image: imageUrl,
      date,
      category,
    };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = [...existingBlogs, blog];
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    setTitle('');
    setHeading('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-3">Welcome Admin</h1>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="font-bold text-xl">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={handleTitleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="font-bold text-xl">Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Heading"
                value={heading}
                onChange={handleHeadingChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="font-bold text-xl">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="font-bold text-xl">Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label className="font-bold text-xl">Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={handleDateChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label className="font-bold text-xl">Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={handleCategoryChange}
              />
            </Form.Group>
          </Row>

          <div className="flex justify-center">
            <Button
              className="font-bold bg-[#4c904b] text-[white]  my-2"
              variant="success"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Admin;
