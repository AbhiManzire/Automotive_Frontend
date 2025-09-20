import {
  Avatar,
  Badge,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
// internal imports
import useUtilsFunction from "@/hooks/useUtilsFunction";
import CheckBox from "@/components/form/others/CheckBox";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import MainDrawer from "@/components/drawer/MainDrawer";
import UsedSparePartDrawer from "@/components/drawer/UsedSparesDrawer";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButton";

const UsedSparePartsTable = ({ isCheck, spares, setIsCheck }) => {
  const [updatedSpares, setUpdatedSpares] = useState([]);
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const { showDateFormat } = useUtilsFunction();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setIsCheck([...isCheck, id]);
    } else {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const result = spares?.map((el) => {
      const newDate = new Date(el?.updatedAt).toLocaleString("en-US");
      return {
        ...el,
        updatedDate: newDate,
      };
    });
    setUpdatedSpares(result);
  }, [spares]);

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}
      {isCheck.length < 2 && (
        <MainDrawer>
          <UsedSparePartDrawer id={serviceId} />
        </MainDrawer>
      )}
      <TableBody>
        {updatedSpares?.map((spare, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={spare?.title}
                id={spare._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(spare._id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {spare?.image ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={spare?.image}
                    alt="spare"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="spare"
                  />
                )}
                <div>
                  <span className="text-sm">{spare?.title}</span>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{spare?.category}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{spare?.vehicleType}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{spare?.grade}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{spare?.condition}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">₹{spare?.price}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{spare?.stock}</span>
            </TableCell>

            <TableCell className="text-center">
              <ShowHideButton id={spare._id} status={spare.status} />
            </TableCell>

            <TableCell>
              <span className="text-sm">{showDateFormat(spare.updatedAt)}</span>
            </TableCell>

            <TableCell className="align-middle">
              <Badge type={spare.status === "show" ? "success" : "danger"}>
                {spare.status === "show" ? "Active" : "Hidden"}
              </Badge>
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={spare?._id}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={spare?.title}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default UsedSparePartsTable;
