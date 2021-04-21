const dropDown = document.querySelectorAll('.dropdown-nav > a');
const subNavItems = document.querySelectorAll('.sub-nav > li');
const hamburgerBtn = document.querySelector('.icon');
const aside = document.getElementById('aside');
const commissions = document.querySelectorAll('.commissions .btn');

// Variables for lightbox

// const allImages = document.querySelectorAll('.image-grid img');
// const modalImage = document.querySelector('.modal');
// const caption = document.querySelector('.caption');
// const fullImage = document.querySelector('.full-image');

// End variables for lightbox

const commissionArray = [];

const commissionFactory = (title, info, image, commissionHead, tel, email) => {
	return { title, info, image, commissionHead, tel, email };
};

// committe infos

// Media Committe
const mediaCommitte = commissionFactory(
	'اللجنة الإعلامية',
	'تتكون لجنة الإعلام للمهرجان من وحدات متخصصة تعمل كل منها وفق استراتيجية ورؤية شاملة لللجنة  وبقدر من المرونة بما يحقق لها قدرة على الحركة للوصول للخبر والمعلومة في الوقت المناسب وبالدقة والمصداقية اللازمة .',
	'brahim.jpeg',
	'Brahim Eman',
	'+22227930683',
	'brahimeman@gmail.com'
);
commissionArray.push(mediaCommitte);

// Technical Committee
const TechCommittee = commissionFactory(
	'اللجنة الفنية',
	`تتكفل هذه اللجنة بتنظيم و إدارة كافة المجالات الفنية  للمهرجان ، سينما ، مسرح ، فلكلور،  معارض و مسابقات وسباقات المهرجان .
و قد عكفت هذه اللجنة منذو شهر أغسطس من العام الماضي على تهيئة النسخة الأولى من المهرجان و ذلك من خلال الرحلات الميدانية والاستكشافية للمنطقه و الإتصال بالفاعلين و المهتدين من الشباب في مجالات الثقافة و الفنون  ، حيث تم تقديم دورات تكوينية في مجالي السنما و الفنون التشكيلة.`,
	'sidiYahya.jpeg',
	'سيدي يحي',
	'+22236310668',
	'sidiyahya@aisnmaurirania.com'
);

commissionArray.push(TechCommittee);

// Hospitality and Escorts Committee
const hospCommittee = commissionFactory(
	'لجنة الضيافة والمرافقات',
	'هي المسؤولة عن استقبال جميع ضيوف المهرجان وطاقمه الفني، وتوفير السكن لهم بالإضافة إلى توفير المعاش والنقل والترفيه  طيلة مدة إقامتهم، كما تنظم رحلات سياحية استكشافية لبعض الضيوف من اجل إكتشاف مقدرات المنطقة السياحية.',
	'cheikh-sidi.jpeg',
	'الشيخ ولد سيدي',
	'+22248277965',
	'cheikhsidi1@hotmail.com'
);

commissionArray.push(hospCommittee);

// Organizing Committee
const orgCommittee = commissionFactory(
	'لجنة التنظيم',
	`هي المسؤولة عن تنظيم المهرجان، الزوار والطواقم والفرق كما ستشرف بالتعاون مع اللجنية على كل الأنشطة من ^سهرات، ندوات، محاضرات، وسباقات ومسابقات ومعارض^، في ساحة الفنون ومزرعة فريدي. 
هي المسؤولة عن امن المهرجان بالتعاون مع فرق الأمن ^الشرطة وغيرها^.
ايضا ستشرف على تجهيز وتأثيث القرى النموذجية ^لفريك-لكصر^ وتنظيم زوارهم وانشطتهم.`,
	'no-pic.png',
	'محمد محمود (أبو مصطفى)',
	'+22236600714',
	'dotch1988.dg@gmail.com'
);

commissionArray.push(orgCommittee);
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
				src="images/committee/${com.image}"
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
// allImages.forEach(img => {
// 	img.addEventListener('click', () => {
// 		const fullImageSrc = img.getAttribute('data-original');
// 		fullImage.src = fullImageSrc;
// 		modalImage.classList.add('open');
// 		fullImage.classList.add('open');
// 		caption.textContent = img.getAttribute('alt');
// 	});
// });

// modalImage.addEventListener('click', e => {
// 	if (e.target !== e.currentTarget) return;
// 	modalImage.classList.remove('open');
// 	fullImage.classList.remove('open');
// });
// End Lightbox secotion
