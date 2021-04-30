import "./header.css";

// Header of the Application

const bell = (
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
      d="M27 23.625V16.125C27 11.52 24.555 7.665 20.25 6.645V5.625C20.25 4.38 19.245 3.375 18 3.375C16.755 3.375 15.75 4.38 15.75 5.625V6.645C11.46 7.665 9 11.505 9 16.125V23.625L6 26.625V28.125H30V26.625L27 23.625ZM18 32.625C19.65 32.625 21 31.275 21 29.625H15C15 31.275 16.35 32.625 18 32.625ZM12 25.125H24V16.125C24 12.405 21.735 9.375 18 9.375C14.265 9.375 12 12.405 12 16.125V25.125Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
);

const help = (
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
      d="M3 18C3 9.72 9.72 3 18 3C26.28 3 33 9.72 33 18C33 26.28 26.28 33 18 33C9.72 33 3 26.28 3 18ZM19.5 24V27H16.5V24H19.5ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30ZM12 15C12 11.685 14.685 9 18 9C21.315 9 24 11.685 24 15C24 16.9244 22.815 17.96 21.6611 18.9683C20.5665 19.9249 19.5 20.8569 19.5 22.5H16.5C16.5 19.7681 17.9132 18.6849 19.1557 17.7325C20.1304 16.9854 21 16.3188 21 15C21 13.35 19.65 12 18 12C16.35 12 15 13.35 15 15H12Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
);

function Header() {
  return (
    <header>
      <a href="#" id="index">
        <img class="logo" src="images/Subtract.svg" alt="" />
        <img src="images/mYSITE.svg" alt="" />
      </a>
      <nav>
        <li>
          <a href="#">
            <img src="images/TempProfile.jpg" alt="⠀" />
            Kishore
          </a>
        </li>
        <li>
          <a href="#">{bell}</a>
        </li>
        <li>
          <a href="#">{help}</a>
        </li>
      </nav>
    </header>
  );
}

export default Header;
