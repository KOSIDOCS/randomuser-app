import React from "react";
import styled from "styled-components";
import { darken } from "polished";

function Baner() {
  setTimeout(
    () => (document.getElementById("barn").style.display = "none"),
    3000
  );

  return (
    <Barnner id="barn">
      Hover over the card to see the effect. Refresh to see more people
    </Barnner>
  );
}

const Barnner = styled.div`
  background: #fff;
  width: 400px;
  font-weight: 900;
  font-size: 1.3em;
  color: ${darken(0.3, "#999384")};
  margin: 20px auto;
  padding: 10px 0px 10px 0px;
  border-radius: 5px;
  text-align: center;
`;
export default Baner;
