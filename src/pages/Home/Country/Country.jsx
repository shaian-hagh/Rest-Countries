import { Link } from "react-router-dom"
import "./Country.css"
export const Country = ({data, index, goToCountry}) => {

    return (
    <>
        <img
            src={data.flags.png}
            alt={data.flags.alt}
            className="country"
        />
        <Link onClick={() => goToCountry(index)} to='CountryInfo' className="more">More</Link>
    </>
    )
}