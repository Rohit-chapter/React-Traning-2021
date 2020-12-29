import React from 'react';
import {ApiHelper} from "../../Helper/apiHelper";
import BlogDetailComponents from '../../Components/blogdetail'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          blogDetailData: "",
        };
    }
    componentDidMount() {
      const id = this.props.history.location.pathname.split("/");
      console.log(id[3],"id")
      this.getBlogDetails(id[3])
    }

    getBlogDetails = async(id)=>{
      try {
        let api = new ApiHelper();
        let result = await api.FetchFromServer(
          `https://jsonplaceholder.typicode.com/photos/${(id)}`,
          "GET",
          false,
          undefined,
          undefined
        )
        if(result && result.data){
          const {blogDetailData} = this.state;
          this.setState({
            blogDetailData : result.data
          })
        }
        else{
          console.log("No data");
        }
      }
      catch(error){
        console.log(error,"error");
      }
    }

    render() {
      const {blogDetailData} = this.state;
      return (
          <>
            <BlogDetailComponents blogDetailData={blogDetailData}/>
          </>
      );
    }
}

export default Blog;
  