import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
// import MarriageContainer from "../presentational/MarriageContainer.jsx";
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
// import $ from 'jquery';

window.React = React;

class FormContainer extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                name_of_husband: "",
                husband_postal_code: "",
                husband_postal_number: "",
                husband_town: "",
                name_of_wife: "",
                wife_postal_code: "",
                wife_postal_number: "",
                wife_town: "",
                husband_citizenship: "",
                wife_citizenship: "",
                date: "",
                location_of_marriage: "",
                number_of_children: "",
                offset: 0,

            }
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
            // [this.state.data]: { limit: this.props.perPage, offset: this.state.offset },
            // pageCount: Math.ceil(data.meta.total_count / data.meta.limit),

        });


    }
    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({ offset: offset }, () => {
            this.handleChange();
        });
    };
    render() {
        const { name_of_husband } = this.state;
        const { husband_postal_code } = this.state;
        const { husband_postal_number } = this.state;
        const { husband_town } = this.state;
        const { husband_citizenship } = this.state;
        const { name_of_wife } = this.state;
        const { wife_postal_code } = this.state;
        const { wife_postal_number } = this.state;
        const { wife_town } = this.state;
        const { date } = this.state;
        const { location_of_marriage } = this.state;
        const { number_of_children } = this.state;
        const { name_of_children } = this.state;
        const { customary_law } = this.state;
        var spacing = 1;

        return (
            <div>
                <div className="col col-md-4" style={{ paddingLeft: "-" + spacing + 'em' }}>

                    <form id="article-form">

                        <h4>Affidavit of Marriage</h4>
                        <Input
                            text="Insert name of husband"
                            label="name_of_husband"
                            type="text"
                            id="name_of_husband"
                            value={name_of_husband}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert husband postal code"
                            label="husband_postal_code"
                            type="number"
                            id="husband_postal_code"
                            value={husband_postal_code}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert husband postal number"
                            label="husband_postal_number"
                            type="number"
                            id="husband_postal_number"
                            value={husband_postal_number}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert husband town"
                            label="husband_town"
                            type="text"
                            id="husband_town"
                            value={husband_town}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert name of wife"
                            label="name_of_wife"
                            type="text"
                            id="name_of_wife"
                            value={name_of_wife}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert wife postal code"
                            label="wife_postal_code"
                            type="number"
                            id="wife_postal_code"
                            value={wife_postal_code}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert wife postal number"
                            label="wife_postal_number"
                            type="number"
                            id="wife_postal_number"
                            value={wife_postal_number}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert wife town"
                            label="wife_town"
                            type="text"
                            id="wife_town"
                            value={wife_town}
                            handleChange={this.handleChange}
                        />
                        <Input
                            text="Insert husband citizenship
                            
                            
                            "
                            label="wife_town"
                            type="text"
                            id="wife_town"
                            value={wife_town}
                            handleChange={this.handleChange}
                        />
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </form>
                </div>
                <div className="col col-md-8" style={{ paddingLeft: "-" + spacing + 'em' }}>
                    <h2> we {name_of_husband} of P.O.Box {husband_postal_code} - {husband_postal_number}, {husband_town} and {name_of_wife} of P.O Box {wife_postal_code} {wife_postal_number}, {wife_town} hereby sincerely and solemnly make oath and declare as folows:</h2>
                </div>

            </div>


        );
    }
}
FormContainer.propTypes = {
    perPage: PropTypes.number.isRequired,
};
export default FormContainer;
