import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';

type ModalProps = {
	context?: string;
	isShowing: boolean;
	seconds: number;
	setSeconds: React.Dispatch<React.SetStateAction<number>>;
	hide: any;
	title?: string;
	children?: React.ReactNode;
	setHideModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({
	context,
	isShowing,
	hide,
	title,
	children,
	setHideModal,
	seconds,
	setSeconds,
}: ModalProps) => {
	useEffect(() => {
		let sampleInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				clearInterval(sampleInterval);
			}
		}, 1000);
		return () => {
			clearInterval(sampleInterval);
		};
	});

	return isShowing
		? ReactDOM.createPortal(
				<>
					<div className={styles.modalOverlay}>
						<div className={styles.modalWrapper}>
							<div className={styles.modal}>
								<div className={styles.modalHeader}>
									<h4>{title}</h4>
									<div className={styles.counter}>{`se ferme dans ${seconds}`}</div>
									<button type="button" className={styles.closeButton} onClick={hide}>
										x
									</button>
								</div>
								<div className={styles.modalBody}>{children}</div>
								<button
									className={styles.hideButton}
									onClick={() => {
										hide();
										setHideModal(true);
									}}
								>
									{'Ne plus afficher ceci'}
								</button>
							</div>
						</div>
					</div>
				</>,
				document.body,
		  )
		: null;
};
