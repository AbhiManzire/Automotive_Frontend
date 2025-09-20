import React from "react";
import { useTranslation } from "react-i18next";
import Scrollbars from "react-custom-scrollbars-2";
// Internal imports
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import InputArea from "@/components/form/input/InputArea";
import LabelArea from "@/components/form/selectOption/LabelArea";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import TextAreaCom from "@/components/form/input/TextAreaCom";
import Uploader from "@/components/image-uploader/Uploader";
import DrawerButton from "@/components/form/button/DrawerButton";
import useBannerSubmit from "@/hooks/useBannerSubmit";
const BannerDrawer = ({ id, data }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    onSubmit,
        adminInfo,

    errors,
    imageUrl,
    setImageUrl,
    published,
    setPublished,
    isSubmitting,
  } = useBannerSubmit(id, data);
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            register={register}
            title={t("UpdateBanner")}
            description={t("UpdateBannerDescription")}
          />
        ) : (
          <Title
            register={register}
            title={t("AddBannerTitle")}
            description={t("AddBannerDescription")}
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Title */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 mb-6">
              <LabelArea label={t("Title")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Banner Title"
                  name="title"
                  type="text"
                  placeholder="Enter banner title"
                />
                <Error errorName={errors.title} />
              </div>
            </div>
            {/* Description */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 mb-6">
              <LabelArea label={t("Description")} />
              <div className="col-span-8 sm:col-span-4">
                <TextAreaCom
                  register={register}
                  label="Description"
                  name="description"
                  type="text"
                  placeholder="Short banner description"
                />
                <Error errorName={errors.description} />
              </div>
            </div>
            {/* Link */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 mb-6">
              <LabelArea label={t("Link")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Link"
                  name="link"
                  type="url"
                  placeholder="https://example.com"
                />
                <Error errorName={errors.link} />
              </div>
            </div>
            {/* Banner Image */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 mb-6">
              <LabelArea label={t("Banner Image")} />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  folder="banner"
                  targetWidth={1200}
                  targetHeight={400}
                />
              </div>
            </div>
            {/* Published */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setPublished}
                  processOption={published}
                />
              </div>
            </div>
          </div>
          <DrawerButton id={id} title="Banner" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};
export default BannerDrawer;
