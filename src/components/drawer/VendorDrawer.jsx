import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Card, CardBody, Input, WindmillContext } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import Uploader from "@/components/image-uploader/Uploader";
import InputArea from "@/components/form/input/InputArea";
import LabelArea from "@/components/form/selectOption/LabelArea";
import DrawerButton from "@/components/form/button/DrawerButton";
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import useVendorSubmit from "@/hooks/useVendorSubmit"; // new hook for vendors

const VendorDrawer = ({ id }) => {
  const { mode } = useContext(WindmillContext);
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    isSubmitting,
  } = useVendorSubmit(id); // vendor-specific hook
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title title={t("UpdateVendor")} description={t("UpdateVendorDescription")} />
        ) : (
          <Title title={t("AddVendorTitle")} description={t("AddVendorDescription")} />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <Card className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Vendor Image" />
                  <div className="col-span-8 sm:col-span-4">
                    <Uploader
                      imageUrl={imageUrl}
                      setImageUrl={setImageUrl}
                      folder="vendor"
                      targetWidth={238}
                      targetHeight={238}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Name" />
                  <div className="col-span-8 sm:col-span-4">
                    <InputArea
                      required
                      register={register}
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Vendor name"
                    />
                    <Error errorName={errors.name} />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Email" />
                  <div className="col-span-8 sm:col-span-4">
                    <InputArea
                      required
                      register={register}
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Vendor email"
                    />
                    <Error errorName={errors.email} />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Password" />
                  <div className="col-span-8 sm:col-span-4">
                    <InputArea
                      required={!id}
                      register={register}
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <Error errorName={errors.password} />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                  <LabelArea label="Mobile Number" />
                  <div className="col-span-8 sm:col-span-4">
                    <InputArea
                      required
                      register={register}
                      label="Mobile Number"
                      name="mobile"
                      pattern={/^[+]?\d*$/}
                      minLength={6}
                      maxLength={15}
                      type="text"
                      placeholder="Vendor mobile"
                    />
                    <Error errorName={errors.mobile} />
                  </div>
                </div>
              </div>

              <DrawerButton
                id={id}
                title="Vendor"
                zIndex="z-5"
                isSubmitting={isSubmitting}
              />
            </form>
          </CardBody>
        </Card>
      </Scrollbars>
    </>
  );
};

export default VendorDrawer;
