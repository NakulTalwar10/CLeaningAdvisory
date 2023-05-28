import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(existingBlogs);
    setFilteredBlogs(existingBlogs);
  }, []);

  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    setShowFullDescription(true);
    navigate('/blog-details', { state: { blog } });
  };

  const handleSearch = (category) => {
    setSearchCategory(category);
    if (category.trim() === '') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.category.toLowerCase().includes(category.toLowerCase().trim())
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div>
      <div>
        <div className="container-fluid p-2 bg-[#ece3e3]">
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search Category"
              className="me-2"
              aria-label="Search"
              onClick={() => handleSearch(searchCategory)}
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            />
            <Button className="font-bold bg-[#165015] text-[white]" variant="outline-success" onClick={() => handleSearch(searchCategory)}>
              Search
            </Button>
          </Form>
          <Nav className="mt-3 justify-content-center" navbarScroll>
            <Nav.Item>
              <Nav.Link className="font-bold text-xl text-[black] hover:text-[grey]" onClick={() => handleSearch('Cleaning Checklist')}>
                Cleaning Checklist
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="font-bold text-xl text-[black] hover:text-[grey]" onClick={() => handleSearch('Cleaning Tips')}>
                Cleaning Tips
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="font-bold text-xl text-[black] hover:text-[grey]" onClick={() => handleSearch('Decluttering')}>
                Decluttering
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="font-bold text-xl text-[black] hover:text-[grey]" onClick={() => handleSearch('Eco Living')}>
                Eco Living
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="font-bold text-xl text-[black] hover:text-[grey]" onClick={() => handleSearch('Emop Stories')}>
                Emop Stories
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="container my-4">
          <Row>
            {filteredBlogs.map((blog, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="mb-3 small-card">
                  <div className="card-image">
                    <Card.Img variant="top" src={blog.image} />
                  </div>
                  <Card.Body>
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
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
