const dropDown = document.querySelectorAll('.dropdown-nav > a');
const subNavItems = document.querySelectorAll('.sub-nav > li');
const hamburgerBtn = document.querySelector('.icon');
const aside = document.getElementById('aside');
const commissions = document.querySelectorAll('.commissions .btn');

// Variables for lightbox
const allImages = document.querySelectorAll('.image-grid img');
const modalImage = document.querySelector('.modal');
const caption = document.querySelector('.caption');
const fullImage = document.querySelector('.full-image');

// End variables for lightbox

//Slide show Variables
const slideImage = document.querySelector('.slide-show img');
const images = [];
let i = 0;
let time = 3000;
//End Slide show variables
allImages.forEach(image => {
	images.push(image.getAttribute('src'));
});
function changeImage() {
	slideImage.src = images[i];
	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	setTimeout('changeImage()', time);
}

window.onload = changeImage;
const commissionArray = [];

const commissionFactory = (title, info, image, commissionHead, tel, email) => {
	return { title, info, image, commissionHead, tel, email };
};

// committe infos
const mediaCommitte = commissionFactory(
	'لجنة الإعلام',
	'تتكون لجنة الإعلام للمهرجان من وحدات متخصصة تعمل كل منها وفق استراتيجية ورؤية شاملة لللجنة  وبقدر من المرونة بما يحقق لها قدرة على الحركة للوصول للخبر والمعلومة في الوقت المناسب وبالدقة والمصداقية اللازمة .',
	'brahin.jpeg',
	'Brahim Eman',
	'+22227930683',
	'brahimeman@gmail.com'
);
commissionArray.push(mediaCommitte);

const artCommitte = commissionFactory(
	'اللجنة الفنية',
	`تُعَد لجان .GLOBALG.A.P الفنية العمود الفقري لشهادات اعتماد
	.GLOBALG.A.P، وتضم اللجان خبراء في الصناعة يغطون مختلف مراحل سلسلة
	التوريد، وتتولى اللجان مسؤولية تطوير وتعريف الشروط القياسية التي
	تُسمَّى نقاط التحكم وشروط الامتثال. كذلك تتولى اللجان تحديد الركن
	الأساسي للقواعد والمُسمَّى باللوائح العامة لـ .GLOBALG.A.P، التي
	تضع شروط واضحة لنجاح تطبيق المعايير والتحقق من سلامتها.`,
	'sidiYahya.jpeg',
	'Sidi Yahya',
	'+22232423704',
	'sidiyahya@gmail.com'
);

commissionArray.push(artCommitte);

//end committe infos

commissions.forEach(commission => {
	commission.addEventListener('click', () => {
		const committe = commissionArray.filter(committe => {
			return committe.title === commission.textContent;
		});
		displaycommitte(committe);
	});
});

function displaycommitte(committe) {
	const commissionCard = document.querySelector('.commission-card');
	const com = committe[0];
	if (committe.length == 0) return;
	commissionCard.innerHTML = `
	<h1 class="commission-title">${com.title}</h1>
	<p class="commission-info">${com.info}</p>
			<div>
			<div class="commission-contact">
				<h4 class="name">${com.commissionHead}</h4>
				<p class="tel">${com.tel}</p>
				<p class="email">${com.email}</p>
			</div>
			<img
				src="images/${com.image}"
				alt="${com.commissionHead}"
			/>
		</div>
	`;
}
dropDown.forEach(anchor => {
	anchor.addEventListener('click', function () {
		let delayTime = 60;
		anchor.nextElementSibling.classList.toggle('visible');
		subNavItems.forEach(item => {
			item.style['transform-origin'] = 'top center';
			item.style[
				'animation'
			] = `scaleZ 300ms ${(delayTime += 60)}ms ease-in-out forwards`;
		});
	});
});

const animationHandler = () => {
	if (aside.classList.contains('slideIn')) {
		aside.classList.remove('slideIn');
		aside.classList.add('slideOut');
		hamburgerBtn.style['justify-content'] = 'flex-start';
	} else {
		aside.classList.add('slideIn');
		aside.classList.remove('slideOut');
		hamburgerBtn.style['justify-content'] = 'flex-end';
	}
};

hamburgerBtn.addEventListener('click', animationHandler);

//Start Lightbox section
allImages.forEach(img => {
	img.addEventListener('click', () => {
		const fullImageSrc = img.getAttribute('data-original');
		fullImage.src = fullImageSrc;
		modalImage.classList.add('open');
		fullImage.classList.add('open');
		caption.textContent = img.getAttribute('alt');
	});
});

modalImage.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return;
	modalImage.classList.remove('open');
	fullImage.classList.remove('open');
});
// End Lightbox secotion
