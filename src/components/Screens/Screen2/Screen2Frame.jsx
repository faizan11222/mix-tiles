import React, { useState } from "react";
import "./Screen2.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ListIcon from "@mui/icons-material/List";
import TextsmsIcon from "@mui/icons-material/Textsms";
import AddIcon from "@mui/icons-material/Add";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CancelIcon from "@mui/icons-material/Cancel";
import ClearIcon from "@mui/icons-material/Clear";
import Cropper from "react-easy-crop";
import ImageIcon from "@mui/icons-material/Image";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PaymentsIcon from "@mui/icons-material/Payments";
import App from "./Payment/App";
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
      size: '8"x 8"',
      price: "17",
      discount: "12 for $99",
      price_actual: "204",
    },
    {
      size: '8"x 11"',
      price: "23",
      discount: "9 for $155",
      price_actual: "207",
    },
    {
      size: '11"x 8"',
      price: "23",
      discount: "9 for $155",
      price_actual: "207",
    },
    {
      size: '12"x 12"',
      price: "35",
      discount: "6 for $155",
      price_actual: "300",
    },
  ];

  const [state, setState] = React.useState({
    left: false,
  });
  const [upload, setupload] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selectStyle, setselectStyle] = useState(false);
  const [selectSize, setselectSize] = useState(false);
  const [addAddressPopup, setaddAddressPopup] = useState(false);
  const [addPaymentMethodPopup, setaddPaymentMethodPopup] = useState(false);
  const [creditCardMethod, setcreditCardMethod] = useState(false);
  const [sections, setsections] = useState([]);

  const onCropComplete = React.useCallback((croppedArea, croppedAreaPixels) => {
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 440 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="container  p-3">
        <h2 className="fw-bolder mt-3 mx-3">Checkout</h2>
        <div className="check_out_list_parent">
          <ul className="list_check_out">
            <li
              className="mb-4 global_hover"
              onClick={() => setaddAddressPopup(true)}
            >
              {" "}
              <HomeIcon className="mb-1 mx-2" fontSize="medium" /> Add Address
            </li>
            <li
              className="mb-4 global_hover"
              onClick={() => setaddPaymentMethodPopup(true)}
            >
              {" "}
              <PaymentIcon className="mb-1 mx-2" fontSize="medium" /> Add
              Payment Method
            </li>
            <li className="mb-4 text-dark">
              {" "}
              <CardGiftcardIcon className="mb-1 mx-2" fontSize="medium" /> Add
              Gift Note
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <div className="mb-4 row mx-1">
            <div className="col-2 text-primary mt-1">
              <CardGiftcardIcon className="mb-1 mx-2 fs-1 " />
            </div>
            <div className="col-8">
              <p className="m-0 p-0">Promo: 12 (8”X8”) Tiles For $99</p>
              <p className="text-primary m-0 p-0">
                Add 10 tiles to get the deal!
              </p>
            </div>
            <p
              className="col-2 mt-2 text-muted "
              style={{ textDecoration: "underline" }}
            >
              cancle
            </p>
          </div>
          <hr />
          <div className="px-4">
            <div className="d-flex justify-content-between">
              <p>2 tiles,8”X8”</p>
              <p>$34</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="d-flex justify-content-between fw-bolder">
              <p>Total</p>
              <p>$34</p>
            </div>
          </div>
          <div className="p-3">
            <button className="btn btn-primary w-100  btn-lg p-2">
              Place Order
            </button>
          </div>
        </div>
      </div>
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
          <TextsmsIcon className="text-dark mx-3  " fontSize="large" />{" "}
        </div>
      </div>

      {selectedImage.length === 0 && (
        <div
          className="screen_2_body global_hover"
          onClick={() => setupload(!upload)}
        >
          <div className="screen_2_body_content">
            <div>
              <AddIcon className="text-primary " style={{ fontSize: "100px" }} />
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

      {selectedImage.length !== 0 && (
        <div>

       
       {
              selectedImage.map((a)=>(
        <div className="screen_2_body global_hover">
          
          <div className="screen_2_body_content">
            
            <button
              className="btn-remove"
              onClick={() => setSelectedImage([])}
            >
              <CancelIcon />
            </button>

            {selectedImage.length !== 0 && (
              <div>
             
              <div className="section_2_img_frame">
                
                <div className="section_2_img_frame2">
                  <Cropper
                    image={URL.createObjectURL(a)}
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
         ))}
          </div>
      )}

      {selectedImage.length !== 0 && (
        <div>
          <button className="add_more_imgs"   >
          {/* <AddIcon  /> */}
          <input
                type="file"
                class="custom-file-input2"
                onChange={(event) => {
                  setSelectedImage([...selectedImage, event.target.files[0]]);
                }}
              />
            
          </button>
        </div>
      )}

      {selectedImage.length === 0 && upload && (
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
                  setSelectedImage([...selectedImage, event.target.files[0]]);
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
      {selectedImage.length !== 0 && upload && (
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
              onClick={() => setselectSize(true)}
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
      {selectSize && (
        <div className="screen_2_select_size_div container ">
          <div className="d-flex justify-content-between mt-3 mx-3">
            <h6>Select Size</h6>
            <h6
              className="text-primary global_hover"
              onClick={() => setselectSize(false)}
            >
              Done
            </h6>
          </div>

          <div className="d-flex scroll_x ">
            {sizesArr.map((arr) => (
              <div
                className="card mt-3 mb-3 text-primary global_hover"
                style={{ width: "15rem", borderRadius: "0px" }}
              >
                <img
                  style={{ height: "230px" }}
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p
                    class="card-text fw-bold"
                    style={{ margin: "0", padding: "0" }}
                  >
                    {arr.size}
                  </p>
                  <p class="card-text" style={{ margin: "0", padding: "0" }}>
                    {arr.price} each, {arr.discount}{" "}
                    <del>${arr.price_actual}</del>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Check out bar=============================================================== */}
      {selectedImage.length !== 0 && (
        <div className="checkOut_bar text-center">
          <button className="checkOut_btn mt-3">
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  className="text-light"
                  onClick={toggleDrawer(anchor, true)}
                >
                  {" "}
                  Checkout
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
          </button>
        </div>
      )}

      {/* ===============================Chunk Checkout======================================== */}

      {/* ==============================Add Address Popup ====================================== */}
      <div>
        {addAddressPopup && (
          <div className="add_address_popup">
            <div className="d-flex justify-content-between container px-3 mt-3 fw-bolder">
              <div
                className="text-muted global_hover"
                onClick={() => setaddAddressPopup(false)}
              >
                <ClearIcon />
              </div>
              <div>Add Address</div>
              <div className="text-primary global_hover">Done</div>
            </div>
            <hr />
            <div className="mx-5  address_form px-4">
              <span>EMAIL: </span>
              <input className="" />
              <hr />
              <span>FULL NAME: </span>
              <input className="" />
              <hr />
              <span>ADDRESS: </span>
              <input className="" />
              <hr />
              <span>ADDRESS 2: </span>
              <input className="" />
              <hr />
              <span>CITY: </span>
              <input className="" />
              <hr />
              <span>STATE: </span>
              <input className="" />
              <hr />
              <span>ZIP CODE: </span>
              <input className="" />
              <hr />
              <span>COUNTRY:</span>
              <input className="" />
            </div>
          </div>
        )}
      </div>

      {/* =====================Add payment method popup================================= */}
      {addPaymentMethodPopup && (
        <div>
          <div className="add_payment_popup_parent">
            <p className="global_hover">
              <CancelIcon
                style={{
                  position: "absolute",
                  marginTop: "-18px",
                  marginLeft: "-18px",
                }}
                onClick={() => setaddPaymentMethodPopup(false)}
              />{" "}
            </p>
            <div
              className="m-4 global_hover"
              onClick={() => setcreditCardMethod(true)}
            >
              <p className="fw-bold">
                <AddIcon className="mx-3" /> Add Credit Card
              </p>
            </div>
            <hr />
            <div className="m-4 global_hover">
              <p className="fw-bold">
                <PaymentsIcon className="mx-3" />
                Use Paypal
              </p>
            </div>
          </div>
        </div>
      )}

      {creditCardMethod && (
        <div className="credit_card_popup_parent">
          <div className="d-flex justify-content-between container px-3 mt-3 fw-bolder">
            <div></div>
            <div>Card Details</div>
            <div
              className="text-primary global_hover"
              onClick={() =>
                setcreditCardMethod(false) & setaddPaymentMethodPopup(false)
              }
            >
              Done
            </div>
          </div>
          <hr />

          <div>
            <App />
          </div>
        </div>
      )}
    </div>
  );
};

export default Screen2Frame;
