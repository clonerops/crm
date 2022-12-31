import CheckboxAndLabel from "./Modules/CheckboxAndLabel";
import InputAndLabel from "./Modules/InputAndLabel";
import SelectAndLabel from "./Modules/SelectAndLabel";
import TextareaAndInput from "./Modules/TextareaAndInput";

const Contacts = () => {
    return (
        <form className="container grid w-full grid-cols-3 rounded-md border border-gray-300">
            <section className="flex flex-col">
                <InputAndLabel title="تماس گیرنده" />
            </section>
            <section className="flex flex-col">
                <SelectAndLabel title="نحوه ارتباط" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel
                    title="تاریخ تماس"
                    defaultValue="1401/10/10"
                    disable
                />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="تلفن همراه" />
            </section>
            <section className="flex flex-col">
                <SelectAndLabel title="پاسخگو تلفن" />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="ساعت تماس" defaultValue="14:25" disable />
            </section>
            <section className="flex flex-col">
                <InputAndLabel title="تلفن ثابت" />
            </section>
            <section className="flex flex-col">
                <SelectAndLabel title="موضوع تماس" />
            </section>
            <section className="flex flex-col">
                <CheckboxAndLabel title="پیگیری ویژه" />
            </section>
            <section className="col-span-3 flex flex-col">
                <TextareaAndInput title="توضیحات" />
            </section>
        </form>
    );
};

export default Contacts;
