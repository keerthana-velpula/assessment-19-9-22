import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea, CardActions } from "@mui/material";


const home = () => {
  return (
    <>
      <Typography variant="h3"> Home Page </Typography> <br />
      <Box>
        <Card
          sx={{ maxWidth: 400, height: 420, borderRadius: 4, marginLeft: 66 }}
        >
          <CardActionArea>
            <CardContent
              sx={{
                marginTop: 10,
              }}
            >
              <Typography gutterBottom variant="body1">
                Hey! Google Translate is a multilingual neural machine translation service developed by Google to translate text, documents and websites from one language into another. 
                It offers a website interface, a mobile app for Android and iOS, and an API that helps developers build browser extensions and software applications. 
                Thank you for choosing us. Have a great day!
                Enjoy!!!!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
                size="medium"
                sx={{
                  borderRadius: "10px",
                  marginLeft: "40%",
                  marginTop: "15%",
                  color: "white",
                  background:
                    "linear-gradient(283.95deg, #0049C6 -12.57%, #CDF4FF 126.88%)",
                }}
              >
               Next
              </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default home;
