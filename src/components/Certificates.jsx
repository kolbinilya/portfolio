import React, { useState } from "react";
import image1 from "../img/certificates/certificate-code-camp.jpg";
import image2 from "../img/certificates/certificate-udemi.jpg";

export default function Certificates() {
	const [modalImage, setModalImage] = useState(null);
	const [isVisible, setIsVisible] = useState(false);

	const openModal = (img) => {
		setModalImage(img);
		setTimeout(() => setIsVisible(true), 10);
	};

	const closeModal = () => {
		setIsVisible(false);
		setTimeout(() => setModalImage(null), 300);
	};

	return (
		<section className="certificates container">
			<h2 className="section__title">Certificates</h2>
			<ul className="certificates__list">
				<li className="certificates__item" onClick={() => openModal(image1)}>
					<img
						className="certificates__image"
						src={image1}
						width={400}
						alt="Certificate 1"
					/>
				</li>
				<li className="certificates__item" onClick={() => openModal(image2)}>
					<img
						className="certificates__image"
						src={image2}
						width={400}
						alt="Certificate 2"
					/>
				</li>
			</ul>

			{modalImage && (
				<div
					className={`modal ${isVisible ? "modal--visible" : ""}`}
					onClick={closeModal}
				>
					<span className="modal__close" onClick={closeModal}>
						&times;
					</span>
					<img
						className="modal__image"
						src={modalImage}
						alt="Full certificate"
					/>
				</div>
			)}
		</section>
	);
}
