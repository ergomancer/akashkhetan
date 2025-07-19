import "./styles/Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <ul id="contactItems">
        <li>
          <a href="https://www.github.com/ergomancer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-opacity="0"
                d="M15 4.5c-0.39 -0.1 -1.33 -0.5 -3 -0.5c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5v4h6v-4c0 -0.63 0.15 -1.96 -0.5 -2.5c1.39 -0.13 2.48 -0.58 3.5 -1.5c1.02 -0.92 1.5 -2.31 1.5 -4.5c0 -1.5 -0.25 -2.5 -1 -3.5c0.29 -0.78 0.34 -2 0 -3c-1.56 0 -2.97 1.07 -3.5 1.5Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8s"
                  dur="2s"
                  values="0;0.5;0"
                  repeatCount="indefinite"
                />
              </path>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              >
                <path
                  stroke-dasharray="32"
                  stroke-dashoffset="32"
                  d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.7s"
                    values="32;0"
                  />
                </path>
                <path
                  stroke-dasharray="10"
                  stroke-dashoffset="10"
                  d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.8s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
              </g>
            </svg>
            <span>github.com/ergomancer</span>
          </a>
        </li>
        <li>
          <a href="https://www.x.com/ergomancer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.8s"
                  values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;
                M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z"
                />
                <animate
                  fill="freeze"
                  attributeName="d"
                  repeatCount="indefinite"
                  begin="0.8s"
                  dur="2s"
                  values="M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;
                M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z"
                />
              </path>
            </svg>
            <span>x.com/ergomancer</span>
          </a>
        </li>
        <li>
          <a href="mailto:akashkhetan044@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-opacity="0"
                d="M12 11l-8 -5h16l-8 5Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8s"
                  dur="2s"
                  values="0;0.5;0"
                  repeatCount="indefinite"
                />
              </path>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              >
                <path
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
                <path
                  stroke-dasharray="24"
                  stroke-dashoffset="24"
                  d="M3 6.5l9 5.5l9 -5.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="24;0"
                  />
                </path>
              </g>
            </svg>
            <span>akashkhetan044@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ergomancer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8"
                  dur="2s"
                  values="0;0.5;0"
                  repeatCount="indefinite"
                />
              </circle>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.1s"
                    dur="0.2s"
                    values="12;0"
                  />
                </path>
                <path
                  stroke-dasharray="12"
                  stroke-dashoffset="12"
                  d="M10 10v10"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.35s"
                    dur="0.2s"
                    values="12;0"
                  />
                </path>
                <path
                  stroke-dasharray="24"
                  stroke-dashoffset="24"
                  d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="24;0"
                  />
                </path>
              </g>
            </svg>
            <span>linkedin.com/in/ergomancer</span>
          </a>
        </li>
        <li>
          <a href="tel:+917003686821">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              >
                <path
                  fill="currentColor"
                  fill-opacity="0"
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.8s"
                    dur="2s"
                    values="0;0.5;0"
                    repeatCount="indefinite"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.8s"
                    values="64;0"
                  />
                  <animateTransform
                    id="lineMdPhoneCallTwotoneLoop0"
                    fill="freeze"
                    attributeName="transform"
                    begin="0.8s;lineMdPhoneCallTwotoneLoop0.begin+2s"
                    dur="2s"
                    type="rotate"
                    values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                  />
                </path>
                <path
                  stroke-dasharray="4"
                  stroke-dashoffset="4"
                  d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="lineMdPhoneCallTwotoneLoop0.begin+0s"
                    dur="1.75s"
                    keyTimes="0;0.111;0.259;0.37;1"
                    values="4;0;0;4;4"
                  />
                </path>
                <path
                  stroke-dasharray="6"
                  stroke-dashoffset="6"
                  d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="lineMdPhoneCallTwotoneLoop0.begin+0.25s"
                    dur="1.75s"
                    keyTimes="0;0.074;0.185;0.333;0.444;1"
                    values="6;6;0;0;6;6"
                  />
                </path>
              </g>
            </svg>
            <span>+91-7003686821</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
