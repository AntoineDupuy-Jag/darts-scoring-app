import { useState } from 'react';

export const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);

	function toggle(delay: number, hideForever: boolean) {
		setIsShowing(!isShowing);
		if (delay > 0) {
			setIsShowing(true);
			setTimeout(() => {
				setIsShowing(false);
			}, delay);
		}
		if (hideForever) {
			setIsShowing(false);
		}
	}

	return {
		isShowing,
		toggle,
	};
};
