import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function SimpleGallery(props) {
	useEffect(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + props.galleryID,
			children: 'a',
			mainClass: props.className,
			pswpModule: () => import('photoswipe'),
		});
		lightbox.init();

		return () => {
			lightbox.destroy();
			lightbox = null;
		};
	}, [props.className, props.galleryID]);

	return (
		<div className={props.className} id={props.galleryID}>
		{props.images.map((image, index) => (
			<a
				href={image.largeURL}
				data-pswp-width={image.width}
				data-pswp-height={image.height}
				key={props.galleryID + '-' + index}
				target="_blank"
				rel="noreferrer"
			>
				<img src={image.thumbnailURL} alt={props.alt} className='img-fluid' />
			</a>
		))}
		</div>
	);
}