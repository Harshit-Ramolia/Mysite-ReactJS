import React from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";
import Content from "./components/content.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disp: "Roles",
      Roles: {
        datalist: [
          {
            Radio: "role1",
            "Deparment/Role Name": "Management Team",
            "Access Level": 0,
            "No of members": 4,
            "Last Updated": "1 min ago",
            view: "eye",
          },
          {
            Radio: "role1",
            "Deparment/Role Name": "Procurement Team",
            "Access Level": 0,
            "No of members": 4,
            "Last Updated": "1 min ago",
            view: "eye",
          },
          {
            Radio: "role2",
            "Deparment/Role Name": "Super Admin",
            "Access Level": 2,
            "No of members": 1,
            "Last Updated": "1 min ago",
            view: "eye",
          },
        ],
      },
      "Management Team": {
        datalist: [
          {
            Radio: "mag1",
            "Deparment/Role Name": "Budget",
            "Access Level": 1,
            Summary: { View: true, Create: true, Edit: false, Delete: false },
            "Last Updated": "1 min ago",
            view: "on",
            expand: false,
            all: false,
            restrict: true,
          },
          {
            Radio: "mag1",
            "Deparment/Role Name": "Bidding",
            "Access Level": 2,
            Summary: { View: true, Create: true, Edit: true, Delete: true },
            "Last Updated": "1 min ago",
            view: "on",
            expand: false,
            all: false,
            restrict: true,
          },
          {
            Radio: "mag1",
            "Deparment/Role Name": "Budget",
            "Access Level": 0,
            Summary: { View: false, Create: false, Edit: false, Delete: false },
            "Last Updated": "1 min ago",
            view: "on",
            expand: false,
            all: false,
            restrict: true,
          },
        ],
      },
    };
    this.onClickView = this.onClickView.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onClickPermission = this.onClickPermission.bind(this);
    this.onClickOnOff = this.onClickOnOff.bind(this);
    this.onClickExpand = this.onClickExpand.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.selectNone = this.selectNone.bind(this);
  }

  onClickView = function (disp) {
    this.setState({ disp: disp });
  };

  onClickBack() {
    this.setState({ disp: "Roles" });
  }

  onClickPermission(object) {
    let objtochange = this.state[object.disp];
    const N = object.disp;
    objtochange.datalist[object.index].Summary[object.permission] = !objtochange.datalist[object.index].Summary[object.permission];
    if (Object.keys(objtochange.datalist[object.index].Summary).every((val)=>{return objtochange.datalist[object.index].Summary[val]})){
      objtochange.datalist[object.index]["Access Level"] = 2;
    }else
    if (Object.keys(objtochange.datalist[object.index].Summary).every((val)=>{return !objtochange.datalist[object.index].Summary[val]})){
      objtochange.datalist[object.index]["Access Level"] = 0;
    }else{
      objtochange.datalist[object.index]["Access Level"] = 1;
    }
    this.setState({N:objtochange});
  }

  selectAll(object){
    let objtochange = this.state[object.disp];
    const N = object.disp;
    Object.keys(objtochange.datalist[object.index].Summary).forEach((val)=>{objtochange.datalist[object.index].Summary[val]=true});
    objtochange.datalist[object.index]["Access Level"] = 2;
    this.setState({N:objtochange});
  }

  selectNone(object){
    let objtochange = this.state[object.disp];
    const N = object.disp;
    Object.keys(objtochange.datalist[object.index].Summary).forEach((val)=>{objtochange.datalist[object.index].Summary[val]=false});
    objtochange.datalist[object.index]["Access Level"] = 0;
    this.setState({N:objtochange});
  }

  onClickExpand(object){
    let objtochange = this.state[object.disp];
    const N = object.disp;
    objtochange.datalist[object.index].expand = !objtochange.datalist[object.index].expand;
    if (objtochange.datalist[object.index].expand) objtochange.datalist[object.index].Radio = "mag2";
    else objtochange.datalist[object.index].Radio = "mag1";
    this.setState({N:objtochange})
  }

  onClickOnOff(object) {
    let objtochange = this.state[object.disp];
    const N = object.disp;
    objtochange.datalist[object.index].view = objtochange.datalist[object.index].view=="on"?"off":"on";
    this.setState({N:objtochange})
  }

  render() {
    let datalist =
      this.state[this.state.disp] !== undefined
        ? this.state[this.state.disp].datalist
        : [];
    return (
      <div>
        <Header />
        <section id="main">
          <Sidebar />
          <Content
            disp={this.state.disp}
            data={datalist}
            onClickView={this.onClickView}
            onClickBack={this.onClickBack}
            onClickPermission={this.onClickPermission}
            onClickOnOff={this.onClickOnOff}
            onClickExpand={this.onClickExpand}
            selectAll={this.selectAll}
            selectNone={this.selectNone}
          />
        </section>
      </div>
    );
  }
}

export default App;
