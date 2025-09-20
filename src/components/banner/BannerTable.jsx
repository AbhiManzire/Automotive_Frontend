import {
  Avatar,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import CheckBox from "@/components/form/others/CheckBox";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import MainDrawer from "@/components/drawer/MainDrawer";
import BannerDrawer from "@/components/drawer/BannerDrawer";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButton";

const BannerTable = ({ data, isCheck, setIsCheck }) => {
  const { t } = useTranslation();
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setIsCheck([...isCheck, id]);
    } else {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck?.length < 1 && (
        <DeleteModal id={serviceId} title="Banner" />
      )}

      <MainDrawer>
        <BannerDrawer id={serviceId} data={data} />
      </MainDrawer>

      <TableBody>
        {data?.map((banner) => (
          <TableRow key={banner._id}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name="banner"
                id={banner._id}
                handleClick={handleClick}
                isChecked={isCheck.includes(banner._id)}
              />
            </TableCell>
            <TableCell className="font-medium text-sm">
              {banner?.title}
            </TableCell>
            <TableCell className="text-sm">
              {banner?.description}
            </TableCell>
            <TableCell className="text-sm">
              <a
                href={banner?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {banner?.link}
              </a>
            </TableCell>
            <TableCell>
              <Avatar
                src={
                  banner?.imageUrl ||
                  "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                }
                alt="banner"
                className="bg-gray-100 p-1"
              />
            </TableCell>
            <TableCell className="text-center">
              <ShowHideButton
                id={banner._id}
                status={banner.status}
                banner // distinguish inside ShowHideButton
              />
            </TableCell>
            <TableCell className="text-right">
              <EditDeleteButton
                id={banner._id}
                parent={banner}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={banner.title}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default BannerTable;
