import React from 'react';
import axios from 'axios';

import BlogComponents from '../../Components/blog'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photos: [],
        };
    }
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
        .then(res => {
          const photos = res.data;
          this.setState({ photos });
        })
    }

    handleDetail =()=>{

    }

    render() {
        const {slidename} = this.state
      return (
          <>
          {/* <ul>
            { this.state.photos.map((photos,index) => <li>{person.name}</li>)}
          </ul> */}
            <BlogComponents 
              blogData={this.state.photos}
            />
          </>
      );
    }
}

export default Blog;
  