export function CardBottomContainer() {
  return (
    <svg
      className="absolute -bottom-4 lg:-bottom-8 right-0 z-0 w-1/2 h-auto "
      width="100%"
      viewBox="0 0 228 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M228 0V28c0 5.5-4.5 10-10 10H46c-3 0-5.8-1.3-7.7-3.7L13.2 3.7C11.3 1.3 8.5 0 5.5 0H228 0s0 0 228 0z"
        fill="var(--color-soft)"
      ></path>
    </svg>
  );
}

export function CardTopContainer() {
  return (
    <svg
      width="100%"
      viewBox="0 0 1676 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 114V39C0 17.369 17.6046 -0.129741 39.2352 0.000724822L635.269 3.59572C647.389 3.66882 658.786 9.37287 666.11 19.0307L726.418 98.5643C733.791 108.288 745.291 114 757.494 114H1637C1658.54 114 1676 131.461 1676 153V175C1676 196.539 1658.54 214 1637 214H39C17.4609 214 0 196.539 0 175V147.803V114Z"
        fill="var(--soft)"
      ></path>
    </svg>
  );
}

export function FullCard() {
  return (
    <svg
      width="100%"
      viewBox="0 0 646 774"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 684.399V139.193C1 130.696 4.60338 122.597 10.9153 116.908L65.9395 67.3161C71.4502 62.3494 78.6057 59.6007 86.0243 59.6007H292.91C302.121 59.6007 310.821 55.3696 316.508 48.1245L344.492 12.4762C350.179 5.23105 358.879 1 368.09 1H615C631.569 1 645 14.4314 645 31V743C645 759.569 631.569 773 615 773H368.09C358.879 773 350.179 768.769 344.492 761.524L316.508 725.876C310.821 718.63 302.121 714.399 292.91 714.399H31C14.4315 714.399 1 700.968 1 684.399Z"
        stroke="var(--line-color)"
      ></path>
    </svg>
  );
}

export function NavbarContainer() {
  return (
    <svg
      className="absolute w-full h-20 lg:max-h-12 lg:left-1/2 lg:-translate-x-1/2 z-1 lg:-top-2 pointer-events-none hidden lg:block"
      width="100%"
      viewBox="0 0 879 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M879 0H442h-4H0L33.509 31.6009 78.566 75.3991C86.219 82.8382 96.471 87 107.144 87H438h4H772.86c10.67 0 20.92-4.1618 28.57-11.6009L879 0Z"
        fill="var(--color-white)"
      ></path>
    </svg>
  );
}
export function NavbarContainerRounded() {
  return (
    <svg
      className="absolute h-20 w-20  z-1 top-0 left-0 pointer-events-none hidden max-lg:block"
      width="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88 15V77c0 6-3 10-14 10H60 25C7 87 0 85 0 100V0H95h4C95 0 88 0 88 10Z"
        fill="var(--color-white)"
      ></path>
    </svg>
  );
}
export function ProfileImageContainer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 1815.5"
      className="w-full h-auto"
    >
      {/* --- 1st Clip --- */}
      <defs>
        <path
          id="clipPath1"
          d="M1345.9,8.1H509.7c-13.2,0-26.1,4.5-36.4,12.8l-44.7,35.9c-13.7,11-21.7,27.7-21.7,45.3v312.4
            c0,15.7,6.4,30.8,17.6,41.7l47.8,46.4c10.8,10.5,25.4,16.4,40.5,16.4h423.8c14.9,0,29.3,5.7,40.1,16l326.4,311
            c10.8,10.3,25.2,16,40.1,16h191.6c15.4,0,30.2-6.1,41.1-17l7.1-7.1c10.9-10.9,17-25.7,17-41.1V262.2c0-15.4-6.1-30.2-17-41.1
            l-196-196C1376.1,14.2,1361.3,8.1,1345.9,8.1z"
        />
      </defs>
      <clipPath id="clip1">
        <use href="#clipPath1" />
      </clipPath>
      <g style={{ clipPath: "url(#clip1)" }}>
        <image
          href="https://cdn.shopify.com/s/files/1/0724/3025/6436/files/vw_face.png?v=1677891513"
          width="1600"
          height="1815"
          transform="matrix(1 0 0 1 3 0.7698)"
        />
      </g>

      {/* --- 2nd Clip --- */}
      <defs>
        <path
          id="clipPath2"
          d="M344.6,51.6L310.1,17C299.2,6.1,284.4,0,269,0H92.7C77.3,0,62.5,6.1,51.6,17L17,51.6C6.1,62.5,0,77.3,0,92.7
            v596.9c0,15.4,6.1,30.2,17,41.1l1067.9,1067.9c10.9,10.9,25.7,17,41.1,17h358.7c15.4,0,30.2-6.1,41.1-17l49.1-49.1
            c10.9-10.9,17-25.7,17-41.1v-476.6c0-15.4-6.1-30.2-17-41.1L960.7,576.5c-10.9-10.9-25.7-17-41.1-17H446.3
            c-15.4,0-30.2-6.1-41.1-17L378.7,516c-10.9-10.9-17-25.7-17-41.1V92.7C361.7,77.3,355.5,62.5,344.6,51.6z"
        />
      </defs>
      <clipPath id="clip2">
        <use href="#clipPath2" />
      </clipPath>
      <g style={{ clipPath: "url(#clip2)" }}>
        <image
          href="https://cdn.shopify.com/s/files/1/0724/3025/6436/files/vw_face.png?v=1677891513"
          width="1600"
          height="1815"
          transform="matrix(1 0 0 1 3 0.7698)"
        />
      </g>

      {/* --- 3rd Clip --- */}
      <defs>
        <path
          id="clipPath3"
          d="M0.3,1657.1V973.2c0-14.4,5.4-28.4,15.1-39l38-41.9c6.3-6.9,15.2-10.9,24.6-10.9c8.7,0,17,3.4,23.2,9.5
            L942,1715c11.2,10.9,17.4,25.9,17.4,41.5v9.7c0,12.8-5.1,25.1-14.1,34.1s-21.3,14.1-34.1,14.1H164.5c-14.7,0-28.9-5.6-39.7-15.7
            l-106.1-99.1C6.9,1688.6,0.3,1673.2,0.3,1657.1z"
        />
      </defs>
      <clipPath id="clip3">
        <use href="#clipPath3" />
      </clipPath>
      <g style={{ clipPath: "url(#clip3)" }}>
        <image
          href="https://cdn.shopify.com/s/files/1/0724/3025/6436/files/vw_face.png?v=1677891513"
          width="1600"
          height="1815"
          transform="matrix(1 0 0 1 3 0.7698)"
        />
      </g>
    </svg>
  );
}

export function WebsiteLogo() {
  return (
    <svg
      className="h-8 w-8 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 480"
      fill="none"
    >
      <path
        d="M409.7 310.3 480 240l-70.3-70.3V70.3h-99.4L240 0l-70.3 70.3H70.3v99.4L0 240l70.3 70.3v99.4h99.4L240 480l70.3-70.3h99.4v-99.4z"
        fill="var(--color-bg)"
      ></path>
    </svg>
  );
}
export function ListIcon() {
  return (
    <svg
      className="h-8 w-8"
      width="100%"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect
        x="0.31298"
        y="0.31298"
        width="24.374"
        height="22.374"
        rx="4.68702"
        stroke="var(--color-line-color-soft)"
        strokeWidth="0.625961"
        fill="var(--color-soft)"
      ></rect> */}
      <path
        d="M0 0H25"
        stroke="var(--color-color)"
        strokeWidth="1.28583"
      ></path>
      <path
        d="M5 6.676H20"
        stroke="var(--color-color)"
        strokeWidth="1.28583"
      ></path>
      <path
        d="M0 11.676H25"
        stroke="var(--color-color)"
        strokeWidth="1.28583"
      ></path>
      <path
        d="M5 17.676H20"
        stroke="var(--color-color)"
        strokeWidth="1.28583"
      ></path>
      <path
        d="M0 23H25"
        stroke="var(--color-color)"
        strokeWidth="1.28583"
      ></path>
    </svg>
  );
}
