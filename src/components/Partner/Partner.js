import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import "./partner.scss";
const Partner = () => {
  return (
    <div id="partner-view">
      <Zoom in={true}>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ margin: "2rem 0" }}>
            <p>Our Partners</p>
          </Box>
          <Box
            sx={{
              margin: "2rem 0",
              display: "flex",
              justifyContent: "space-around",
            }}
          ></Box>
        </Box>
      </Zoom>
    </div>
  );
};

export default Partner;
