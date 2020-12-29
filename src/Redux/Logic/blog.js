import { createLogic } from "redux-logic";
import {ApiHelper} from "../../Helper/apiHelper";
import {
    blogAction,
    blogSuccess,
} from "../Action";
import { Toaster } from "../../Components/Common/toast";

/**
 *
 */
const blogLogic = createLogic({
  type: blogAction.BLOG_REQUEST,
  async process({ action }, dispatch, done) {
    try {
        let api = new ApiHelper();
        let result = await api.FetchFromServer(
          "https://jsonplaceholder.typicode.com/photos?albumId=1",
          "GET",
          false,
          undefined,
          undefined
        )
        if(result && result.data){
          const photos = [];
          photos.push(result.data);
          dispatch(blogSuccess(photos));
        }
        
        else{
          console.log(result);
        }
      done();
    } catch (error) {
      console.log("=================");
      console.log(error);
      console.log("=================");
      Toaster("error", error)
    }
  }
});


export const BlogLogics = [
    blogLogic,
];