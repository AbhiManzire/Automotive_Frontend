// import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
// import React, { useState } from "react";
// import { FiZoomIn } from "react-icons/fi";
// // internal imports
// import Status from "@/components/table/Status";
// import useUtilsFunction from "@/hooks/useUtilsFunction";
// import MainDrawer from "@/components/drawer/MainDrawer";
// import useToggleDrawer from "@/hooks/useToggleDrawer";
// import Tooltip from "@/components/tooltip/Tooltip";
// import VendorDrawer from "@/components/drawer/VendorDrawer";
// import DeleteModal from "@/components/modal/DeleteModal";
// import EditDeleteButton from "@/components/table/EditDeleteButton";
// import ActiveInActiveButton from "@/components/table/ActiveInActiveButton";
// const VendorTable = ({ vendors, lang }) => {
//   const {
//     title,
//     serviceId,
//     handleModalOpen,
//     handleUpdate,
//     isSubmitting,
//   } = useToggleDrawer();
//   const { showDateFormat, showingTranslateValue } = useUtilsFunction();
//   // State for selected vendor modal (if needed)
//   const [selectedVendor, setSelectedVendor] = useState(null);
//   return (
//     <>
//       <DeleteModal id={serviceId} title={title} />
//       <MainDrawer>
//         <VendorDrawer id={serviceId} />
//       </MainDrawer>
//       <TableBody>
//         {vendors?.map((vendor) => (
//           <TableRow key={vendor._id}>
//             <TableCell>
//               <div className="flex items-center">
//                 <Avatar
//                   className="hidden mr-3 md:block bg-gray-50"
//                   src={vendor.profileImage}
//                   alt="vendor"
//                 />
//                 <div>
//                   <h2 className="text-sm font-medium">
//                     {showingTranslateValue(vendor?.name)}
//                   </h2>
//                 </div>
//               </div>
//             </TableCell>
//             <TableCell>
//               <span className="text-sm">{vendor.email}</span>
//             </TableCell>
//             <TableCell>
//               <span className="text-sm">{vendor.mobile}</span>
//             </TableCell>
//             <TableCell className="text-center text-xs">
//               <Status status={vendor.status} />
//             </TableCell>
//             {/* <TableCell className="text-center text-sm font-medium">
//               {vendor.isOnline ? "Online" : "Offline"}
//             </TableCell> */}
//             <TableCell>
//               <div className="flex justify-between items-center">
//                 <ActiveInActiveButton
//                   id={vendor._id}
//                   staff={vendor} // can reuse the component
//                   option="vendor"
//                   status={vendor.status}
//                 />
//                 <EditDeleteButton
//                   id={vendor._id}
//                   staff={vendor}
//                   isSubmitting={isSubmitting}
//                   handleUpdate={handleUpdate}
//                   handleModalOpen={handleModalOpen}
//                   title={showingTranslateValue(vendor?.name)}
//                 />
//               </div>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </>
//   );
// };
// export default VendorTable;
// import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
// import React, { useState } from "react";
// import { FiZoomIn } from "react-icons/fi";
// // internal imports
// import Status from "@/components/table/Status";
// import useUtilsFunction from "@/hooks/useUtilsFunction";
// import MainDrawer from "@/components/drawer/MainDrawer";
// import useToggleDrawer from "@/hooks/useToggleDrawer";
// import Tooltip from "@/components/tooltip/Tooltip";
// import VendorDrawer from "@/components/drawer/VendorDrawer";
// import DeleteModal from "@/components/modal/DeleteModal";
// import EditDeleteButton from "@/components/table/EditDeleteButton";
// import ActiveInActiveButton from "@/components/table/ActiveInActiveButton";
// import AdminServices from "@/services/AdminServices";
// const VendorTable = ({ vendors, lang, onStatusChange }) => {
//   const {
//     title,
//     serviceId,
//     handleModalOpen,
//     handleUpdate,
//     isSubmitting,
//   } = useToggleDrawer();
//   const { showDateFormat, showingTranslateValue } = useUtilsFunction();
//   const [selectedVendor, setSelectedVendor] = useState(null);
//   // Allowed status options
//   const allowedStatus = [
//     "active",
//     "pending",
//     "blocked",
//     "failed deliveries",
//     "cancelled deliveries",
//   ];
//   const handleStatusUpdate = (vendorId, newStatus) => {
//     // Call parent handler or API to update status
//     if (onStatusChange) onStatusChange(vendorId, newStatus);
//   };
// // inside VendorTable component
// const handleFlagStatus = async (vendorId, newFlag) => {
//   try {
//     // Call the API
//     const response = await AdminServices.updateVendorFlag(vendorId, newFlag);
//     // Optionally, update local state if you store vendors locally
//     setVendors((prev) =>
//       prev.map((v) =>
//         v._id === vendorId ? { ...v, flagStatus: response.data.vendor.flagStatus } : v
//       )
//     );
//     console.log("Vendor flag updated:", response.data.vendor.flagStatus);
//   } catch (error) {
//     console.error("Failed to update vendor flag:", error);
//   }
// };
//   return (
//     <>
//       <DeleteModal id={serviceId} title={title} />
//       <MainDrawer>
//         <VendorDrawer id={serviceId} />
//       </MainDrawer>
// <TableBody>
//   {vendors?.map((vendor) => (
//     <TableRow key={vendor._id}>
//       {/* Name */}
//       <TableCell>
//         <div className="flex items-center">
//           <Avatar
//             className="hidden mr-3 md:block bg-gray-50"
//             src={vendor.profileImage || ""}
//             alt={vendor.name || "vendor"}
//           />
//           <div>
//             <h2 className="text-sm font-medium">{vendor.name || "No Name"}</h2>
//           </div>
//         </div>
//       </TableCell>
//       {/* Email */}
//       <TableCell>
//         <span className="text-sm">{vendor.email}</span>
//       </TableCell>
//       {/* Mobile */}
//       <TableCell>
//         <span className="text-sm">{vendor.mobile}</span>
//       </TableCell>
//       {/* Status Display (active/inactive switch) */}
//       <TableCell className="text-center text-xs">
//         <Status status={vendor.status || "pending"} />
//       </TableCell>
//       {/* Dropdown for vendor flag (red-flag, failed deliveries, blocked, etc.) */}
//     <TableCell className="text-center text-xs">
//   <select
//     value={vendor.flagStatus || ""} // fallback if undefined
//     onChange={(e) => handleFlagStatus(vendor._id, e.target.value)}
//     className={`text-sm px-2 py-1 rounded border ${
//       vendor.flagStatus === "failed deliveries" ? "bg-red-100" : ""
//     }`}
//   >
//     {allowedStatus.map((status) => (
//       <option key={status} value={status}>
//         {status}
//       </option>
//     ))}
//   </select>
// </TableCell>
//       {/* Actions */}
//       <TableCell>
//         <div className="flex justify-between items-center">
//           <ActiveInActiveButton
//             id={vendor._id}
//             staff={vendor}
//             option="vendor"
//             status={vendor.status || "pending"} // switch controls actual status
//           />
//           <EditDeleteButton
//             id={vendor._id}
//             staff={vendor}
//             isSubmitting={isSubmitting}
//             handleUpdate={handleUpdate}
//             handleModalOpen={handleModalOpen}
//             title={vendor.name || "No Name"}
//           />
//         </div>
//       </TableCell>
//     </TableRow>
//   ))}
// </TableBody>
//     </>
//   );
// };
// export default VendorTable;


import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React, { useState, useEffect } from "react";
import Status from "@/components/table/Status";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import MainDrawer from "@/components/drawer/MainDrawer";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import VendorDrawer from "@/components/drawer/VendorDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import ActiveInActiveButton from "@/components/table/ActiveInActiveButton";
import AdminServices from "@/services/AdminServices";

const VendorTable = ({ vendors: vendorsProp, lang, onStatusChange }) => {
  const {
    title,
    serviceId,
    handleModalOpen,
    handleUpdate,
    isSubmitting,
  } = useToggleDrawer();
  const { showingTranslateValue } = useUtilsFunction();

  // Local state for vendors
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    setVendors(vendorsProp || []);
  }, [vendorsProp]);

  // Allowed status options for flag
  const allowedStatus = [
    "active",
    "pending",
    "blocked",
    "failed deliveries",
    "cancelled deliveries",
  ];

  // Handler to update vendor flag
  const handleFlagStatus = async (vendorId, newFlag) => {
  try {
    const response = await AdminServices.updateVendorFlag(vendorId, { flagStatus: newFlag });

    // Update local state if needed
    // For example, if you store vendors in state:
    setVendors((prev) =>
      prev.map((v) =>
        v._id === vendorId ? { ...v, flagStatus: response.data.vendor.flagStatus } : v
      )
    );

    console.log("Vendor flag updated:", response.data.vendor.flagStatus);
  } catch (error) {
    console.error("Failed to update vendor flag:", error.response?.data || error);
  }
};

  return (
    <>
      <DeleteModal id={serviceId} title={title} />
      <MainDrawer>
        <VendorDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {vendors?.map((vendor) => (
          <TableRow key={vendor._id}>
            {/* Name */}
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden mr-3 md:block bg-gray-50"
                  src={vendor.profileImage || ""}
                  alt={vendor.name || "vendor"}
                />
                <div>
                  <h2 className="text-sm font-medium">{vendor.name || "No Name"}</h2>
                </div>
              </div>
            </TableCell>

            {/* Email */}
            <TableCell>
              <span className="text-sm">{vendor.email}</span>
            </TableCell>

            {/* Mobile */}
            <TableCell>
              <span className="text-sm">{vendor.mobile}</span>
            </TableCell>

            {/* Status Display */}
            <TableCell className="text-center text-xs">
              <Status status={vendor.status || "pending"} />
            </TableCell>

            {/* Flag Dropdown */}
            <TableCell className="text-center text-xs">
              <select
                value={vendor.flagStatus || ""}
                onChange={(e) => handleFlagStatus(vendor._id, e.target.value)}
                className={`text-sm px-2 py-1 rounded border ${
                  vendor.flagStatus === "failed deliveries" ? "bg-red-100" : ""
                }`}
              >
                {allowedStatus.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </TableCell>

            {/* Actions */}
            <TableCell>
              <div className="flex justify-between items-center">
                <ActiveInActiveButton
                  id={vendor._id}
                  staff={vendor}
                  option="vendor"
                  status={vendor.status || "pending"}
                />
                <EditDeleteButton
                  id={vendor._id}
                  staff={vendor}
                  isSubmitting={isSubmitting}
                  handleUpdate={handleUpdate}
                  handleModalOpen={handleModalOpen}
                  title={vendor.name || "No Name"}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default VendorTable;
