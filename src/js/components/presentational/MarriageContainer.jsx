import React from "react";
import PropTypes from "prop-types";

const MarriageContainer = ({ name_of_husband, husband_postal_code, husband_postal_number, husband_town, name_of_wife, wife_postal_code, wife_postal_number, wife_town }) => (
    <div className="col col-md-8">
       <p> we {name_of_husband} of P.O.Box {husband_postal_code} {husband_postal_number}, {husband_town} and {name_of_wife} of P.O Box {wife_postal_code} {wife_postal_number}, {wife_town} hereby sincerely and solemnly make oath and declare as folows:</p>
    </div>
);
MarriageContainer.propTypes = {
    name_of_husband: PropTypes.string.isRequired,
    husband_postal_code: PropTypes.string.isRequired,
    husband_postal_number: PropTypes.string.isRequired,
    husband_town: PropTypes.string.isRequired,
    name_of_wife: PropTypes.string.isRequired,
    wife_postal_code: PropTypes.string.isRequired,
    wife_postal_number: PropTypes.string.isRequired,
    wife_town: PropTypes.string.isRequired
};
export default MarriageContainer;