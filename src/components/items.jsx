//  This is the heart of whole application.
// To make it modular I made several contions to render based on the state in App.jsx

const eye = (
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
      d="M1 12C2.73 7.61 7 4.5 12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12ZM20.82 12C19.17 8.63 15.79 6.5 12 6.5C8.21 6.5 4.83 8.63 3.18 12C4.83 15.37 8.2 17.5 12 17.5C15.8 17.5 19.17 15.37 20.82 12ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM7.5 12C7.5 9.52 9.52 7.5 12 7.5C14.48 7.5 16.5 9.52 16.5 12C16.5 14.48 14.48 16.5 12 16.5C9.52 16.5 7.5 14.48 7.5 12Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
);

const radioRole = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E0E0E0" />
  </svg>
);

const radioMag1 = (
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
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 7V11H7V13H11V17H13V13H17V11H13V7H11ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
);

const radioMag2 = (
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
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM17 11H7V13H17V11Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
);

const checked = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 0H16C17.1 0 18 0.939561 18 2.08791V16.7033C18 17.8517 17.1 18.7912 16 18.7912H2C0.9 18.7912 0 17.8517 0 16.7033V2.08791C0 0.939561 0.9 0 2 0ZM13.58 4.78131L14.99 6.26373L6.98999 14.6154L2.98999 10.45L4.40999 8.97801L6.98999 11.661L13.58 4.78131Z"
      fill="#673AB7"
    />
  </svg>
);

const unchecked = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
);

const unselected = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9.25" stroke="#BDBDBD" stroke-width="1.5" />
  </svg>
);

const selected = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9.25" stroke="#673AB7" stroke-width="1.5" />
    <circle cx="10" cy="10" r="7" fill="#673AB7" />
  </svg>
);

const All = <div class="All">All Access</div>;
const Restrict = <div class="Restrict">Restricted Access</div>;
const No = <div class="No">No Access</div>;

function Items({
  list,
  headNames,
  disp,
  index,
  onClickView,
  onClickBack,
  onClickPermission,
  onClickOnOff,
  onClickExpand,
  selectAll,
  selectNone,
}) {

  // To go inside the department of role
  const viewEye = (
    <div
      className="view clickable"
      onClick={() => {
        onClickView(list[headNames[1]]);
      }}
    >
      {eye}
    </div>
  );

  // To turn and department inside role on or off
  const viewOff = (
    <div class="view">
      <div
        class="onoff off"
        onClick={() => {
          onClickOnOff({ disp: disp, index: index });
        }}
      >
        <div></div>
      </div>
    </div>
  );

  const viewOn = (
    <div class="view">
      <div
        class="onoff on"
        onClick={() => {
          onClickOnOff({ disp: disp, index: index });
        }}
      >
        <div></div>
      </div>
    </div>
  );

  // Baesd on permissions it has this will display the appropriate access tag
  const Access =
    list[headNames[2]] == 2 ? All : list[headNames[2]] == 1 ? Restrict : No;

  // For roles there is different icon, and for admin different and inside role based on wheter it is expanded or not
  const Radio =
    list[headNames[0]] == "role1" ? (
      <div class="radio">{radioRole}</div>
    ) : list[headNames[0]] == "role2" ? (
      <div class="radio"></div>
    ) : list[headNames[0]] == "mag1" ? (
      <div
        class="radio"
        onClick={() => {
          onClickExpand({ disp: disp, index: index });
        }}
      >
        {radioMag1}
      </div>
    ) : (
      <div
        class="radio"
        onClick={() => {
          onClickExpand({ disp: disp, index: index });
        }}
      >
        {radioMag2}
      </div>
    );
  
  // What is the last icon when role to go inside otherwise it is on or off
  const view =
    list["view"] == "eye" ? viewEye : list["view"] == "on" ? viewOn : viewOff;
  let summary = "";
  if (headNames[3] == "Summary") {
    for (let key in list[headNames[3]]) {
      if (list[headNames[3]][key] == true) {
        summary += " " + key + " |";
      }
    }
    summary = summary.slice(0, summary.length - 1);
  } else summary = list[headNames[3]];

  // When expand this is add extra to comlumn and also change css by adding extra class
  const append = headNames[3] == "Summary" && list["expand"] ? " expand" : "";

  const extra =
    headNames[3] == "Summary" && list["expand"] ? (
      <div>
        <div class="line">
          <div class="radio"></div>
          All aspects in the bidding module
        </div>
        <div class="box">
          <div class="control">
            <div class="title">Access Control</div>
            <div class="item">
              <div
                class="radio"
                onClick={() => {
                  selectAll({ disp: disp, index: index });
                }}
              >
                {list[headNames[2]] == 2 ? selected : unselected}
              </div>
              <div class="text">
                <div class="headline">All Access</div>
                <div class="tagline">Can access all items</div>
              </div>
            </div>
            <div class="item">
              <div
                class="radio"
                onClick={() => {
                  selectNone({ disp: disp, index: index });
                }}
              >
                {list[headNames[2]] != 2 ? selected : unselected}
              </div>
              <div class="text">
                <div class="headline">Restricted Access</div>
                <div class="tagline">
                  Can access only assigned or created items
                </div>
              </div>
            </div>
          </div>
          <div class="boxvl"></div>
          <div class="permission">
            <div class="title">Permissions</div>
            <div class="item2">
              <div
                class="check"
                onClick={() => {
                  onClickPermission({
                    disp: disp,
                    index: index,
                    permission: "View",
                  });
                }}
              >
                {list["Summary"]["View"] ? checked : unchecked}
              </div>
              <div class="text">View items in access</div>
            </div>
            <div class="item2">
              <div
                class="check"
                onClick={() => {
                  onClickPermission({
                    disp: disp,
                    index: index,
                    permission: "Edit",
                  });
                }}
              >
                {list["Summary"]["Edit"] ? checked : unchecked}
              </div>
              <div class="text">Edit items in access</div>
            </div>
            <div class="item2">
              <div
                class="check"
                onClick={() => {
                  onClickPermission({
                    disp: disp,
                    index: index,
                    permission: "Create",
                  });
                }}
              >
                {list["Summary"]["Create"] ? checked : unchecked}
              </div>
              <div class="text">Create items in access</div>
            </div>
            <div class="item2">
              <div
                class="check"
                onClick={() => {
                  onClickPermission({
                    disp: disp,
                    index: index,
                    permission: "Delete",
                  });
                }}
              >
                {list["Summary"]["Delete"] ? checked : unchecked}
              </div>
              <div class="text">Delete items in access</div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div />
    );
  return (
    <div className={append}>
      <div class="column">
        {Radio}
        <div class="department">{list[headNames[1]]}</div>
        { !(headNames[3] == "Summary" && list["expand"]) ? <div class="access">{Access}</div> : (<div class="access"></div>)}
        { !(headNames[3] == "Summary" && list["expand"]) ? <div class="members">{summary}</div> : (<div class="members"></div>)}        
        <div class="update">1 min ago</div>
        {view}
      </div>
      {extra}
    </div>
  );
}

export default Items;
