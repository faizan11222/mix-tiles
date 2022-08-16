import React, { useState } from "react";
import "./Screen2.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import TextsmsIcon from "@mui/icons-material/Textsms";
import AddIcon from "@mui/icons-material/Add";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import Cropper from "react-easy-crop";
import ImageIcon from "@mui/icons-material/Image";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
const Screen2Frame = () => {
  const filterArr = [
    {
      key: "Classic",
    },
    {
      key: "Ever",
    },
    {
      key: "Bold",
    },
    {
      key: "Clean",
    },
    {
      key: "Edge",
    },
    {
      key: "Lens",
    },
    {
      key: "Beach",
    },
  ];

  const sizesArr = [
    {
      size:'8"x 8"',
      price: "17",
      discount: "12 for $99",
      price_actual: "204"
    },
    {
      size:'8"x 11"',
      price: "23",
      discount: "9 for $155",
      price_actual: "207"
    },
    {
      size:'11"x 8"',
      price: "23",
      discount: "9 for $155",
      price_actual: "207"
    },
    {
      size:'12"x 12"',
      price: "35",
      discount: "6 for $155",
      price_actual: "300"
    },
    
  ]

  const [state, setState] = React.useState({
    left: false,
  });
  const [upload, setupload] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selectStyle, setselectStyle] = useState(false);
  const [selectSize, setselectSize] = useState(false);

  const onCropComplete = React.useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
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
    <div>
      <div className="bg-light d-flex justify-content-between align-items-center screen2_navbar ">
        <div>
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

      {selectedImage === null && (
        <div
          className="screen_2_body global_hover"
          onClick={() => setupload(!upload)}
        >
          <div className="screen_2_body_content">
            <div>
              <AddIcon className="text-primary" style={{ fontSize: "100px" }} />
            </div>
          </div>
          <div
            style={{
              bottom: "-85px",
              position: "absolute",
              textAlign: "center",
            }}
          >
            <h5 className="text-muted">Pick some photos to get started</h5>
          </div>
        </div>
      )}

      {selectedImage !== null && (
        <div className="screen_2_body global_hover">
          <div className="screen_2_body_content">
            <button
              className="btn-remove"
              onClick={() => setSelectedImage(null)}
            >
              <CancelIcon />
            </button>

            {selectedImage && (
              <div className="section_2_img_frame">
                <div className="section_2_img_frame2">
                  <Cropper
                    image={URL.createObjectURL(selectedImage)}
                    crop={crop}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                  {/* <img alt="please select the image" style={{overflow:"hidden", height:"auto", width:"100%" }} src={URL.createObjectURL(selectedImage)} /> */}
                </div>
                <br />
              </div>
            )}
          </div>
          <div
            style={{
              bottom: "-85px",
              position: "absolute",
              textAlign: "center",
            }}
          ></div>
        </div>
      )}

      {
        selectedImage !== null &&(
          <div >
            <button className="add_more_imgs"><AddIcon fontSize="large" /></button>
          </div>
        )
      }

      {selectedImage === null && upload && (
        <div className="screen2_upload_section">
          <div class="list-group  list_style">
            <label class="list-group-item">
              <CameraAltIcon
                className="text-primary mx-2 my-2"
                fontSize="large"
              />
              <input
                type="file"
                class="custom-file-input"
                onChange={(event) => {
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </label>
            <label class="list-group-item">
              <InstagramIcon
                className="text-primary mx-2 my-2"
                fontSize="large"
              />
              Import from Facebook
            </label>
            <label class="list-group-item">
              <FacebookIcon
                className="text-primary mx-2 my-2"
                fontSize="large"
              />
              Import from Instagram
            </label>
          </div>
        </div>
      )}

      {/* =========================================Chunk============================================= */}
      {/* Select style btn */}
      {selectedImage !== null && upload && (
        <div className="screen_2_editing_section d-flex justify-content-between">
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              style={{ backgroundColor: "#FEFFFF" }}
            >
              <ImageIcon fontSize="medium" />{" "}
              <span
                className="mx-2 fw-bold"
                onClick={() => setselectStyle(true)}
              >
                Classic
              </span>
            </button>
          </div>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              style={{ backgroundColor: "#FEFFFF" }}
              onClick={()=> setselectSize(true)}
            >
              <AspectRatioIcon fontSize="medium" />{" "}
              <span className="mx-2 fw-bold">8"x 8"</span>
            </button>
          </div>
        </div>
      )}

      {/* =================================Select size div==================================== */}
      {selectStyle && (
        <div className="screen_2_select_filter_div container">
          <div className="d-flex justify-content-between mt-3 mx-3">
            <h6>Select Style</h6>
            <h6
              className="text-primary global_hover"
              onClick={() => setselectStyle(false)}
            >
              Done
            </h6>
          </div>
          <div className="d-flex scroll_x ">
            {filterArr.map((arr) => (
              <div className="text-center mt-3 mb-4 mx-4">
                <div className="img_filter global_hover mb-1"></div>
                <div className="fw-bold">{arr.key}</div>
              </div>
            ))}
          </div>
        </div>
      )}
{
selectSize &&(  
        <div className="screen_2_select_size_div container ">
          <div className="d-flex justify-content-between mt-3 mx-3">
            <h6>Select Size</h6>
            <h6 className="text-primary global_hover" onClick={()=> setselectSize(false)}>Done</h6>
          </div>

          <div className="d-flex scroll_x ">
{
  sizesArr.map((arr)=> (
       <div className="card mt-3 mb-3 text-primary global_hover" style={{ width: "15rem", borderRadius:"0px" }}>
          <img style={{height:"230px"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Card image cap" />
          <div className="card-body">
          <p class="card-text fw-bold" style={{margin:"0", padding:"0"}}>{arr.size}</p>
          <p class="card-text" style={{margin:"0", padding:"0"}}>{arr.price} each, {arr.discount} <del>${arr.price_actual}</del></p>
          </div>
        </div>
 ))
}

        </div>
        </div>
)
}
{/* Check out bar=============================================================== */}
{
selectedImage !== null &&(
<div className="checkOut_bar text-center">
  <button className="checkOut_btn mt-3">Checkout</button>
</div>
 )}  

    </div>

  );
};

export default Screen2Frame;
