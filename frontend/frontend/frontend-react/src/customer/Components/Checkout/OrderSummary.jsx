import React from "react";
import { Badge, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";
import { createPayment } from "../../../Redux/Customers/Payment/Action";
import SucSound from "../../../Audio/success.mp3";

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
const orderId = searchParams.get("order_id");
const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const shipppingMethod= localStorage.getItem("shipppingMethod");
  const promoValue= localStorage.getItem("promoCode");


  const {order}=useSelector(state=>state)

console.log("orderId ", order.order)

useEffect(()=>{
  
  dispatch(getOrderById(orderId))
},[orderId])

const handleCreatePayment=()=>{
  new Audio(SucSound).play()
  const data={orderId:order.order?.id,jwt}
  const str = "/payment/"+orderId;
  navigate(str)
  //dispatch(createPayment(data))
}

  

  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard address={order.order?.shippingAddress}/>
        </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 ">
          <div className=" space-y-3">
            {order.order?.orderItems.map((item) => (
              <>
                <CartItem item={item} showButton={false}/>
              </>
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price ({order.order?.totalItem} item)</span>
                <span>${order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-${order.order?.discounte}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                {shipppingMethod === "shipToHome" ? (
                    <span className="text-green-700">$5</span>
                  ) : (
                    <span className="text-green-700">FREE</span>
                  )}
              </div>
              <div className="flex justify-between">
              <span>Promo Discount Applied</span>
                  {promoValue === "blackfriday" ? (
                    <span className="text-green-700">$5</span>
                  ) : (
                    <span className="text-green-700">$0</span>
                  )}
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
                  {shipppingMethod === "shipToHome" ? (
                    promoValue === "blackfriday" ? (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice}</span>
                    ) : (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice + 5}</span>
                    )
                  ) : (
                    promoValue === "blackfriday" ? (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice - 5}</span>
                    ) : (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice}</span>
                    )
                  )}
              </div>
            </div>

            <Button
              onClick={handleCreatePayment}
              //onClick={()=>{play();handleCreatePayment;}}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
