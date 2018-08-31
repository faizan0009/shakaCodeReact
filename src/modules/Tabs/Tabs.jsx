import React, { Component } from 'react';
import {Tab , Container} from 'semantic-ui-react';
import Create from '../Signup';
import ViewData from '../ViewData';


class Tabs extends Component {
state = {
  activeIndex: 0
}

componentWillMount = () => {
  if(localStorage.getItem('tabActiveIndex')) {
    this.setState({"activeIndex": localStorage.getItem('tabActiveIndex')});
  }
}

handleChange = (e, data) => {
  localStorage.setItem("tabActiveIndex", data.activeIndex);
  this.setState(data);
}

componentWillUnmount() {
  localStorage.removeItem("tabActiveIndex");
}


render() {

 let panes = [
          { menuItem: 'View Data', render: () => <Tab.Pane attached={false}><ViewData/></Tab.Pane> },
          { menuItem: 'Create', render: () => <Tab.Pane attached={false}><Create create/></Tab.Pane> },
        ];

        return (
        <div> 
          <Container>
                  <Tab
                    menu={{ color: 'teal', inverted: true, attached: false, tabular: false  }}
                    panes={panes}
                    onTabChange={this.handleChange}
                    activeIndex={this.state.activeIndex}
                  />
          </Container>
        </div>
      );
}



}
export default Tabs;
