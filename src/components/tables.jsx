import React from "react";
import "./tables.css";
import Head from "./head.jsx";
import Items from "./items.jsx";

// This will handel all the rending of head and other comlumns by making list from data

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let items = this.props.datalist.map((object, index) => (
      <Items
        key={object["Deparment/Role Name"]}
        headNames={this.props.headNames}
        list={object}
        index={index}
        disp={this.props.disp}
        onClickView={this.props.onClickView}
        onClickBack={this.props.onClickBack}
        onClickPermission={this.props.onClickPermission}
        onClickOnOff={this.props.onClickOnOff}
        onClickExpand={this.props.onClickExpand}
        selectAll={this.props.selectAll}
        selectNone={this.props.selectNone}
      />
    ));
    return (
      <div class="table">
        <Head headNames={this.props.headNames} />
        {items}
        <div class="space"></div>
      </div>
    );
  }
}

export default Table;
