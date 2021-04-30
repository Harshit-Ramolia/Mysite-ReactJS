import "./content.css";
import Tabs from "./tabs.jsx";
import Roles from "./roles.jsx";
import InsideRoles from "./insideRoles.jsx";

// Renders Tabs inside Access control and slects what to show (Roles or inside Roles)

function Content({
  data,
  disp,
  onClickView,
  onClickBack,
  onClickPermission,
  onClickOnOff,
  onClickExpand,
  selectAll,
  selectNone,
}) {
  
  // State disp inside App.jsx decides what's going to show
  const display =
    disp == "Roles" ? (                             
      <Roles
        headNames={[
          "Radio",
          "Deparment/Role Name",
          "Access Level",
          "No of members",
          "Last Updated",
        ]}
        datalist={data}
        onClickView={onClickView}
        onClickBack={onClickBack}
        onClickPermission={onClickPermission}
        onClickOnOff={onClickOnOff}
        onClickExpand={onClickExpand}
        selectAll={selectAll}
        selectNone={selectNone}
      />
    ) : (
      <InsideRoles
        headNames={[
          "Radio",
          "Deparment/Role Name",
          "Access Level",
          "Summary",
          "Last Updated",
        ]}
        disp={disp}
        datalist={data}
        onClickView={onClickView}
        onClickBack={onClickBack}
        onClickPermission={onClickPermission}
        onClickOnOff={onClickOnOff}
        onClickExpand={onClickExpand}
        selectAll={selectAll}
        selectNone={selectNone}
      />
    );


  return (
    <div className="content">
      <Tabs />
      {display}
    </div>
  );
}

export default Content;
