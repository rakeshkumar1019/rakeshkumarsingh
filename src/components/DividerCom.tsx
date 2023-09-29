import Skills from "./Skills"
import TimeLine from "./TimeLine"
import WorkExpirence from "./WorkExpirence"

const DividerCom = () => {
    return (
        <div className="flex flex-row">
            <div className="basis-7/12 pr-10">
            <h1 className="mb-5 mt-3 text-3xl text-black dark:text-white">Experience</h1>
            <TimeLine/>
            </div>
            <div className="basis-5/12">
                <Skills/>
                <WorkExpirence />
            </div>

        </div>
    )
}

export default DividerCom
