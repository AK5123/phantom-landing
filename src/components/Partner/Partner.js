import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import { ReactComponent as Olympus } from "../../assets/icons/olympus.svg";
import { ReactComponent as Frax } from "../../assets/icons/frax.svg";
import { ReactComponent as Spirit } from "../../assets/icons/spiritswap.svg";

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
              width: "100%",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Olympus height={70} width={250} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Frax height={104} width={104} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Spirit height={163} width={139} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Zoom>
    </div>
  );
};

export default Partner;
