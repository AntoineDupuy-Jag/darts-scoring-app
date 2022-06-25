import styles from './styles.module.scss';

type SquareButtonProps = {
	children?: React.ReactNode;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: (e?: any) => void;
	isDisabled?: boolean;
};

export const SquareButton = ({ children, type, onClick, isDisabled }: SquareButtonProps) => {
	return (
		<button className={styles.squareButton} type={type} onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};
