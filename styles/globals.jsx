import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: auto;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        max-width: 1400px;
        height: 100%;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
      container {
        padding-right: 15px;
        padding-left: 15px;
        padding-bottom: 40px;
        margin-right: auto;
        margin-left: auto;
        display: inline-block;
        width: 100%;
      }
    `}
  />
);
