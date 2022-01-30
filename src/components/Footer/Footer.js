import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as PHMIcon } from "../../assets/icons/phm.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer-view">
      <Zoom in={true}>
        <Box
          sx={{
            width: "80%",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PHMIcon /> <p>Phantom</p>
                </Box>
                <Box
                  sx={{
                    margin: "12px 0",
                    textAlign: "left",
                  }}
                >
                  <p>First community-owned web3 accelerator</p>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <div className="social-row">
                    <Link
                      href="https://twitter.com/xPhantomDAO"
                      target="_blank"
                    >
                      <SvgIcon color="primary" component={Twitter} />
                    </Link>
                    <Link
                      href="https://discord.com/invite/phantomdao"
                      target="_blank"
                    >
                      <SvgIcon color="primary" component={Discord} />
                    </Link>
                    <Link href="https://medium.com/phantom-dao" target="_blank">
                      <SvgIcon color="primary" component={Medium} />
                    </Link>
                  </div>
                </Box>
                <Box
                  sx={{
                    margin: "12px 0",
                    textAlign: "left",
                  }}
                >
                  <p>Ⓒ 2021 - Phantom all rights reserved</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={styles.footerCard}>
                  <p class="semiBold-f36">Products</p>
                </Box>
                <Box sx={styles.footerCard}>
                  <p>Bonds</p>
                </Box>
                <Box sx={styles.footerCard}>
                  <p>Staking</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={styles.footerCard}>
                  <p>Learn</p>
                </Box>
                <Box sx={styles.footerCard}>
                  <p>Documentation</p>
                </Box>
                <Box sx={styles.footerCard}>
                  <p>Medium</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={styles.footerCard}>
                  <p>Join the community</p>
                </Box>
                <Box sx={styles.footerCard}>
                  <p>Join Discord</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Zoom>
    </div>
  );
};

export default Footer;

const styles = {
  footerCard: {
    display: "flex",
    margin: "12px 0",
  },
};
