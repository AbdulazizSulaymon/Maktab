import styled from "styled-components";
import colors from "../../styles/colors";

const LayoutWrapper = styled.section`
${(props) => {
  //   return props.dark ? "black !important" : "white  !important";
  return (
    (props.dark &&
      `.MuiDrawer-paper, .topToolbar, th{
    background-color: ${colors.darkBg} !important;
    color: white;
    svg, span{
        color: white ;
    }
    }};
  }
  
  main{
    background-color: #171b20 !important;
    color: white !important;
    min-height: 100vh;
  }

  tbody{
      td{
          color: white;
      }
      tr:nth-child(1n){
          td{
            background-color: #171b20 !important;
          }
      }
      tr:nth-child(2n){
          td{
            background-color: ${colors.darkBg} !important;
          }
      }
  }
  tfoot{
    background-color: ${colors.darkBg} !important;
    p, div, svg, span{
        color: white !important;
    }
  }

  button{
      border-color: white !important;
      color: white !important;
  }
  `) ||
    ""
  );
}};}

  
`;

export default LayoutWrapper;
