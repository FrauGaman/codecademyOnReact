import React from 'react';

function Icons(props) {
  if (props.iconId === "proIcon") {
    return (
      <svg height="30"
           viewBox="0 0 95 40" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" fillRule="evenodd">
          <path d="m0 0h74v40h-74zm78 34h17v6h-17z" fill="currentColor"></path>
          <path
            d="m13.971 23.67v6.82h-3.971v-20.145h6.82c4.749 0 7.253 2.965 7.253 6.62 0 3.625-2.504 6.705-7.253 6.705zm2.245-9.871h-2.245v6.446h2.245c2.187 0 3.77-1.036 3.77-3.28 0-2.245-1.583-3.166-3.77-3.166zm21.518 16.691-4.46-7.741h-2.821v7.741h-4v-20.145h7.568c4.404 0 6.994 2.62 6.994 6.13 0 1.9-.777 4.317-3.828 5.526l5.151 8.49h-4.604zm-.72-13.986c0-1.784-1.295-2.705-3.51-2.705h-3.051v5.468h3.05c2.216 0 3.511-1.036 3.511-2.763zm16.453-6.504c5.843 0 10.533 4.346 10.533 10.418s-4.69 10.417-10.533 10.417c-5.842 0-10.533-4.345-10.533-10.417s4.691-10.418 10.533-10.418zm0 17.152c3.799 0 6.36-2.878 6.36-6.734 0-3.857-2.561-6.734-6.36-6.734s-6.36 2.877-6.36 6.734c0 3.856 2.561 6.734 6.36 6.734z"
            fill="#fff"></path>
        </g>
      </svg>
    )
  } else if (props.iconId === "searchIcon") {
    return (
      <svg fill="currentColor" height={props.height} version="1.1" viewBox="0 0 24 24" width={props.width}
           xmlns="http://www.w3.org/2000/svg">
        <title>Search Icon</title>
        <path fill={props.color}
              d="M9.583 2a7.583 7.583 0 0 1 7.584 7.583 7.601 7.601 0 0 1-1.82 4.935l.315.315h.921l5.834 5.834-1.75 1.75-5.834-5.834v-.921l-.315-.315a7.601 7.601 0 0 1-4.935 1.82A7.583 7.583 0 0 1 9.583 2zm0 2.333a5.228 5.228 0 0 0-5.25 5.25 5.228 5.228 0 0 0 5.25 5.25 5.228 5.228 0 0 0 5.25-5.25 5.228 5.228 0 0 0-5.25-5.25z"
              fillRule="nonzero">
        </path>
      </svg>
    )
  } else if (props.iconId === 3) {
    return (
      <svg fill="currentColor" height="24" version="1.1" viewBox="0 0 24 24" width="24"
           xmlns="http://www.w3.org/2000/svg">
        <g fillRule="nonzero">
          <path d="M20 11v2H4v-2zM20 17v2H4v-2zM20 5v2H4V5z"></path>
        </g>
      </svg>
    )
  } else if (props.iconId === 4) {
    return (
      <svg fill="currentColor" height="24" version="1.1" viewBox="0 0 24 24" width="24"
           xmlns="http://www.w3.org/2000/svg">
        <g fillRule="nonzero">
          <path d="M19.778 18.364l-1.414 1.414L4.222 5.636l1.414-1.414z"></path>
          <path d="M5.636 19.778l-1.414-1.414L18.364 4.222l1.414 1.414z"></path>
        </g>
      </svg>
    )
  }
}

export default Icons