

const SplashScreen = (props) => {
    return (
        <div className="w-full h-screen bg-[#407BFF] flex justify-center ">
            <div className="flex w-[80%] h-[90%] m-auto  justify-between items-center ">
                <div className={props.divSize}>
                    <img className={props.imageSize} src={props.sideImage} alt="" />
                </div>
                <div className="w-[26rem] h-[35rem] rounded-3xl bg-white flex justify-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default SplashScreen
