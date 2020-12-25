import React from 'react';
import {Card, Row , Col, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

class BlogComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick =()=>{

    }
    render() {
        const {blogData} = this.props;
        console.log(blogData);
      return (
          <>
            <Container>
             <div className={"about-warp"}>
                 <h1 className={"text-center pt-4 pb-4"}>Blog</h1>
                <Row>
                    {blogData.map((data,index) =>
                    <Col md={6} sm={6} key={index}>
                        <Card className={"mb-4"}>
                            <Card.Body>
                                <Card.Title class={"text-capitalize"}>{data.title}</Card.Title>
                                <Card.Text>
                                    <img src={data.url} width={"200"}/>
                                </Card.Text>
                                <span onClick={this.handleClick}>Details</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                </Row>
             </div>
             </Container>
          </>
      );
    }
}

export default BlogComponents;