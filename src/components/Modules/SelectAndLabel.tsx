import { FC } from "react";

interface IProps {
    title: string;
}

const SelectAndLabel: FC<IProps> = ({ title }) => {
    return (
        <section className="flex items-center justify-around p-2">
            <label className="inline-block w-[150px] pl-2 text-left font-IRANSans text-xl">
                {title}:
            </label>
            <select className=" inline-block w-[20rem] rounded-md border border-gray-400 bg-white p-2 font-IRANSans text-lg outline-none">
                <option>آپشن تست</option>
            </select>
        </section>
    );
};

export default SelectAndLabel;
