import React from 'react';
import DashboardComponents from '../../Components/dashboard'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          aboutBlock: {
            firstBlock: {
              title : "First Slide", 
              content: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            secondBlock: {
              title : "Second Slide", 
              content: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            thirdBlock: {
              title : "Third Slide", 
              content: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
          }
        };
    }

    componentDidMount =()=>{
      const token = localStorage.getItem("token")
      console.log(token,"token")
      if(!token){
          this.props.history.push('/')
      }
    }

    render() {
        const {slidename} = this.state
      return (
          <>
            <DashboardComponents />
          </>
      );
    }
}

export default Dashboard;
  