import { Button, Spin } from "antd";
import LabeledInput from "components/Form/LabeledInput";
import LabeledSelectInput from "components/Form/LabeledSelectInput";
import AddUserIcon from "components/Icons/AddUserIcon";
import useEditAccount from "hooks/accounts/useEditAccount";

export default function EditAccount() {
  const {
    control,
    handleSubmit,
    loading: { button, page },
    onSubmit,
  } = useEditAccount();

  return (
    <div
      className="w-full bg-white rounded-lg p-6"
      style={{ boxShadow: "0 4px 25px 0 rgba(0,0,0,.1)" }}
    >
      <div className="w-full pt-5 pb-5">
        <div className="w-full">
          <h1 className="p-5 font-light text-lg text-center">Edit Account</h1>
          <div className="w-full">
            <div className="w-full relative h-1 top-7 overflow-clip rounded-md">
              <div className="w-1/2 bg-black h-full rounded-md"></div>
            </div>
            <div className="relative w-full flex justify-center">
              <div className="relative h-14 w-14 bg-black rounded-full flex items-center justify-center text-white text-2xl">
                <AddUserIcon />
              </div>
            </div>
          </div>
          <p className="text-center mt-2 text-sm font-normal">
            User Information
          </p>
        </div>
        <div className="w-full py-8 px-5">
          {page ? (
            <div className="w-full flex items-center justify-center py-20">
              <Spin />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-wrap"
            >
              <div className="w-full px-4 pt-5 md:w-1/2">
                <LabeledInput
                  label="First Name"
                  type="text"
                  control={control}
                  name="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full px-4 pt-5 md:w-1/2">
                <LabeledInput
                  label="Last Name"
                  type="text"
                  control={control}
                  name="last_name"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full px-4 pt-5 md:w-1/2">
                <LabeledInput
                  label="Phone Number"
                  type="tel"
                  control={control}
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full px-4 pt-5 md:w-1/2">
                <LabeledInput
                  label="Email"
                  type="email"
                  control={control}
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="w-full px-4 pt-5 md:w-1/2">
                <LabeledSelectInput
                  control={control}
                  label="Role"
                  name="role"
                  placeholder="Select Role"
                  options={[
                    { value: "ADMIN", label: "Admin" },
                    { value: "SUPER_ADMIN", label: "Super Admin" },
                  ]}
                />
              </div>
              <div className="w-full flex mt-8 justify-end">
                <Button
                  loading={button}
                  htmlType="submit"
                  type="primary"
                  className="py-2 px-8 rounded-md float-right h-auto font-medium w-fit shadow-none"
                >
                  Update Account
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
