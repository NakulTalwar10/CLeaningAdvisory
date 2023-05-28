import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './AdminContoll.css';

const AdminControl = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(existingBlogs);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedBlogs = [...blogs];
    if (editing && editingIndex !== null) {
      const blogToUpdate = { ...blogs[editingIndex] };
      blogToUpdate.title = title;
      blogToUpdate.description = description;
      blogToUpdate.date = date;
      blogToUpdate.category = category;
      updatedBlogs[editingIndex] = blogToUpdate;
    } else {
      updatedBlogs.push({ title, description, date, category });
    }
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setTitle('');
    setDescription('');
    setEditing(false);
    setEditingIndex(null);
    setBlogs(updatedBlogs);
  };

  const handleEdit = (index) => {
    const blogToEdit = blogs[index];
    setTitle(blogToEdit.title);
    setDescription(blogToEdit.description);
    setEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  const handleReadMore = (blog) => {
    setShowFullDescription(true);
    navigate('/blog-details', { state: { blog } });
  };

  return (
    <div>    
      <div className="container my-4">
        <Row>
          {blogs.map((blog, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="mb-3 small-card">
                <div className="card-image">
                  <Card.Img variant="top" src={blog.image} />
                </div>
                <Card.Body>
                  {editing && editingIndex === index ? (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                          type="text"
                          value={category}
                          onChange={(event) => setCategory(event.target.value)}
                        />
                      </Form.Group>
                      <div className="d-flex justify-content-between my-2 ">
                        <Button className="font-bold bg-[#4475e7]" variant="primary" type="submit">
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            setTitle('');
                            setDescription('');
                            setEditing(false);
                            setEditingIndex(null);
                          }}
                          className="font-bold bg-[#f05b53]"
                        >
                          Cancel
                        </Button>
                      </div>
                    </Form>
                  ) : (
                    <>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>
                        <strong>Date:</strong> {blog.date}
                        <br />
                        <strong>Category:</strong> {blog.category}
                      </Card.Text>
                      {showFullDescription ? (
                        <Card.Text>{blog.description}</Card.Text>
                      ) : (
                        <Card.Text>{blog.description.slice(0, 100) + '...'}</Card.Text>
                      )}
                      {blog.description.length > 100 && !showFullDescription && (
                        <Button
                          variant="link"
                          onClick={() => handleReadMore(blog)}
                          className="text-primary font-bold"
                        >
                          Read More
                        </Button>
                      )}
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="primary"
                          className="font-bold bg-blue mx-2 my-2 bg-[#4475e7]"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="font-bold bg-red mx-2 my-2 bg-[#f05b53]"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </div>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AdminControl;
