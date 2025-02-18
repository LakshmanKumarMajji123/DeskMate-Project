export const DisplayText = ({text1,text2}) => {
    return (
        <div className="flex flex row">
            <div className="...">
                <p >{text1}</p>
            </div>
            <div className="...">
                <p className="ml-2 mr-1"> : </p>
            </div>
            <div className="...">
                <p >{text2} </p>
            </div>
        </div>
    )
}
