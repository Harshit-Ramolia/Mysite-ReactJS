import Table from "./tables.jsx";
import "./insideRoles.css";

// This will be rendered for every department of role

function InsideRoles({disp, headNames, datalist, onClickView, onClickBack, onClickPermission,onClickOnOff,onClickExpand,selectAll,selectNone }) {
  return (
    <div className="insideRoles">
      <div class="buttons">
        <ul>
          <li>
            <a href="#" class="back" onClick={()=>{onClickBack()}}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>

              <div>{disp}</div>
            </a>
          </li>
          <li>
            <a >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6587 3C17.4087 3 17.1487 3.1 16.9587 3.29L15.1287 5.12L18.8787 8.87L20.7087 7.04C21.0987 6.65 21.0987 6.02 20.7087 5.63L18.3687 3.29C18.1687 3.09 17.9187 3 17.6587 3ZM14.0587 9.02L14.9787 9.94L5.91875 19H4.99875V18.08L14.0587 9.02ZM2.99875 17.25L14.0587 6.19L17.8087 9.94L6.74875 21H2.99875V17.25Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="tabs">
        <ul>
          <li>
            <a href="" class="active">
              <h2>Access Control</h2>
            </a>
            <div class="underline"></div>
          </li>
          <li>
            <div class="vl"></div>
          </li>
          <li>
            <a href="">
              <h2>Assiged Members</h2>
            </a>
          </li>
        </ul>
      </div>
      <Table
        disp={disp}
        headNames={headNames}
        datalist={datalist}
        onClickView={onClickView}
        onClickBack={onClickBack}
        onClickPermission={onClickPermission}
        onClickOnOff={onClickOnOff}
        onClickExpand={onClickExpand}
        selectAll={selectAll}
        selectNone={selectNone}
      />
    </div>
  );
}

export default InsideRoles;
