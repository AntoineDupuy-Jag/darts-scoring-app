type SeparatorProps = {
	margin?: string;
};

export const Separator = ({ margin }: SeparatorProps) => {
	return <hr style={{ margin, color: 'white' }} />;
};
