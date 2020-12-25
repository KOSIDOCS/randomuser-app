import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const Header = () => {
  return (
    <Wrapper>
      <Description>
        Made with{" "}
        <Used href="https://www.npmjs.com/package/react" target="_blank">
          {" "}
          React
        </Used>
        ,{" "}
        <Used href="https://www.npmjs.com/package/redux" target="_blank">
          {" "}
          Redux
        </Used>
        ,{" "}
        <Used href="https://randomuser.me/" target="_blank">
          {" "}
          randomuser.me APIs
        </Used>
        ,{" "}
        <Used
          href="https://www.npmjs.com/package/react-feather"
          target="_blank"
        >
          {" "}
          react-feather
        </Used>
        ,{" "}
        <Used
          href="https://www.npmjs.com/package/styled-component"
          target="_blank"
        >
          {" "}
          styled components
        </Used>
        ,{" "}
        <Used href="https://www.npmjs.com/package/polished" target="_blank">
          polishhed
        </Used>
        ,{" "}
        <Used href="https://www.npmjs.com/package/react-redux" target="_blank">
          react-redux
        </Used>
        ,{" "}
        <Used href="https://www.npmjs.com/package/nodemon" target="_blank">
          nodemon
        </Used>
        ,{" "}
        <Used href="https://www.npmjs.com/package/express" target="_blank">
          express
        </Used>
        ,{" "}
        <Used href="https://www.npmjs.com/package/cors" target="_blank">
          cors
        </Used>
        ,{" "}
        <Used href="https://www.npmjs.com/package/axios" target="_blank">
          axios.
        </Used>
      </Description>
      <MyLink>
        <P>
          <Link href="https://www.instagram.com/kosidocs/" target="_blank">
            Find me here
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </Link>
        </P>

        <P>
          <Link href="https://github.com/KOSIDOCS" target="_blank">
            Projects
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </Link>
        </P>

        <P>
          <Link
            href="https://www.upwork.com/services/product/react-material-ui-web-application-with-cross-platform-responsiveness-1327451407578116096?ref=fl_profile"
            target="_blank"
          >
            My market place
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </Link>
        </P>
      </MyLink>
    </Wrapper>
  );
};

const size = {
  tablet: "768px",
};

const device = {
  tablet: `(max-width: ${size.tablet})`,
};

const Wrapper = styled.header`
  color: ${darken(0.3, "#999384")};
  background: #010202;
  width: 100%;
  height: 100px;
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 30px 5px 30px;
  z-index: 30;
`;

const MyLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Description = styled(MyLink)`
  justify-content: center;

  @media ${device.tablet} {
    display: none;
  }
`;

const P = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${darken(0.3, "#999384")};
  & > a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: inherit;
    margin: 0 var(--spacing, 0px);
    transition: margin 0.25s;
    & > svg {
      /* width: 126px; */
      height: 40px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 7px) translateZ(0);
      fill: none;
      stroke: var(--stroke, var(--line));
      stroke-linecap: round;
      stroke-width: 2px;
      stroke-dasharray: var(--offset, 69px) 278px;
      stroke-dashoffset: 361px;
      transition: stroke 0.25s ease var(--stroke-delay, 0s),
        stroke-dasharray 0.35s;
    }
    &:hover {
      --spacing: 4px;
      --stroke: var(--line-active);
      --stroke-delay: 0.1s;
      --offset: 180px;
      --line: #bbc1e1;
      --line-active: #275efe;
    }
  }
`;

const Link = styled.a`
  color: ${darken(0.3, "#999384")};
  font-weight: 900;
  font-size: 1.7em;
  font-family: "Montez";
`;

const Used = styled(Link)`
  font-size: 1em;
  font-family: "Roboto";
  margin: 0px 5px 0px 5px;

  &:hover {
    cursor: pointer;
  }
`;
export default Header;
