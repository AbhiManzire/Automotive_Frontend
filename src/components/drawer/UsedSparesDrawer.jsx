import { Input } from "@windmill/react-ui";
import { t } from "i18next";
import { Scrollbars } from "react-custom-scrollbars-2";
// internal imports
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import InputArea from "@/components/form/input/InputArea";
import InputValue from "@/components/form/input/InputValue";
import LabelArea from "@/components/form/selectOption/LabelArea";
import Uploader from "@/components/image-uploader/Uploader";
import useUsedSparePartSubmit from "@/hooks/usedSparePartsSubmit";
import DrawerButton from "@/components/form/button/DrawerButton";
import SwitchToggle from "@/components/form/switch/SwitchToggle";

const UsedSparePartDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    published,
    setPublished,
    isSubmitting,
  } = useUsedSparePartSubmit(id);

  const categoryOptions = [
    "Cars",
    "Bikes",
    "Trucks",
    "Tractors",
    "JCBs",
    "Boats",
    "Autos",
    "EVs",
  ];

  const conditionOptions = ["Excellent", "Good", "Fair", "Poor"];
  const gradeOptions = ["A+", "A", "B", "C"];

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ">
        {id ? (
          <Title
            title={t("UpdateUsedSparePart")}
            description={t("UpdateUsedSparePartDescription")}
          />
        ) : (
          <Title
            title={t("AddUsedSparePart")}
            description={t("AddUsedSparePartDescription")}
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Image Upload */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("SparePartImage")} />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  folder="used-spare-parts"
                  targetWidth={400}
                  targetHeight={400}
                />
              </div>
            </div>

            {/* Title */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Title")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Title"
                  name="title"
                  type="text"
                  placeholder={t("TitlePlaceholder")}
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            {/* Category Select */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Category")} />
              <div className="col-span-8 sm:col-span-4">
                <select
                  {...register("category", { required: true })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                >
                  <option value="">{t("SelectCategory")}</option>
                  {categoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <Error errorName={errors.category} />
              </div>
            </div>

            {/* Vehicle Type */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("VehicleType")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Vehicle Type"
                  name="vehicleType"
                  type="text"
                  placeholder={t("VehicleTypePlaceholder")}
                />
                <Error errorName={errors.vehicleType} />
              </div>
            </div>

            {/* Grade Select */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Grade")} />
              <div className="col-span-8 sm:col-span-4">
                <select
                  {...register("grade", { required: true })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                >
                  <option value="">{t("SelectGrade")}</option>
                  {gradeOptions.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
                <Error errorName={errors.grade} />
              </div>
            </div>

            {/* Condition Select */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Condition")} />
              <div className="col-span-8 sm:col-span-4">
                <select
                  {...register("condition", { required: true })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                >
                  <option value="">{t("SelectCondition")}</option>
                  {conditionOptions.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
                <Error errorName={errors.condition} />
              </div>
            </div>

            {/* Price */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Price")} />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  required={true}
                  register={register}
                  label="Price"
                  name="price"
                  type="number"
                  placeholder={t("PricePlaceholder")}
                />
                <Error errorName={errors.price} />
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Description")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Description"
                  name="description"
                  type="text"
                  placeholder={t("DescriptionPlaceholder")}
                />
                <Error errorName={errors.description} />
              </div>
            </div>

            {/* Stock */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Stock")} />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  required={true}
                  register={register}
                  label="Stock"
                  name="stock"
                  type="number"
                  placeholder={t("StockPlaceholder")}
                />
                <Error errorName={errors.stock} />
              </div>
            </div>

            {/* Published Switch */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setPublished}
                  processOption={published}
                />
              </div>
            </div>
          </div>

          <DrawerButton
            id={id}
            title="Used Spare Part"
            isSubmitting={isSubmitting}
          />
        </form>
      </Scrollbars>
    </>
  );
};

export default UsedSparePartDrawer;
