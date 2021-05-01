const dropDown = document.querySelectorAll('.dropdown-nav > a');
const subNavItems = document.querySelectorAll('.sub-nav > li');
const hamburgerBtn = document.querySelector('.icon');
const aside = document.getElementById('aside');
const commissions = document.querySelectorAll('.commissions .btn');
let asideIsOpen = false;
const toggler = document.querySelector('.toggler');
toggler.checked = false;

// Variables for lightbox

// const allImages = document.querySelectorAll('.image-grid img');
// const modalImage = document.querySelector('.modal');
// const caption = document.querySelector('.caption');
// const fullImage = document.querySelector('.full-image');

// End variables for lightbox

const commissionArray = [];

const commissionFactory = (
	title,
	info,
	image,
	commissionHead,
	tel,
	email,
	members
) => {
	return { title, info, image, commissionHead, tel, email, members };
};
const memberFactory = (name, image, info, tel, email) => {
	return { name, image, info, tel, email };
};

// committe infos

const headCommitte = commissionFactory(
	'اللجنة العليا',
	'تتكون لجنة الإعلام للمهرجان من وحدات متخصصة تعمل كل منها وفق استراتيجية ورؤية شاملة لللجنة  وبقدر من المرونة بما يحقق لها قدرة على الحركة للوصول للخبر والمعلومة في الوقت المناسب وبالدقة والمصداقية اللازمة .',
	'brahim.jpeg',
	'Brahim Eman',
	'+22227930683',
	'brahimeman@gmail.com'
);
commissionArray.push(headCommitte);

// Media Committe
const mediaCommitte = commissionFactory(
	'اللجنة الإعلامية',
	'تتكون لجنة الإعلام للمهرجان من وحدات متخصصة تعمل كل منها وفق استراتيجية ورؤية شاملة لللجنة  وبقدر من المرونة بما يحقق لها قدرة على الحركة للوصول للخبر والمعلومة في الوقت المناسب وبالدقة والمصداقية اللازمة .',
	'mouhamedIdomou.jpeg',
	'محمد إدوم',
	'+22236300773',
	'Idoumouabdou@gmail.com',
	[
		memberFactory(
			'حمود الددَّ  امان',
			'hamoudDedde.jpg',
			`حمود الددَّ  امان من مواليد 1997 مقاطعة الطينطان، حاصل على شهادة ختم الدروس الإعدادية 2014 في مدارس الإصلاح الرائد،
حاصل على باكلوريا شعبة العلوم الطبيعية 2017،
خريج المعهد العالي للمحاسبة و إدارة المؤسسات (ISCAE) 2020.
مهتم بالتكنولوجيا و الرسم.`,
			'+22232423704',
			'hamoudeded@gmail.com'
		),
	]
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
	'sidiyahya@aisnmaurirania.com',
	[
		memberFactory(
			'سلي عبد الفتاح',
			'souley.jpeg',
			`
					تاريخ الميلاد :1982
		مكان ميلاد:انواكشوط
		الحالة الإجتماعية  :أعزب 
		المستوى الدراسي :جامعي(جامعة نواكشوط)
		التخصص:فلسفة وعلم  إجتماع
		المهنة :مسرحي (كتابة ،إخراج،تمثيل،حكواتي ،مهرج....)
		المشاركات
		محليا: فائز ثلاث مرات بجائزة المسرح  ضمن المهرجان الجهوي لمدينة انواكشوط  تمثيلا وإخراجا  سنوات 2006،2007،2008
		فائز ثلاث مرات  بجائزة العرض المتكامل  ضمن المهرجان الوطني للمسرح المدرسي  مخرجا  سنوات  2011،2013،2015
		فائز بجائزة أحسن نص  ضمن المهرجان الوطني للمسرح المدرسي  سنه 2014
		فائز بجائزة  أحسن مخرج ضمن المهرجان الوطني للمسرح الموريتاني سنة2018
		فائز بجائزة العرض المتكامل  ضمن المهرجان الوطني للمسرح الموريتاني   سنة 2019بالإضافة الى عدة اعمال تلفزيونيه من بينها 
		وجوه من خشب 
		أحلام مواطن 
		الخ....
		-عربيا
		مهرجان خليفة اسطنبولي بتونس  2012
		مهرجان كلميم لمسرح الجنوب  بالمغرب 2013
		أيام الشارقة المسرحية بالإمارات 2015
		مهرجان المسرح الصحراوي بالشارقة 2015
		مهرجان المسرح العربي بالجزائر 2016
		مهرجان الداخلة بالمغرب 2016
		مهرجان المسرح الصحراوي  بالشارقة 2018
		مهرجان المسرح العربي بالأردن 2020
		هذا بلإضافة الى  حوالي  خمسة عشر نصا مسرحيا  مكتوبة ومعروضة للكبار  وبعض وايات الصغار  ...الخ
			`,
			'+22247691469',
			'souley.adb@gmail.com'
		),
		memberFactory(
			'سيدي محمد الشيگر',
			'sidiCheigir.jpeg',
			`مخرج سينمائي، خبير محاربة التطرف العنيف
١.الدراسات الجامعية:
-مهندس معلوماتية 
-ماستر في الاخراج السينمائي والتلفزيوني

٢.تصوير الافلام 
من اعماله  كمنتج او منتج منفذ:
-"١٨٠درجة من السعادة" لوسيم كربي
-"يوميات لمحمد لمين الراجل"
-"واحد منا" لشفيع بابا 
-"زهرة حلب" لرضا باهي (انتاج مشترك)
-"عبد الرحمان سيساكو في ما وراء الحدود" لفاليري أوسوف 
كمساعد مخرج 
-"تمبكتو" لعبد الرحمان سيساكو
-"وجوه من افريقيا" لفابريزيو مالتيز
-"تيتا بائعة النعناع" لسالم دندو
-"سينمائي بأحذية من ريح"
-"الموريتاني " لكفين ماكدونالد

اعماله كمخرج 

-"المتطرّف"
-"موريتانيا ملتقى طرق افريقيا" (وثائقي)
-“البنك المركزي الموريتاني: التحول الرقمي"
٣.التجربة التلفزيونية
مدير انتاج قناة الوطنية ٢٠١١-٢٠١٣
-مدير الانتاج بقناة الساحل ٢٠١٩-٢٠٢٠

مخرج ومنتج لعدة برامج وافلام 
٤.المجتمع المدني
المدير الفني لمهرجان نواكشوط للفيلم ٢٠١٢-٢٠١٩
مؤسس ومدير مهرجان أمم لأفلام حقوق الانسان، 
مكوّن معتمد من دار السينمائيين
عضو مؤسس في اتحاد السينمائيين الموريتانيين`,
			'+22236323626',
			'Sidimed.cheiguer@gmail.com'
		),
	]
);

commissionArray.push(TechCommittee);

// Hospitality and Escorts Committee
const hospCommittee = commissionFactory(
	'لجنة الضيافة والمرافقات',
	'هي المسؤولة عن استقبال جميع ضيوف المهرجان وطاقمه الفني، وتوفير السكن لهم بالإضافة إلى توفير المعاش والنقل والترفيه  طيلة مدة إقامتهم، كما تنظم رحلات سياحية استكشافية لبعض الضيوف من اجل إكتشاف مقدرات المنطقة السياحية.',
	'cheikh-sidi.jpeg',
	'الشيخ ولد سيدي',
	'+22248277965',
	'cheikhsidi1@hotmail.com',
	[
		memberFactory(
			'السلطانة منت معاذ',
			'soultane.jpeg',
			`الاسم السلطانة منت أخيار الناس ولد معاذ معلمة و
نائب الرئيس المجلس الجهوي للولاية الحوض الغربي`,
			'22642166',
			'unavailable'
		),
		memberFactory(
			'كافي منت محمد مولود',
			'kavi.jpeg',
			`كافي محمد محمود ولد محمد مولود 
معلمة:العربية 
الطينطان: مدرسة (اكبي أهل الجعفر )`,
			'22290651',
			'unavailable'
		),
	]
);

commissionArray.push(hospCommittee);

// Organizing Committee
const orgCommittee = commissionFactory(
	'لجنة التنظيم',
	`هي المسؤولة عن تنظيم المهرجان، الزوار والطواقم والفرق كما ستشرف بالتعاون مع اللجنية على كل الأنشطة من ^سهرات، ندوات، محاضرات، وسباقات ومسابقات ومعارض^، في ساحة الفنون ومزرعة فريدي. 
هي المسؤولة عن امن المهرجان بالتعاون مع فرق الأمن ^الشرطة وغيرها^.
ايضا ستشرف على تجهيز وتأثيث القرى النموذجية ^لفريك-لكصر^ وتنظيم زوارهم وانشطتهم.`,
	'mouhamedMahmoud.jpeg',
	'محمد محمود (أبو مصطفى)',
	'+22236600714',
	'dotch1988.dg@gmail.com',
	[
		memberFactory(
			'ابراهيم محمذ الامين',
			'brahim.jpeg',
			'حاصل علي شهادة اليصانص في الفقه و اصوله ، فاعل ثقافي عامل وعضو في العديد من الروابط والاندية الثقافية .',
			'+22226962631',
			'Brahimalalewihemma@gmail.com'
		),
	]
);

commissionArray.push(orgCommittee);
//end committe infos

// Start Foreign Relations Committee
const forRelCommittee = commissionFactory(
	'لجنة العلاقات الخارجية',
	`لجنة العلاقات الخارجية 
تتشكل من شخصيات وازنة ثقافيا و اجتماعيا تتولى الاتصال المباشر بالمنظمات  و المؤسسات و الشخصيات التي قد تساهم ماديا أو معنويا في انجاح المهرجان.`,
	'mouhamedoSalahi.jpg',
	'محمدو الصلاحي',
	'+22237003586',
	'mouhamedouSalahi@gmail.com',
	[]
);

commissionArray.push(forRelCommittee);

// End Foreign Relations Committee

// Start Financial Committee
const finCommittee = commissionFactory(
	'اللجنة المالية',
	`مكلفة بإعداد خطة مالية وترجمتها إلى موازنة قابلة للتنفيذ، يتم إعتمادها من طرف اللجنة العليا، لتوفير التمويل اللازم للمهرجان.
كما تسعى إلى إستقطاب الدعم والتمويل اللازم، بالبحث عن الرعاية و الشراكات الممكنة، وذلك بالتعاون مع بعض لجان المهرجان،
هي المسؤولة عن تسيير كافة الحسابات  من خلال وثائق وسجلات وكشوف قابلة للمراجعة والتدقيق في أي وقت.
تعتمد على آلية الصرف طبقًا لبنود الميزانية المعتمدة؛ إلا في حال الاستثناءات التي تحددها اللجنة العليا للمهرجان بقرار مكتوب، كما تتكفل بإعداد تقارير عن الحالة المالية (من إيرادات ومصاريف) يتم تقديمها بشكل دوري.`,
	'medLeminBjd.jpeg',
	'محمد الأمين ابَّجدُّه',
	'+(222) 22 36 3063',
	'mlemine011@gmail.com',
	[]
);

commissionArray.push(finCommittee);
// End Financial Committee
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
	const memberContainer = document.querySelector('.commission-members');
	const com = committe[0];

	if (com.title === 'اللجنة العليا') {
		memberContainer.innerHTML = `
		<div class="member-card">
								<h2 class="member-status">الرئيس الشرفي</h2>
								<img
									src="images/committee/members/edey.png"
									alt=""
									class="member-image"
								/>
								<h3 class="member-name">أدي ابراهيم أسويدأحمد</h3>
								<p class="member-cv">
									الدي ولد ابراهيم ولد اسويد أحمد هو أحد ابرز شخصيات البلد منذ
									الاستقلال. تقلد عدة مناصب وزارية في عهد الرئيس المختار ولد
									داداه وبعدها تنقل بين عواصم العالم كسفير فوق العادة لبلاده قبل
									ان يعود للوطن وينتخب عضوا في مجلس الشيوخ لفترة .معينة وقبل كل
									ذلك يعتبر الدي من الاداريين الأول في البلاد حين عمل كقائد
									لدائرة الحوض الغربي من عاصمتها &quot;عيون .العتروس&quot;.
									ويعود له الفضل بعيد الاستقلال في التأسيس الاداري لمدينة
									الطينطان كعاصمة للمقاطعة ولا بد ان ننوه الى ان الدي وهو سليل
									الامارة الإدوعيشية في تگانت حيث مسقط رأسه وقع في حب البادية
									منذ شبابه وخاصة بادية ّ أفل في ولاية الحوض الغربي التي ظل
									ينتجع سهولها ووديانها كمنم اصيل حتى خلال فترات عمله سفيرا
									مقيما خارج .البلد وحاول في نفس الوقت جلب ادوات الحداثة للمنطقة
									من تهجين للخيول والابقار وزراعة ممكننة وسينما وفنون .جميلة
									وحين أدركه الكبر اختار بادية الطينطان سكنا دائما له ولعائلته
									ولا يزال مقيما مطمئنا بها نسال تعالى له دوام .الصحة وطول العم
								</p>
								<div class="member-contact">
									<span class="member-tel"></span>

									<span class="member-email"></span>
								</div>
							</div>

							<div class="member-card">
								<h2 class="member-status">الرئيس </h2>
								<img
									src="images/committee/members/mohamedVall.jpeg"
									alt=""
									class="member-image"
								/>
								<h3 class="member-name">محمد فال أحمد سالم</h3>
								<p class="member-cv">
									محمد فال أحمد سالم، دبلوم دراسات عليا أدب إنجليزي من جامعة
									محمد الخامس في الرباط. صحفي ثم مراسل متجول لشبكة الجزيرة منذ
									عام 2001. مقيم في الدوحة، قطر. مهتم بالزراعة والبيئة وبفكرة
									التنمية القاعدية للمجتمع
								</p>
								<div class="member-contact">
									<span class="member-tel">+97455749787</span>
									<span class="member-email">vallmohamed83@yahoo.com</span>
								</div>
							</div>
							<div class="member-card">
								<h2 class="member-status">المدير </h2>
								<img
									src="images/committee/members/hemideWene.jpeg"
									alt=""
									class="member-image"
								/>
								<h3 class="member-name">حميد ون خرشف</h3>
								<p class="member-cv">
									حميد ون خرشف المندوب الجهوي للمكتب الوطني للسياحه في ولاية
									أنواكشوط الغربية
								</p>
								<div class="member-contact">
									<span class="member-tel">+22236358380</span>
									<span class="member-email"></span>
								</div>
							</div>

							<div class="member-card">
								<h2 class="member-status">المدير المساعد</h2>
								<img
									src="images/committee/members/salemdindou.jpeg"
									alt=""
									class="member-image"
								/>
								<h3 class="member-name">سالم دندو</h3>
								<p class="member-cv">
									سممثل وكاتب مسرحي، منتج ومخرج سينمائي 
ادار العديد من الفرق والجمعيات  الفنية كفرقة مسرح شنقيط في الفترة من (1993 إلى 1997) نادي المسرح الجامعي من (1991 إلى 1994) فرقة المسرح الشعبي من (1994 إلى 1996) التحق بمجال السينما من خلال دار السينمائيين الموريتانيين سنة 2002 حيث عمل بها منتجا ومخرج ثم انتخب أمينا عاما من سنة (2010 الى 2014)  فمديرا من سنة (2017 إلى 2021 )
أسس اتحاد السينمائيين الموريتانيين وانتخب رئيسا له سنة 2014
								</p>
								<div class="member-contact">
									<span class="member-tel"></span>
									<span class="member-email"></span>
								</div>
							</div>

							<div class="member-card">
								<h2 class="member-status">رئيس لجنة العلاقات العامة</h2>
								<img
									src="images/committee/members/mouhamedoSalahi.jpg"
									alt=""
									class="member-image"
								/>
								<h3 class="member-name">محمدو الصلاحي</h3>
								<p class="member-cv">
									مهندس المعلوماتية والإتصال من جامعة ادويزبورج المانيا كاتب
									ومؤلف يوميات أغوينتنامو وكتاب أحمد والزرقاء ناشط في حقوق
									الإنسان
								</p>

								<div class="member-contact">
									<span class="member-tel">+22237003586</span>
									<span class="member-email">MohamedouSlahi@gmail.com</span>
								</div>
							</div>

							<div class="member-card">
								<h2 class="member-status">رئيس اللجنة الفنية</h2>
								<img
									src="images/committee/members/sidiYahya.jpeg"
									alt=""
									class="member-image"
								/>
								<h3 class="member-name">سيدي يحي</h3>
								<p class="member-cv">
									سيدي يحي، فنان تشكيلي يرسم ويقدم أعماله منذو 1987 في موريتانيا
									السنغال الدول المغاربيه الإمارات سوريا فرنسا واسبانيا. أستاذ
									مادة الفنون البصرية لأزيد من خمسة عشرة سنة بالمدرسة الأمريكية
									الدولية بانواكشوط
								</p>
								<div class="member-contact">
									<span class="member-tel">+22236310668</span>
									<span class="member-email">sidiyahya@aisnmauritania.com</span>
								</div>
							</div>

							<div class="member-card">
								<h2 class="member-status">رئيس لجنة الإعلام</h2>
                                <img
                                    src="images/committee/members/mouhamedIdomou.jpeg"
                                    alt=""
                                    class="member-image"
                                />
                                <h3 class="member-name">محمد إدوم</h3>
                                <p class="member-cv">
                                    محمد إدوم شاعر، صحفي، مدير ثقافي ومدرب في مجال إدارة المشاريع والمؤسسات الثقافية، من مواليد 28ديسمبر 1981 في كيفه
									حاصل على المتريز في الآداب والترجمة من كلية الآداب والعلوم الإنسانية/جامعة نواكشوط وشهادة كأني صحفي السلك العالي المدرسة الوطنية للإدارة والصحافة والقضاء.
									حاصل على جائزة ملتقى الشارقة للإبداع الشبابي 2012 والمركز الثالث في مسابقة أمير الشعراء 2015 وجائزة شاعر عكاظ في المملكة العربية السعودية 2020.
									المنسق الثقافي لبيت الشعر- نواكشوط؛ الأمين العام لمجلس خبراء الثقافية بإذاعة موريتانيا؛ صانع محتوى في منصة "ذات" ومركز "إثراء" السعودية؛ عضو الجمعية العمومية ومدرب مشاريع ثقافية لدى مؤسسة المورد الثقافي بلبنان؛ وعضو الهيئة الإستشارية ل -مشروع فجر- السفارة الفرنسية في موريتانيا
								</p>
								<div class="member-contact">
                                    <span class="member-tel">+22236300773</span>
                                    <span class="member-email">Idoumouabdou@gmail.com</span>
                                </div>
                            </div>

                           <div class="member-card">
							   <h2 class="member-status">رئيس اللجنة المالية</h2>
                                <img
                                    src="images/committee/members/medLeminBjd.jpeg"
                                    alt=""
                                    class="member-image"
                                />
                                <h3 class="member-name">محمد الأمين ابَّجدُّه</h3>
                                <p class="member-cv">من مواليد مقاطعة الطينطان (ولاية الحوض الغربي)، سنة 1969م.
مهندس تقنيات بحرية، جريج أكاديمية البحرية التجارية بسوسه (تونس).
 المدير العام لمجموعة ماكوب (الموريتانية لتجهيز السفن وتسويق الأسماك)، والمتخصصة في مجال الصيد الصناعي ومعالجة وتصدير المنتجات البحرية
								</p>
                                <div class="member-contact">
                                    <span class="member-tel">+(222) 22 36 3063</span>
                                    <span class="member-email">mlemine011@gmail.com</span>
                                </div>
                            </div>
									<div class="member-card">
							<h2 class="member-status">رئيس لجنة الضيافة و المرافقات</h2>

                                <img
                                    src="images/committee/members/cheikhSidi.jpeg"
                                    alt=""
                                    class="member-image"
                                />
                                <h3 class="member-name">الشيخ سيدي</h3>
                                <p class="member-cv">
									الشيخ سيدي حاصل على ديبلوم دكتورا سلك ثالث في النشاط الإشعاعي والبيئة من جامعة لاس بلماس بإسبانيا.
									مكلف بمهمة سابقا بوزارة النفط والطاقة والمعادن.
									الوظيفة الحالية موظف سامي بمنطقة إستثمار نهر السنغال (مدقق داخلي في شركة تسيير واستغلال سد دياما)
								</p>
                                <div class="member-contact">
                                    <span class="member-tel">+22248277965</span>
                                    <span class="member-email">cheikhsidi1@hotmail.com</span>
                                </div>
                            </div>

                           <div class="member-card">
							<h2 class="member-status">منسق الفريق الميداني في الطينطان</h2>
                                <img
                                    src="images/committee/members/nouheIissa.jpg"
                                    alt=""
                                    class="member-image"
                                />
                                <h3 class="member-name">نوح عيسى</h3>
                                <p class="member-cv"> 
									 نوح محمد عبد الله عيسى من مواليد 1991 في الطينطان حاصل على الباكلوريا 2011؛ الليصانص 2015 من جامعة لعيون؛ والماستر 2019؛ خريج المدرسة العليا للتعليم 2015؛
									أستاذ اللغة العربية والتربية الإسلامية؛ شارك في عدة ندوات وقدم عدة برامج تلفزيونية
									عضو لجنة تحكيم شاعر التوحيد 2014 2015 2016
								</p>
                                <div class="member-contact">
                                    <span class="member-tel">+22236915005</span>
                                    <span class="member-email">Medm32601@gmail.com</span>
                                </div>
                            </div>


							<div class="member-card">
							<h2 class="member-status">رئيس لجنة التنظيم </h2>

                                <img
                                    src="images/committee/members/mouhamedMahmoud.jpeg"
                                    alt=""
                                    class="member-image"
                                />
                                <h3 class="member-name">محمد محمود المصطفى</h3>
                                <p class="member-cv">
                                    محمد محمود المصطفى من مواليد 1988 في الطينطان خريج محظرة؛ حاصل على شهادة ميكانيك عامه من مركز التكوين بدار النعيم وفترة تطبيق مع شركة تويوتا موريتانيا 2014-2015.
									ناشط في الجمعيات الخيرية والثقافية.
								</p>
                                <div class="member-contact">
                                    <span class="member-tel">+22236600714</span>
                                    <span class="member-emai">dotch1988.dg@gmail.com</span>
                                </div>
                            </div>

		`;
		commissionCard.innerHTML = `
		<h1 class="commission-title">اللجنة العليا</h1>
	<p class="commission-info">- اللجنة العليا لمهرجان موسيقى الرعاة الدولي 
هي اللجنة المكلفة بالإدارة التنفيذية للمهرجان وتتألف من رئيس و مدير تنفيذي ومدير مساعدة ورؤساء اللجان المختصة وتهتم بإدارة المهرجان ووضع سياساته العامة بالنظر في المقترحات المقدمة من طرف اللجان الأخرى  وإجازتها، ووضع خطط العمل الميداني حسب الزمن، إجازة واعتماد الدراسة الفنية والمالية.</p>
		`;
		return;
	}
	if (com === undefined) {
		return;
	}
	if (committe.length == 0 || typeof com.members === 'undefined') {
		console.log('error here');
		return;
	}

	memberContainer.innerHTML = ``;
	com.members.forEach(member => {
		const memberCard = document.createElement('div');
		memberCard.classList.add('member-card');
		memberCard.innerHTML = `
		   
				<img
					src="images/committee/members/${member.image}"
					alt=""
					class="member-image"
				/>
				<h3 class="member-name">${member.name}</h3>
                <p class="member-cv">
								${member.info}
				</p>
				<div class="member-contact">
						<span class="member-tel">${member.tel}</span>
						<span class="member-email">${member.email}</span>
			    </div> 
	
		`;

		memberContainer.append(memberCard);
	});
	commissionCard.innerHTML = `
	<h1 class="commission-title">${com.title}</h1>
	<p class="commission-info">${com.info}</p>
			<div>
			<div class="commission-contact">
				<h4 class="name"><i class="fas fa-sitemap"></i>${com.commissionHead}</h4>
				<p class="tel"><i class="fas fa-phone-alt"></i>${com.tel}</p>
				<p class="email"><i class="far fa-envelope"></i>${com.email}</p>
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
// End Lightbox section
