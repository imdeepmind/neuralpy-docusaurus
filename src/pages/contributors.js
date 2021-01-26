import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle, Container } from "reactstrap";

import Layout from "@theme/Layout";

function Hello() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetch(
          "https://api.github.com/repos/imdeepmind/NeuralPy/contributors"
        );

        const data = result.ok && (await result.json());

        if (data) setContributors(data);
      } catch (err) {
        console.log("Network Error: ", err);
      }
    };

    loadData();
  }, []);

  return (
    <Layout title="Contributors">
      <Container>
      <Row>
        {contributors.map((val) => {
          return (
            <Col key={val.id} xs={12} md={6} lg={3}>
              <Card style={{margin: 5}}>
                <CardImg
                  top
                  width="250px"
                  src={val.avatar_url}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5" style={{textAlign: "center", color: "white", padding: 5}}>
                    <a href={val.html_url}>{val.login}</a>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
      </Container>
    </Layout>
  );
}

export default Hello;
