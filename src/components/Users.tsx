import ActionButton from "./Modules/ActionButton";
import CheckboxAndLabel from "./Modules/CheckboxAndLabel";
import InputAndLabel from "./Modules/InputAndLabel";
import SelectAndLabel from "./Modules/SelectAndLabel";
import TextareaAndInput from "./Modules/TextareaAndInput";

const Users = () => {
    return (
        <form className="container grid w-full grid-cols-3 rounded-md border border-gray-300">
            <section className="flex flex-col">
                <InputAndLabel title="نام و نام خانوادگی" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="کدملی" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="شماره پرونده" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="شماره شاسی" />
            </section>
            <section className="flex flex-col">
                <SelectAndLabel title="استان" />
            </section>
            <section className="flex flex-col">
                <SelectAndLabel title="شهر" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="شماره موتور" />
            </section>
            <section className="flex flex-col">
                <SelectAndLabel title="نوع خودرو" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="آدرس" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="تلفن ثابت" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="تلفن همراه" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="تماس گیرنده" />
            </section>
            <section className="flex col-span-3 items-end justify-end pl-3 pb-2">
               <ActionButton title="جسجوی سوابق تماس گیرنده" />
            </section>
        </form>
    );
};

export default Users;
