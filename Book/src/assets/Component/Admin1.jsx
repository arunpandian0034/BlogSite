import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Alert, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]); // Store multiple files
    const [author, setAuthor] = useState("");
    const [maindescription, setMainDescription] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !images || !author || !maindescription || !description || !content) {
            setError("Please fill all fields and upload at least one image.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);

            // Append each file to FormData
            for (const file of images) {
                formData.append("images", file);
            }

            formData.append("author", author);
            formData.append("maindescription", maindescription);
            formData.append("description", description);
            formData.append("content", content);

            const response = await axios.post("http://localhost:4008/blog/insertwithpost", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setSuccess("Form submitted successfully");
            setError(null);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setError("Failed to submit form. Please check details.");
            setSuccess(null);
        }
    };

    const handleFileChange = (e) => {
        // Convert FileList to array
        setImages(Array.from(e.target.files));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="p-4 border-0 shadow-lg bg-light w-100" style={{ maxWidth: '800px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Add New Blog Post</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4">
                            <Form.Label className="font-weight-bold">Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter title"
                                size="lg"
                                style={{ borderColor: '#ced4da', borderRadius: '.25rem' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="font-weight-bold">Images</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={handleFileChange}
                                multiple // Allow multiple file uploads
                                size="lg"
                                style={{ borderColor: '#ced4da', borderRadius: '.25rem' }}
                            />
                            {images.length > 0 && (
                                <div className="mt-3">
                                    <h5>Image Previews:</h5>
                                    <Row>
                                        {images.map((file, index) => (
                                            <Col xs={6} md={4} lg={3} className="mb-3" key={index}>
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={`preview ${index}`}
                                                    style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: '.25rem' }}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="font-weight-bold">Author</Form.Label>
                            <Form.Control
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="Enter author name"
                                size="lg"
                                style={{ borderColor: '#ced4da', borderRadius: '.25rem' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="font-weight-bold">Main Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={maindescription}
                                onChange={(e) => setMainDescription(e.target.value)}
                                placeholder="Enter main description"
                                size="lg"
                                style={{ borderColor: '#ced4da', borderRadius: '.25rem' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="font-weight-bold">Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter description"
                                size="lg"
                                style={{ borderColor: '#ced4da', borderRadius: '.25rem' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="font-weight-bold">Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Enter content"
                                size="lg"
                                style={{ borderColor: '#ced4da', borderRadius: '.25rem' }}
                            />
                        </Form.Group>

                        <Button type="submit" variant="dark" className="w-100" size="lg">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Admin;
