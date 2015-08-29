import React from 'react';

class SelectList extends React.Component {
	constructor(props){
		super(props);
		this.toggleSelectList = this.toggleSelectList.bind(this);
		this.selectList = this.selectList.bind(this);
		this.state = {
			isSelectListOpen: false,
			selected: '選択してください'
		};
	}

	toggleSelectList(){
		this.setState({
			isSelectListOpen: !this.state.isSelectListOpen
		});
	}

	selectList(e, ref, sam){
		this.setState({
			isSelectListOpen: false,
			selected: e.target.textContent
		});
	}

	render(){
		let optionsStyle = {
			"display": "none"
		};

		let selectables = this.props.selectables;
		let options = selectables.map((selectable, index)=>{
			return <option value={ selectable } key={ index }>{ selectable }</option>
		});

		let dummyOptions = selectables.map((selectable, index)=>{
			return (
				<li
					className="select__options__option"
					re={ selectable }
					onClick={ this.selectList }
					key={ index }
				>
					{ selectable }
				</li>
			)
		});

		let selectListClassName, selectCurrentButtonClassName;
		if(this.state.isSelectListOpen){
			selectCurrentButtonClassName = 'select__current__button--active';
			selectListClassName = 'select__options--active';
		}else{
			selectCurrentButtonClassName = 'select__current__button';
			selectListClassName = 'select__options';
		}

		return (
			<div>
				<select style={ optionsStyle }>
					{ options}
				</select>
				<div className="select">
					<div className="select__current">
						<div className="select__current__input">{ this.state.selected }</div>
						<div className={ selectCurrentButtonClassName } onClick={ this.toggleSelectList }></div>
					</div>
					<ul className={ selectListClassName }>
						{ dummyOptions }
					</ul>
				</div>
			</div>
		);
	}
}

export default SelectList;
