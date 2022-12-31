import { FC } from "react";

interface IProps {
    title: string;
    defaultValue?: string;
    disable?: boolean;
}

const CheckboxAndLabel: FC<IProps> = ({ title, defaultValue, disable }) => {
    return (
        <section className="flex items-center p-2">
            <label className="inline-block w-[130px] pl-2 text-left font-IRANSans text-xl">
                {title}:
            </label>
            <input
                type="checkbox"
                disabled={disable}
                defaultValue={defaultValue}
                className="float-left m-0 inline-block w-[4rem] rounded-md border border-gray-400 p-2 font-IRANSans text-lg outline-none"
            />
        </section>
    );
};
 
export default CheckboxAndLabel;
