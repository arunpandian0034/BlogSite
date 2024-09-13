import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]); // Initialize as an empty array for multiple files
    const [author, setAuthor] = useState("");
    const [amt, setAmt] = useState("");
    const [html, setHtml] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !images.length || !author || !amt || !html) {
            setError("Please fill all fields and upload at least one image.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            for (const file of images) {
                formData.append("images", file); // Correctly appending each file
            }
            formData.append("author", author);
            formData.append("amt", amt);
            formData.append("html", html);

            const response = await axios.post("http://localhost:4008/product/insertwithpost", formData);
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
        setImages(e.target.files); // Store the file list
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Form onSubmit={handleSubmit} className="p-5 border rounded shadow-lg bg-light">
                <h2 className="text-center mb-5">Add New Product</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form.Group className="mb-3">
                    <Form.Label>Title Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Images</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                        multiple // Allow multiple file uploads
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Enter author name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Amt</Form.Label>
                    <Form.Control
                        type="number"
                        value={amt}
                        onChange={(e) => setAmt(e.target.value)}
                        placeholder="Enter price"
                        min="0"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>HTML</Form.Label>
                    <Form.Control
                        type="text"
                        value={html}
                        onChange={(e) => setHtml(e.target.value)}
                        placeholder="Enter HTML content"
                    />
                </Form.Group>
                <Button type="submit" variant="dark" className="w-100">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Admin;
