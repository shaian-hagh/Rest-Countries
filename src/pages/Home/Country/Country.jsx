import "./Country.css"
export const Country = ({data}) => {

    return (
    <>
        <img
            src={data.flags.png}
            alt={data.flags.alt}
            className="country"
        />
    </>
    )
}