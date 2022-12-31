import Contacts from "../../components/Contacts";
import Users from "../../components/Users";

const Index = () => {
    return (
        <div>
            <section className="mt-20">
                <Contacts />
            </section>
            <section className="mt-20">
                <Users />
            </section>
        </div>
    );
};

export default Index;
