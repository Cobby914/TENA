import Header from "../layout/Header";
import Context from "../layout/Context";
import Statistics from "../layout/Statistics";
const placeholder = "/logoplaceholder.png";

export default function ReusableProgramPage() {
    return (
        <>
            <Header
                programName={"Care Navigation Community Health"} programImage={placeholder}
            />
            <Context
                problemStatement={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed quis nostrud exercitation ullamco laboris nisi velit esse cillum dolore eu fugiat "}
                solutionDescription1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam."}
                solutionDescription2={"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. "}
                problemImage={placeholder}
            />
            <Statistics
                s1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore."}
                s2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore."}
                s3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore."}
                s4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore."}
                s1Image={placeholder}
                s2Image={placeholder}
                s3Image={placeholder}
                s4Image={placeholder}
            />
        </>
    );
}