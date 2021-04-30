import "./tabs.css";

// Tabs inside the main content (Permissions and Approval Matrix)

function Tabs() {
  return (
    <div class="tabs">
      <ul>
        <li>
          <a href="" class="active">
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
                d="M6.33008 6.33008V10.5751C16.8751 10.5751 25.4251 19.1251 25.4251 29.6701H29.6701C29.6701 16.7851 19.2151 6.33008 6.33008 6.33008ZM9.60008 23.1302C7.79411 23.1302 6.33008 24.5942 6.33008 26.4002C6.33008 28.2061 7.79411 29.6702 9.60008 29.6702C11.406 29.6702 12.8701 28.2061 12.8701 26.4002C12.8701 24.5942 11.406 23.1302 9.60008 23.1302ZM6.33008 19.0652V14.8202C14.5351 14.8202 21.1801 21.4652 21.1801 29.6702H16.9351C16.9351 23.8202 12.1801 19.0652 6.33008 19.0652Z"
                fill="#673AB7"
              />
            </svg>
            <h2>Permissions</h2>
          </a>
          <div class="underline"></div>
        </li>
        <li>
          <div class="vl"></div>
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
                d="M5.25 8.25V27.75H30.75V8.25H5.25ZM20.25 11.25V16.5H15.75V11.25H20.25ZM12.75 11.25H8.25V16.5H12.75V11.25ZM8.25 24.75V19.5H12.75V24.75H8.25ZM15.75 19.5V24.75H20.25V19.5H15.75ZM27.75 24.75H23.25V19.5H27.75V24.75ZM23.25 11.25V16.5H27.75V11.25H23.25Z"
                fill="#CFD3DA"
              />
            </svg>
            <h2>Approval Matrix</h2>
          </a>
        </li>
      </ul>
      <div className="sync">
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
            d="M1.5 18H6C6 11.37 11.37 6 18 6C20.355 6 22.545 6.69 24.39 7.86L22.2 10.05C20.955 9.375 19.515 9 18 9C13.035 9 9 13.035 9 18H13.5L7.5 24L1.5 18ZM18 27C22.965 27 27 22.965 27 18H22.5L28.5 12L34.5 18H30C30 24.63 24.63 30 18 30C15.645 30 13.455 29.31 11.61 28.14L13.8 25.95C15.045 26.625 16.485 27 18 27Z"
            fill="black"
            fill-opacity="0.54"
          />
        </svg>
        Last synced 15 mins ago
      </div>
    </div>
  );
}

export default Tabs;
