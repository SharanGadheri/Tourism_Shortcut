import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={14}>
          <Card>
            <CardContent className="footer">
              <h3>Contact Us</h3>
              <Typography>
                <LocalPhoneIcon />
                Phone NO:- +91 123456789
              </Typography>
              <br />
              <h3>Social Media</h3>
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </CardContent>
          </Card>
          <Card></Card>
        </Grid>
      </Grid>
    </div>
  );
};
