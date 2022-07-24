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

type selectInputProps = {
	selectedOption: string;
	setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectInput = ({ selectedOption, setSelectedOption }: selectInputProps) => {
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
		{ value: 'averages', label: 'La meilleure moyenne' },
		{ value: 'doubles', label: 'Le plus grand nombre de doubles' },
		{ value: 'triples', label: 'Le plus grand nombre de triples' },
		{ value: 'twentyFive', label: 'Le plus de 25 !' },
		{ value: 'fifty', label: 'Le plus de 50 !!!' },
		{ value: 'missed', label: 'Le plus grand nombre de fléchettes manquées' },
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
				value={options.find((option) => option.value === selectedOption)}
				onChange={(e: any) => setSelectedOption(e.value)}
				defaultValue={options[0]}
				isSearchable={false}
				blurInputOnSelect
			/>
		</div>
	);
};
