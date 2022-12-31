import { FC } from "react";

interface IProps {
    title: string;
    defaultValue?: string;
    disable?: boolean;
}

const InputAndLabel: FC<IProps> = ({ title, defaultValue, disable }) => {
    return (
        <section className="flex items-center justify-around p-2">
            <label className="inline-block w-[150px] pl-2 text-left font-IRANSans text-xl">
                {title}:
            </label>
            <input
                type="text"
                disabled={disable}
                defaultValue={defaultValue}
                className="float-left m-0 inline-block w-[20rem] rounded-md border border-gray-400 p-2 font-IRANSans text-lg outline-none"
            />
        </section>
    );
};

export default InputAndLabel;
