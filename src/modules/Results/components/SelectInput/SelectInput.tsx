import Select from 'react-select';

import styles from './styles.module.scss';

type formatOptionLabelType = {
	value: string;
	label: string;
};

type selectProps = {
	isFocused: boolean;
	isSelected: boolean;
};

export const SelectInput = () => {
	const colourStyles = {
		dropdownIndicator: (styles: any) => ({
			...styles,
			svg: {
				fill: '#383838',
			},
		}),
		indicatorSeparator: (styles: any) => ({
			...styles,
			backgroundColor: '#383838',
		}),
		menuList: (styles: any) => ({
			...styles,
			background: 'white',
			fontSize: '14px',
		}),
		option: (styles: any, { isFocused, isSelected }: selectProps) => ({
			...styles,
			background: isFocused ? 'lightgreen' : isSelected ? 'lightgray' : undefined,
			zIndex: 1,
		}),
		menu: (base: any) => ({
			...base,
			zIndex: 100,
		}),
	};

	const options = [
		{ value: 'chocolate', label: 'La meilleure moyenne' },
		{ value: 'strawberry', label: 'Le plus grand nombre de doubles' },
		{ value: 'vanilla', label: 'Le plus grand nombre de triples' },
		{ value: 'cacao', label: 'Le plus de 25 !' },
		{ value: 'mint', label: 'Le plus de 50 !!!' },
		{ value: 'coconuts', label: 'Le plus grand nombre de fléchettes manquées' },
	];

	const formatOption = ({ value, label }: formatOptionLabelType) => (
		<div className={styles.option}>
			<div className={styles.optionLabel}>{label}</div>
		</div>
	);

	return (
		<div className={styles.selectInputContainer}>
			<div className={styles.label}>{'⭐ Les meilleures performances'}</div>
			<Select
				styles={colourStyles}
				formatOptionLabel={formatOption}
				options={options}
				defaultValue={options[0]}
				isSearchable={false}
				blurInputOnSelect
			/>
		</div>
	);
};
