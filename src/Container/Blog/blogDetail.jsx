import React from 'react';
import axios from 'axios';

import BlogDetailComponents from '../../Components/blogdetail'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photos: [],
        };
    }
    componentDidMount() {}
    render() {
      return (
          <>
            <BlogDetailComponents />
          </>
      );
    }
}

export default Blog;
  