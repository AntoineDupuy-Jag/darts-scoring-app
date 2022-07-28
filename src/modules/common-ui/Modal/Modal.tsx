import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';

type ModalProps = {
	context: 'scores' | 'rules';
	isShowing: boolean;
	seconds?: number;
	setSeconds?: React.Dispatch<React.SetStateAction<number>>;
	hide: any;
	title?: string;
	children?: React.ReactNode;
	setHideModal?: React.Dispatch<React.SetStateAction<boolean>>;
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
		if (context === 'scores') {
			let sampleInterval = setInterval(() => {
				if (seconds! > 0) {
					setSeconds!(seconds! - 1);
				}
				if (seconds === 0) {
					clearInterval(sampleInterval);
				}
			}, 1000);
			return () => {
				clearInterval(sampleInterval);
			};
		}
	});

	return isShowing
		? ReactDOM.createPortal(
				<>
					<div className={styles.modalOverlay}>
						<div className={styles.modalWrapper}>
							<div
								className={classNames(styles.modal, {
									[styles.modalForScores]: context === 'scores',
									[styles.modalForRules]: context === 'rules',
								})}
							>
								{context === 'rules' && <h4 className={styles.modalTitle}>{title}</h4>}
								{context === 'scores' && <div className={styles.counter}>{`se ferme dans ${seconds}`}</div>}
								<button type="button" className={styles.closeButton} onClick={hide}>
									x
								</button>
								<div
									className={classNames(styles.modalBody, {
										[styles.modalBodyForScores]: context === 'scores',
										[styles.modalBodyForRules]: context === 'rules',
									})}
								>
									{children}
								</div>
								{context === 'scores' && (
									<button
										className={styles.hideButton}
										onClick={() => {
											hide();
											setHideModal!(true);
										}}
									>
										{'Ne plus afficher ce message'}
									</button>
								)}
							</div>
						</div>
					</div>
				</>,
				document.body,
		  )
		: null;
};
