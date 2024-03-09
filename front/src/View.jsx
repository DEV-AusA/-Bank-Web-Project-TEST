import User from "./User";

const View = () => {
    const handleUserButtonClick = (info)=> {
        // cada vez que hago click recibe la info y lo consologuea
        console.log(info);
    };
    return (
        <div>
            {/* le envio el evento al hijo */}
            <User handleUserButtonClick ={handleUserButtonClick} />
        </div>
    );
};
export default View