import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

import Layout from "@theme/Layout";

function Hello() {
  const blogs = [];

  const renderBlogs = () => {
    return (
      <ListGroup>
        {blogs.map((val) => {
          return (
            <ListGroupItem key={val.url} style={{padding: 10, margin: 5}}>
              <a href={val.url}>{val.title}</a>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  const renderNoBlogs = () => {
    return (
      <ListGroup>
        <ListGroupItem style={{padding: 10, margin: 5}}>Currently there is no blog</ListGroupItem>
      </ListGroup>
    );
  };

  return (
    <Layout title="Hello">
      <Container>
        {blogs.length > 0 && renderBlogs()}

        {blogs.length < 1 && renderNoBlogs()}
      </Container>
    </Layout>
  );
}

export default Hello;
