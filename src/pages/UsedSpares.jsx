import {
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "@windmill/react-ui";
import { useContext, useState } from "react";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
import { useTranslation } from "react-i18next";
// internal imports
import { SidebarContext } from "@/context/SidebarContext";
import UsedSparePartServices from "@/services/UsedSparesServices";
import useAsync from "@/hooks/useAsync";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import useFilter from "@/hooks/useFilter";
import PageTitle from "@/components/Typography/PageTitle";
import DeleteModal from "@/components/modal/DeleteModal";
import BulkActionDrawer from "@/components/drawer/BulkActionDrawer";
import MainDrawer from "@/components/drawer/MainDrawer";
import UsedSparePartDrawer from "@/components/drawer/UsedSparesDrawer";
import TableLoading from "@/components/preloader/TableLoading";
import CheckBox from "@/components/form/others/CheckBox";
import UsedSparePartsTable from "@/components/useedSpares/UsedSparesTable";
import NotFound from "@/components/table/NotFound";
import UploadMany from "@/components/common/UploadMany";
import AnimatedContent from "@/components/common/AnimatedContent";

const UsedSpares = () => {
  const { t } = useTranslation();
  const { toggleDrawer } = useContext(SidebarContext);
  const { data, loading, error } = useAsync(UsedSparePartServices.getAllUsedParts);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const { allId, serviceId, handleDeleteMany, handleUpdateMany } = useToggleDrawer();

  const {
    filename,
    isDisabled,
    couponRef,
    dataTable,
    serviceData,
    totalResults,
    resultsPerPage,
    handleChangePage,
    handleSelectFile,
    setSearchCoupon,
    handleSubmitCoupon,
    handleUploadMultiple,
    handleRemoveSelectFile,
  } = useFilter(data);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.map((li) => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleResetField = () => {
    setSearchCoupon("");
    couponRef.current.value = "";
  };

  return (
    <>
      <PageTitle>{t("UsedSparePartsPageTitle")}</PageTitle>

      <DeleteModal ids={allId} setIsCheck={setIsCheck} title="Selected Spare Part" />
      <BulkActionDrawer ids={allId} title="Used Spare Parts" />

      <MainDrawer>
        <UsedSparePartDrawer id={serviceId} />
      </MainDrawer>

      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody>
            <form onSubmit={handleSubmitCoupon} className="py-3 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
              <div className="flex justify-start xl:w-1/2 md:w-full">
                <UploadMany
                  title="Used Spare Part"
                  exportData={data}
                  filename={filename}
                  isDisabled={isDisabled}
                  handleSelectFile={handleSelectFile}
                  handleUploadMultiple={handleUploadMultiple}
                  handleRemoveSelectFile={handleRemoveSelectFile}
                />
              </div>
              <div className="lg:flex md:flex xl:justify-end xl:w-1/2 md:w-full md:justify-start flex-grow-0">
                <div className="w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0">
                  <Button
                    disabled={isCheck.length < 1}
                    onClick={() => handleUpdateMany(isCheck)}
                    className="w-full rounded-md h-12 btn-gray text-gray-600"
                  >
                    <span className="mr-2">
                      <FiEdit />
                    </span>
                    {t("BulkAction")}
                  </Button>
                </div>
                <div className="w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0">
                  <Button
                    disabled={isCheck.length < 1}
                    onClick={() => handleDeleteMany(isCheck)}
                    className="w-full rounded-md h-12 bg-red-500 btn-red"
                  >
                    <span className="mr-2">
                      <FiTrash2 />
                    </span>
                    {t("Delete")}
                  </Button>
                </div>
                <div className="w-full md:w-48 lg:w-48 xl:w-48">
                  <Button onClick={toggleDrawer} className="w-full rounded-md h-12">
                    <span className="mr-2">
                      <FiPlus />
                    </span>
                    {t("AddUsedSparePartBtn")}
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>

        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody>
            <form onSubmit={handleSubmitCoupon} className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Input ref={couponRef} type="search" placeholder={t("SearchUsedSparePart")} />
              </div>
              <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <div className="w-full mx-1">
                  <Button type="submit" className="h-12 w-full bg-emerald-700">
                    Filter
                  </Button>
                </div>
                <div className="w-full mx-1">
                  <Button
                    layout="outline"
                    onClick={handleResetField}
                    type="reset"
                    className="px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700"
                  >
                    <span className="text-black dark:text-gray-200">Reset</span>
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </AnimatedContent>

      {loading ? (
        <TableLoading row={12} col={8} width={140} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>
                  <CheckBox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                  />
                </TableCell>
                <TableCell>{t("SpareTblTitle")}</TableCell>
                <TableCell>{t("SpareTblCategory")}</TableCell>
                <TableCell>{t("SpareTblVehicleType")}</TableCell>
                <TableCell>{t("SpareTblGrade")}</TableCell>
                <TableCell>{t("SpareTblCondition")}</TableCell>
                <TableCell>{t("SpareTblPrice")}</TableCell>
                <TableCell>{t("SpareTblStock")}</TableCell>
                <TableCell className="text-center">{t("SpareTblPublished")}</TableCell>
                <TableCell>{t("SpareTblUpdatedDate")}</TableCell>
                <TableCell>{t("SpareTblStatus")}</TableCell>
                <TableCell className="text-right">{t("SpareTblActions")}</TableCell>
              </tr>
            </TableHeader>
            <UsedSparePartsTable isCheck={isCheck} spares={dataTable} setIsCheck={setIsCheck} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no used spare parts right now." />
      )}
    </>
  );
};

export default UsedSpares;
