import React from 'react';
import {Card, Row , Col, Container} from 'react-bootstrap';

class BlogDetailComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //const {blogData} = this.props;
      return (
          <>
            <Container>
             <div className={"about-warp"}>
                 <h1 className={"text-center pt-4 pb-4"}>Blog</h1>
                <Row>
                    {/* {blogData.map((data,index) =>
                    <Col md={6} sm={6} key={index}>
                        <Card className={"mb-4"}>
                            <Card.Body>
                                <Card.Title class={"text-capitalize"}>{data.title}</Card.Title>
                                <Card.Text>
                                    <img src={data.url} width={"200"}/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                 */}
                Details
                </Row>
             </div>
             </Container>
          </>
      );
    }
}

export default BlogDetailComponents;