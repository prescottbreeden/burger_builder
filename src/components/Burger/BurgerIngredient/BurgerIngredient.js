import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

	render() {
		let ingredient = null;
		switch(this.props.type) {
			case ('bread-bottom'):
				ingredient = <div className="ingredients__bread--bottom"></div>;
				break;
			case ('bread-top'):
				ingredient = (
					<div className="ingredients__bread--top">
						<div className="ingredients__seeds--1"></div>
						<div className="ingredients__seeds--2"></div>
					</div>
				);
				break;
			case ('meat'):
				ingredient = <div className="ingredients__meat"></div>;
				break;
			case ('cheese'):
				ingredient = <div className="ingredients__cheese"></div>;
				break;
			case ('bacon'):
				ingredient = <div className="ingredients__bacon"></div>;
				break;
			case ('salad'):
				ingredient = <div className="ingredients__salad"></div>;
				break;
			default:
				ingredient = null;
		}
		return ingredient;
	}
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
}

export default BurgerIngredient;
