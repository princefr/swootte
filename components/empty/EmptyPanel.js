
import Lottie from "lottie-react";
import loadingAnimation from "../../93134-not-found.json"



const EmptyPanel = ({title, description}) => {
return (
    <div className="flex flex-col  w-full">
        <div className="flex h-full flex-col w-full justify-center items-center mt-10">
            <div className="flex h-80 w-80 items-center justify-center">
                <Lottie animationData={loadingAnimation} loop={false} />
            </div>
            <h2 className="text-2xl font-medium">
                {title}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                {description}
            </p>
        </div>
</div>
)
}


export default EmptyPanel