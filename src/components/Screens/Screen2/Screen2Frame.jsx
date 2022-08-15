import React, {useState} from "react";
import "./Screen2.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import TextsmsIcon from "@mui/icons-material/Textsms";
import AddIcon from '@mui/icons-material/Add';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";

const Screen2Frame = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const [upload, setupload] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1>Drawer 1</h1>
    </Box>
  );
  const [state2, setState2] = React.useState({
    left: false,
  });

  const toggleDrawer2 = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState2({ ...state, [anchor]: open });
  };

  const list2 = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1>Drawer 2</h1>
    </Box>
  );

  return (
    <div  >
      <div className="bg-light d-flex justify-content-between align-items-center screen2_navbar " >
        <div >
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                {" "}
                <span>
                  <ListIcon className="text-dark " fontSize="large" />{" "}
                </span>
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <div>
          <h4>MIXTILES</h4>
        </div>
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                {" "}
                <span>
                  <TextsmsIcon className="text-dark " fontSize="large" />{" "}
                </span>
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list2(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </div>

      { selectedImage === null && (

     
      <div className="screen_2_body global_hover" onClick={()=> setupload(!upload) } >
        <div className="screen_2_body_content">
            <div><AddIcon className="text-primary" style={{fontSize:"100px"}} /></div>
        </div>
        <div style={{bottom:"-85px",position:"absolute", textAlign:"center"}}>
        <h5 className="text-muted"  >Pick some photos to get started</h5>
        </div>
      </div>
   ) }
   {
     selectedImage !== null && (
        <div className="screen_2_body global_hover">
        <div className="screen_2_body_content">
      <button className="btn-remove" onClick={()=>setSelectedImage(null)}><CancelIcon/></button>

        {selectedImage && (
        <div className="section_2_img_frame">
            <div className="section_2_img_frame2">
        <img alt="please select the image" style={{overflow:"hidden", height:"auto", width:"100%" }} src={URL.createObjectURL(selectedImage)} />
            </div>
        <br />
        </div>
      )}
        </div>
        <div style={{bottom:"-85px",position:"absolute", textAlign:"center"}}>
        </div>
      </div>
     )
   }



{
    selectedImage === null &&

        upload && (

       
      <div className="screen2_upload_section">
      <div class="list-group  list_style">
  <label class="list-group-item" >
    <CameraAltIcon className="text-primary mx-2 my-2"  fontSize="large" />
  <input type="file" class="custom-file-input" 
   onChange={(event) => {
    setSelectedImage(event.target.files[0]);
  }}
  
  
   />
  </label>
  <label class="list-group-item">
    <InstagramIcon className="text-primary mx-2 my-2"  fontSize="large"/>
    Import from Facebook
  </label>
  <label class="list-group-item">
    <FacebookIcon className="text-primary mx-2 my-2" fontSize="large"/>
    Import from Instagram
  </label>

</div>
      </div>
      ) }

<div>      
    </div>

    </div>
  );
};

export default Screen2Frame;
