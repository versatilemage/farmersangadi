import CommonNavBar from "../Molecules/NavBar";

const PageWrapper = ({children}) => {
    return (
        <div>
            <CommonNavBar/>
            {children}
        </div>
    )
}

export default PageWrapper;
