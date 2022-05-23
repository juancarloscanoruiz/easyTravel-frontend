import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import { Avatar, Container } from "@mui/material";
import Button from "../modules/components/Button";
//import Toolbar from '../modules/components/Toolbar';
import { Box } from "@mui/system";

function Profile() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <div>
          <div>
            <Avatar
              sx={{ width: 200, height: 180, marginTop: 5 }}
              variant="square"
            />

            <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/trips"
              sx={{ minWidth: 200, padding: 0.5, marginTop: 1 }}
            >
              Change photo
            </Button>
          </div>
          <div>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/trips"
              sx={{
                minWidth: 200,
                mt: 10,
                mb: 8,
                position: "relative",

                flexDirection: "column",
              }}
            >
              My Trips
            </Button>

            <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/packages"
              sx={{ minWidth: 200, justifyContent: "space-between" }}
            >
              My Packages
            </Button>
          </div>
        </div>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Profile);
