import errorImg from "../../assets/errorimg.webp"
const ErrorPage = () => {
    return (
        <div className="flex flex-col mt-20 justify-center items-center">
            <img src={errorImg} alt="" />
            <h2 className="text-3xl mt-4 font-medium text-red-500">Page Not Found</h2>
        </div>
    );
};

export default ErrorPage;