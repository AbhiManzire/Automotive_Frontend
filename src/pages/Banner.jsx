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
import { useTranslation } from "react-i18next";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
// internal imports
import useAsync from "@/hooks/useAsync";
import { SidebarContext } from "@/context/SidebarContext";
import BannerServices from "@/services/BannerServices";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import useFilter from "@/hooks/useFilter";
import DeleteModal from "@/components/modal/DeleteModal";
import PageTitle from "@/components/Typography/PageTitle";
import MainDrawer from "@/components/drawer/MainDrawer";
import BannerDrawer from "@/components/drawer/BannerDrawer";
import TableLoading from "@/components/preloader/TableLoading";
import CheckBox from "@/components/form/others/CheckBox";
import BannerTable from "@/components/banner/BannerTable";
import NotFound from "@/components/table/NotFound";
import AnimatedContent from "@/components/common/AnimatedContent";
const Banner = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const { data, loading, error } = useAsync(BannerServices.getAllBanners);
  const { handleDeleteMany, allId, handleUpdateMany, serviceId } =
    useToggleDrawer();
  const { t } = useTranslation();
  const {
    handleSubmitCategory,
    categoryRef,
    totalResults,
    resultsPerPage,
    dataTable,
    handleChangePage,
  } = useFilter(data);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.map((banner) => banner._id));
    if (isCheckAll) setIsCheck([]);
  };
  const handleResetField = () => {
    categoryRef.current.value = "";
  };
  return (
    <>
      <PageTitle>{t("Banner")}</PageTitle>
      <DeleteModal ids={allId} setIsCheck={setIsCheck} />
      <MainDrawer>
        <BannerDrawer id={serviceId} data={data} />
      </MainDrawer>
      <AnimatedContent>
        <Card className="shadow-xs overflow-hidden mb-5 bg-white dark:bg-gray-800">
          <CardBody>
            <form
              onSubmit={handleSubmitCategory}
              className="py-3 grid gap-4 xl:flex"
            >
              <div className="flex-grow">
                <Input
                  ref={categoryRef}
                  type="search"
                  placeholder={t("SearchBanner")}
                />
              </div>
              <div className="flex items-center gap-2 flex-grow-0">
                <Button type="submit" className="h-12 w-full bg-emerald-700">
                  {t("Filter")}
                </Button>
                <Button
                  layout="outline"
                  onClick={handleResetField}
                  type="reset"
                  className="h-12"
                >
                  {t("Reset")}
                </Button>
                <Button onClick={toggleDrawer} className="h-12 bg-blue-600">
                  <FiPlus className="mr-2" /> {t("AddBanner")}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </AnimatedContent>
      {loading ? (
        <TableLoading row={10} col={6} width={190} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : dataTable?.length !== 0 ? (
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
                <TableCell>{t("Title")}</TableCell>
                <TableCell>{t("Description")}</TableCell>
                <TableCell>{t("Link")}</TableCell>
                <TableCell>{t("Image")}</TableCell>
                <TableCell className="text-center">{t("Status")}</TableCell>
                <TableCell className="text-right">{t("Actions")}</TableCell>
              </tr>
            </TableHeader>
            <BannerTable
              data={dataTable}
              isCheck={isCheck}
              setIsCheck={setIsCheck}
            />
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
        <NotFound title="No banners available." />
      )}
    </>
  );
};
export default Banner;
