const dropDown = document.querySelectorAll('.dropdown-nav > a');
const subNavItems = document.querySelectorAll('.sub-nav > li');
const hamburgerBtn = document.querySelector('.icon');
const aside = document.getElementById('aside');
const commissions = document.querySelectorAll('.commissions .btn');
const scrollUpBtn = document.getElementById('scroll-to-top');
const header = document.querySelector('header');
let asideIsOpen = false;
const toggler = document.querySelector('.toggler');
toggler.checked = false;

const url = 'https://ismf.herokuapp.com/';

let commissionArray = [];

async function fetchData() {
	const response = await fetch(`${url}api/committees`);
	const data = await response.json();
	commissionArray = data;
}
fetchData();

// show and hide the header or navbar
let lastScrollTop = 0;

// End show and hide the header or navbar

// Scroll to top
scrollUpBtn.addEventListener('click', () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

// window.addEventListener('scroll', () => {
// 	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	if (scrollTop > lastScrollTop) {
// 		header.style.top = '-71px';
// 	} else {
// 		header.style.top = '0';
// 	}
// 	lastScrollTop = scrollTop;

// 	if (window.pageYOffset >= window.innerHeight) {
// 		scrollUpBtn.classList.add('active');
// 	} else {
// 		scrollUpBtn.classList.remove('active');
// 	}
// });

// End Scroll to top

// const commissionFactory = (
// 	title,
// 	info,
// 	image,
// 	commissionHead,
// 	tel,
// 	email,
// 	members
// ) => {
// 	return { title, info, image, commissionHead, tel, email, members };
// };
// const memberFactory = (name, image, info, tel, email) => {
// 	return { name, image, info, tel, email };
// };

commissions.forEach(commission => {
	commission.addEventListener('click', () => {
		const modal = document.querySelector('.commission-modal');
		modal.classList.add('visible');

		const committe = commissionArray.filter(committe => {
			return committe.name === commission.textContent;
		});
		displaycommitte(committe);
	});
});

function displaycommitte(committe) {
	const commissionCard = document.querySelector('.commission-card');
	const memberContainer = document.querySelector('.commission-members');

	let presidentInfo = '';
	const com = committe[0];

	if (com === undefined) {
		console.log('The committee is not found');
		return;
	}

	if (committe.length == 0 || typeof com.members === 'undefined') {
		console.log('error here');
		return;
	}

	memberContainer.innerHTML = ``;
	com.members.forEach(member => {
		const memberCard = document.createElement('div');
		let memberType = '';

		if (member.type !== null) {
			memberType = `<h2 class="member-status">${member.type.name}</h2>`;
		}
		memberCard.classList.add('member-card');
		memberCard.innerHTML = `
		        ${memberType}
				<a href="${url}/${member.image}" target="_blank">
				<img
					src="${url}/${member.image}"
					alt=""
					class="member-image"
				/>
				</a>
				<h3 class="member-name">${member.name}</h3>
                <p class="member-cv">
								${member.description.substring(
									0,
									50
								)}<span>...</span><span class="read-more">المزيد</span>
				</p>
				<div class="member-contact">
					<a href="tel:${member.tel}" class="member-tel"
						><i class="fab fa-whatsapp mr-1"></i>${member.tel}</a
					>
				<a
					href="mailto:${member.email}?Subject=subject message"
					target="_blank"
					class="member-email ltr"
				>
					<i class="far fa-envelope mr-1"></i>${member.email}
				</a>
			    </div> 
	
		`;

		memberCard.addEventListener('click', () => {
			const modalBg = document.querySelector('.modal-bg');
			const memberModal = document.querySelector('.member-modal');
			const memberContent = document.querySelector('.member-content');

			memberContent.innerHTML = `
			<h2 class="name">${member.name}</h2>
			<p class="description rtl">
					${member.description}	
			</p>

			<div class="contact-wrapper">
						<div class="image-container">
							<img src="${url}/${member.image}" alt="${member.name}" />
						</div>
						<div class="contact-info">
							<span><a href="tel:${member.tel}" class="member-tel"
						style="color: white;"><i class="fab fa-whatsapp mr-1"></i>${member.tel}</a
					></span>
							<span>	<a 
					href="mailto:${member.email}?Subject=subject message"
					target="_blank"
					class="member-email ltr" style="color: white;"
				>
					<i class="far fa-envelope mr-1"></i>${member.email}
				</a></span>
						</div>
					</div>
			`;
			//

			modalBg.classList.add('visible');
			memberModal.classList.add('visible');
		});

		memberContainer.append(memberCard);
	});
	if (com.president !== null) {
		presidentInfo = `
		<div>
			<div class="commission-contact">
				<h4 class="name">
					<i class="fas fa-crown"></i>${com.president.member.name}
				</h4>
				<p class="tel">
					<i class="fas fa-phone-alt"></i>${com.president.member.tel}
				</p>
				<p class="email">
					<i class="far fa-envelope"></i>${com.president.member.email}
				</p>
			</div>
			<img src="${url}/${com.president.member.image}" alt="${com.president.member.name}" />
		</div>;
		`;
	}
	commissionCard.innerHTML = `
	<h1 class="commission-title">${com.name}</h1>
	<p class="commission-info">${com.description}</p>
	${presidentInfo}
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
		asideIsOpen = false;
		aside.classList.remove('slideIn');
		aside.classList.add('slideOut');
		hamburgerBtn.style['justify-content'] = 'flex-start';

		toggler.checked = false;
	} else {
		aside.classList.add('slideIn');
		aside.classList.remove('slideOut');
		hamburgerBtn.style['justify-content'] = 'flex-end';
		asideIsOpen = true;

		toggler.checked = true;
	}
};

hamburgerBtn.addEventListener('click', animationHandler);
