import "./roles.css";
import Table from "./tables.jsx";

// This will be rendered for roles

function Roles({ headNames, datalist, onClickView, onClickBack,onClickPermission,onClickOnOff,onClickExpand,selectAll,selectNone }) {
  return (
    <div className="roles">
      <div class="buttons">
        <ul>
          <li>
            <a class="btn">
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 15.1111H13V21.7777H11V15.1111H5V12.8888H11V6.22217H13V12.8888H19V15.1111Z"
                  fill="white"
                />
              </svg>
              <div>Add Role</div>
            </a>
          </li>
          <li>
            <a>
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
          <li>
            <a>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.75 4.5H14.25L12.75 6H7.5V9H28.5V6H23.25L21.75 4.5ZM24 13.5V28.5H12V13.5H24ZM9 10.5H27V28.5C27 30.15 25.65 31.5 24 31.5H12C10.35 31.5 9 30.15 9 28.5V10.5Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <Table
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

export default Roles;
