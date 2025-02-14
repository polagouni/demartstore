import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();
  const shipppingMethod= localStorage.getItem("shipppingMethod");
  console.log("items ", item,order,order.orderStatus);
  console.log("show price is", order);
  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            onClick={() => navigate(`/account/order/${order?.id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product.imageUrl}
              alt=""
            />
            <div className="ml-5">
            {item?.product.title} {order.totalItem > 1 ? `+ ${order.totalItem - 1} more items in this order` : ""}
              <p className="opacity-50 text-xs font-semibold space-x-5">
                {/*<span>Size: {item?.size}</span>*/}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
        {shipppingMethod === "shipToHome" ? (
                    <span className="text-green-700">${order?.totalDiscountedPrice + 5}</span>
                  ) : (
                    <span className="text-green-700">${order?.totalDiscountedPrice}</span>
                  )}
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED"? (
             <>
             <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Nov 28, 2023</span>

            </>
            ):  <>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery in one hour</span>
              </>}
            
          </p>
          {item.orderStatus === "DELIVERED" && (
            <div
              onClick={() => navigate(`/account/rate/{id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <span>Yout item has been delivered</span>
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
