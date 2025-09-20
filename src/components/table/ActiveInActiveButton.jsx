// import React, { useContext } from "react";
// import Switch from "react-switch";

// //internal import
// import useGetCData from "@/hooks/useGetCData";
// import AdminServices from "@/services/AdminServices";
// import { SidebarContext } from "@/context/SidebarContext";
// import { notifyError, notifySuccess } from "@/utils/toast";

// const ActiveInActiveButton = ({ id, status, option, staff }) => {
//   const { setIsUpdate } = useContext(SidebarContext);
//   const { role } = useGetCData();
//   const handleChangeStatus = async (id, staff) => {
//     // return notifyError("This option disabled for this option!");
//     if (!(role === "Super Admin" || role === "Admin"))
//       return notifyError(
//         "Only Super Admin and Admin can enable/disable any staff!"
//       );
//     try {
//       let newStatus;
//       if (status === "Active") {
//         newStatus = "Inactive";
//       } else {
//         newStatus = "Active";
//       }
//       const res = await AdminServices.updateStaffStatus(id, {
//         status: newStatus,
//       });
//       setIsUpdate(true);
//       notifySuccess(res.message);
//       return;
//     } catch (err) {
//       notifyError(err ? err?.response?.data?.message : err?.message);
//     }
//   };

//   return (
//     <>
//       <Switch
//         onChange={() => handleChangeStatus(id, staff)}
//         checked={status === "Active" ? true : false}
//         className="react-switch md:ml-0"
//         uncheckedIcon={
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               height: "100%",
//               width: 120,
//               fontSize: 14,
//               color: "white",
//               paddingRight: 22,
//               paddingTop: 1,
//             }}
//           ></div>
//         }
//         width={30}
//         height={15}
//         handleDiameter={13}
//         offColor="#E53E3E"
//         onColor={"#2F855A"}
//         checkedIcon={
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               width: 73,
//               height: "100%",
//               fontSize: 14,
//               color: "white",
//               paddingLeft: 20,
//               paddingTop: 1,
//             }}
//           ></div>
//         }
//       />
//     </>
//   );
// };

// export default ActiveInActiveButton;


import React, { useContext } from "react";
import Switch from "react-switch";

// internal imports
import useGetCData from "@/hooks/useGetCData";
import AdminServices from "@/services/AdminServices";
import { SidebarContext } from "@/context/SidebarContext";
import { notifyError, notifySuccess } from "@/utils/toast";

const ActiveInActiveButton = ({ id, status, option, staff }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const { role } = useGetCData();

  const handleChangeStatus = async (id, staff) => {
    if (!(role === "Super Admin" || role === "Admin"))
      return notifyError(
        "Only Super Admin and Admin can change status!"
      );

    try {
      let newStatus;

      if (option === "staff") {
        // Staff can toggle Active/Inactive
        newStatus = status === "Active" ? "Inactive" : "Active";
        const res = await AdminServices.updateStaffStatus(id, { status: newStatus });
        setIsUpdate(true);
        notifySuccess(res.message);
      } else if (option === "vendor") {
        // Vendor can have multiple statuses
        // For example: Active / Pending / Blocked / Failed Delivery / Cancelled
        if (status === "active") newStatus = "blocked";
        else if (status === "blocked") newStatus = "active";
        else newStatus = "active"; // default fallback

        const res = await AdminServices.updateVendor(id, { status: newStatus });
        setIsUpdate(true);
        notifySuccess(res.message || `Vendor status updated to ${newStatus}`);
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message);
    }
  };

  return (
    <Switch
      onChange={() => handleChangeStatus(id, staff)}
      checked={status === "Active" || status === "active"}
      className="react-switch md:ml-0"
      width={30}
      height={15}
      handleDiameter={13}
      offColor="#E53E3E"
      onColor="#2F855A"
      checkedIcon={<div />}
      uncheckedIcon={<div />}
    />
  );
};

export default ActiveInActiveButton;
