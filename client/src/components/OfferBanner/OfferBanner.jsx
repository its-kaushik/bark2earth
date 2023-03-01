import './OfferBanner.scss'

const OfferBanner = ({ OfferMessage }) => {
    return (
        <div className="OfferBanner" >
            <div className="OfferMessage" >
                { OfferMessage }
            </div>
        </div>
    );
}

export default OfferBanner;