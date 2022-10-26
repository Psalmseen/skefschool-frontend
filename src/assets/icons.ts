import { html } from 'lit';

export const getEye = (color = '#fff', width = 20) => html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width=${width}
    height=${0.7 * width}
    viewBox="0 0 20 13.636"
  >
    <g
      id="visibility_2_"
      data-name="visibility (2)"
      transform="translate(0 -74.667)"
    >
      <g id="Group_2523" data-name="Group 2523" transform="translate(0 74.667)">
        <g id="Group_2522" data-name="Group 2522">
          <path
            d="M173.394,170.667a2.727,2.727,0,1,0,2.727,2.727A2.729,2.729,0,0,0,173.394,170.667Z"
            transform="translate(-163.394 -166.576)"
            fill=${color}
          />
          <path
            d="M10,74.667A10.752,10.752,0,0,0,0,81.485a10.742,10.742,0,0,0,20,0A10.747,10.747,0,0,0,10,74.667Zm0,11.364a4.545,4.545,0,1,1,4.545-4.545A4.547,4.547,0,0,1,10,86.031Z"
            transform="translate(0 -74.667)"
            fill=${color}
          />
        </g>
      </g>
    </g>
  </svg>
`;

export const getEyeClosed = (color = '#fff', width = 16) => html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width=${width}
    height=${0.85 * width}
    viewBox="0 0 20 17.269"
  >
    <g transform="translate(0 -32.053)">
      <g id="Group_2563" data-name="Group 2563" transform="translate(0 32.053)">
        <g id="Group_2562" data-name="Group 2562" transform="translate(0 0)">
          <path
            id="Path_915"
            data-name="Path 915"
            d="M231.147,160.067l2.863,2.863.014-.15a2.729,2.729,0,0,0-2.727-2.727Z"
            transform="translate(-221.299 -154.6)"
            fill=${color}
          />
          <path
            id="Path_916"
            data-name="Path 916"
            d="M153.277,66.326a4.546,4.546,0,0,1,4.544,4.544,4.474,4.474,0,0,1-.323,1.659l2.658,2.658a10.794,10.794,0,0,0,3.122-4.317,10.755,10.755,0,0,0-10-6.817,10.629,10.629,0,0,0-3.622.636l1.963,1.959A4.567,4.567,0,0,1,153.277,66.326Z"
            transform="translate(-143.279 -62.691)"
            fill=${color}
          />
          <path
            id="Path_917"
            data-name="Path 917"
            d="M.909,33.212l2.072,2.072.414.414A10.765,10.765,0,0,0,0,40.233a10.737,10.737,0,0,0,13.983,6.049l.386.386,2.649,2.654,1.159-1.154L2.068,32.053Zm5.026,5.022,1.4,1.4a2.88,2.88,0,0,0-.068.6A2.729,2.729,0,0,0,10,42.96a2.8,2.8,0,0,0,.591-.068l1.4,1.4a4.471,4.471,0,0,1-2,.482,4.515,4.515,0,0,1-4.063-6.544Z"
            transform="translate(0 -32.053)"
            fill=${color}
          />
        </g>
      </g>
    </g>
  </svg>
`;
