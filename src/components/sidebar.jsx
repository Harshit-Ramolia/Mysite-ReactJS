import "./sidebar.css";

// This is side bar of application

function Sidebar() {
  return (
    <div class="sidebar">
      <ul>
        <li>
          <a href="">
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
                d="M4.5 4.5H16.5V19.5H4.5V4.5ZM31.5 4.5H19.5V13.5H31.5V4.5ZM13.5 16.5V7.5H7.5V16.5H13.5ZM28.5 10.5V7.5H22.5V10.5H28.5ZM28.5 19.5V28.5H22.5V19.5H28.5ZM13.5 28.5V25.5H7.5V28.5H13.5ZM31.5 16.5H19.5V31.5H31.5V16.5ZM4.5 22.5H16.5V31.5H4.5V22.5Z"
              />
            </svg>
            <h2>Projects</h2>
          </a>
        </li>
        <li>
          <a href="">
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
                d="M30 10.5H24V7.5L21 4.5H15L12 7.5V10.5H6C4.35 10.5 3 11.85 3 13.5V21C3 22.125 3.6 23.07 4.5 23.595V28.5C4.5 30.165 5.835 31.5 7.5 31.5H28.5C30.165 31.5 31.5 30.165 31.5 28.5V23.58C32.385 23.055 33 22.095 33 21V13.5C33 11.85 31.65 10.5 30 10.5ZM15 7.5H21V10.5H15V7.5ZM30 13.5H6V21H13.5V16.5H22.5V21H30V13.5ZM19.5 22.5H16.5V19.5H19.5V22.5ZM7.5 28.5H28.5V24H22.5V25.5H13.5V24H7.5V28.5Z"
              />
            </svg>
            <h2>Organisation Profile</h2>
          </a>
        </li>
        <li class="active">
          <a href="">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.5 7.5L18 1.5L31.5 7.5V16.5C31.5 24.825 25.74 32.61 18 34.5C10.26 32.61 4.5 24.825 4.5 16.5V7.5ZM28.5 17.985H18V4.785L7.5 9.45V18H18V31.395C23.58 29.67 27.705 24.165 28.5 17.985Z"
              />
            </svg>
            <h2>Access Control</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
