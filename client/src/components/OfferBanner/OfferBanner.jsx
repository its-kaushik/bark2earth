import './OfferBanner.scss'

const OfferBanner = ({ OfferMessage }) => {
    return (
        <div className="offer-banner" >
            <div className="offer-message" >
                { OfferMessage }
            </div>
        </div>
    );
}

export default OfferBanner;