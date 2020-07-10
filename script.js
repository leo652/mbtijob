const MbtiModule = (function() {
	let types = {
		ISTJ: {title: "청렴결백한 논리주의자", percentage: "13.7%", description: "충실하고, 실용적이고, 논리적이고, 체계적", image: "https://mbtijob.ga/image/istj.jpg" , more: "한번 시작한 일은 끝까지 해내는 성격" , job: "회계사," , jobmore: "감리사, 재무경영자, 웹개발자"},
		ISFJ: {title: "용감한 수호자", percentage: "12.7%", description: "성실하고, 실용적이며, 지원적이며, 꼼꼼함", image: "https://mbtijob.ga/image/isfj.jpg", more: "성실하고 온화하며 협조를 잘하는 사람" , job: "초등학교 교사," , jobmore: "치과의사, 사서, 창업가"},
		INFJ: {title: "선의의 옹호자", percentage: "1.7%", description: "헌신적이고, 혁신적이며, 이상적이고, 인정 많은", image: "https://mbtijob.ga/image/infj.jpg", more: "사람에 관한 뛰어난 통찰력을 가진 사람" , job: "사회복지사," , jobmore: "치료사, 고객관계매니저"},
		INTJ: {title: "용의주도한 전략가", percentage: "1.4%", description: "독립적, 혁신적, 분석적, 목적적", image: "https://mbtijob.ga/image/intj.jpg", more: "전체를 조합하여 비전을 제시하는 사람" , job: "SW 개발자," , jobmore: "투자은행원, 재무상담가"},
		ISTP: {title: "만능 재주꾼", percentage: "6.4%", description: "편의성, 실용성, 목표성, 적응성", image: "https://mbtijob.ga/image/istp.jpg", more: "논리적이고 뛰어난 상황 적응력" , job: "경제학자," , jobmore: "토목기사, 파일럿, 테이터분석가"},
		ISFP: {title: "호기심 많은 예술가", percentage: "6.1%", description: "내성, 현실성, 조화, 적응성", image: "https://mbtijob.ga/image/isfp.jpg", more: "따뜻한 감성을 가지고 있는 겸손한 사람" , job: "패션디자이너," , jobmore: "물리치료사, 조경설계자"},
		INFP: {title: "열정적인 중재자", percentage: "3.2%", description: "통찰력, 혁신성, 이상적, 적응성", image: "https://mbtijob.ga/image/infp.jpg", more: "이상적인 세상을 만들어가는 사람들" , job: "그래픽디자이너," , jobmore: "심리학자, 치료사, 작가, 편집자"},
		INTP: {title: "논리적인 사색가", percentage: "2.4%", description: "질문, 혁신, 목표, 추상적", image: "https://mbtijob.ga/image/intp.jpg", more: "비평적인 관점을 가진 뛰어난 전략가" , job: "교수," , jobmore: "프로그래머, 재무분석가, 설계자"},
		ESTP: {title: "모험을 즐기는 사업가", percentage: "5.8%", description: "에너지, 실용적, 현실적, 자발적", image: "https://mbtijob.ga/image/estp.jpg", more: "친구,운동,음식 등 다양함을 선호" , job: "탐정," , jobmore: "은행원, 투자가, 스포츠코치"},
		ESFP: {title: "자유로운 영혼의 연예인", percentage: "8.7%", description: "자발적, 실용적, 친화적, 조화로운", image: "https://mbtijob.ga/image/esfp.jpg", more: "분위기를 고조시키는 우호적인 성격" , job: "배우," , jobmore: "아동복지상담가, 디자이너, 환경과학자"},
		ENFP: {title: "재기발랄한 활동가", percentage: "6.3%", description: "낙관적, 혁신적, 온정적, 다용도적", image: "https://mbtijob.ga/image/enfp.jpg", more: "열정적으로 새 관계를 만드는 사람" , job: "저널리스트," , jobmore: "요식업경영자, 파티플래너"},
		ENTP: {title: "뜨거운 논쟁을 즐기는 변론가", percentage: "2.8%", description: "위험 감수, 혁신, 외향적, 적응성", image: "https://mbtijob.ga/image/entp.jpg", more: "풍부한 상상력으로 새로운 것에 도전" , job: "기업가," , jobmore: "정치가, 부동산전문가, 마케팅디렉터"},
		ESTJ: {title: "엄격한 관리자", percentage: "10.4%", description: "체계적, 실용적, 논리적, 외향적", image: "https://mbtijob.ga/image/estj.jpg", more: "사무적, 실용적, 현실적인 스타일" , job: "변호사," , jobmore: "보험세일즈맨, 약사, 프로젝트매니저"},
		ESFJ: {title: "사교적인 외교관", percentage: "12.6%", description: "친절하고, 실용적이며, 충성스럽고, 체계적", image: "https://mbtijob.ga/image/esfj.jpg", more: "친절, 현실감을 바탕으로 타인에게 봉사" , job: "간호사," , jobmore: "판매대표자, 헬스케어종사자"},
		ENFJ: {title: "정의로운 사회운동가", percentage: "2.8%", description: "친절, 혁신, 지원, 이상주의", image: "https://mbtijob.ga/image/enfj.jpg", more: "타인의 성장을 도모하고 협동하는 사람" , job: "PR전문가," , jobmore: "세일즈매니저, 고용/HR전문가"},
		ENTJ: {title: "대담한 통솔자", percentage: "2.9%", description: "단호하고, 혁신적이며, 전략적이며, 외향적인", image: "https://mbtijob.ga/image/entj.jpg", more: "비전을 갖고 타인을 활력적으로 인도" , job: "임원," , jobmore: "변호사, 경영컨설턴트, 분석전문가"}
	};
	let e, i, s, n, t, f, j, p;
	let type;
	
	function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
	}
	
	function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
					case 'e': e++; break;
					case 'i': i++; break;
					case 's': s++; break;
					case 'n': n++; break;
					case 't': t++; break;
					case 'f': f++; break;
					case 'j': j++; break;
					case 'p': p++; break;
				}
			}
		});
	}
	
	function calculatePercentages() {
		e = Math.floor(e / 5 * 100);
		i = Math.floor(i / 5 * 100);
		s = Math.floor(s / 5 * 100);
		n = Math.floor(n / 5 * 100);
		t = Math.floor(t / 5 * 100);
		f = Math.floor(f / 5 * 100);
		j = Math.floor(j / 5 * 100);
		p = Math.floor(p / 5 * 100);
	}
	
	function createCharts() {
		document.querySelector("#eScore").innerHTML = e;
		document.querySelector("#iScore").innerHTML = i;
		document.querySelector("#sScore").innerHTML = s;
		document.querySelector("#nScore").innerHTML = n;
		document.querySelector("#tScore").innerHTML = t;
		document.querySelector("#fScore").innerHTML = f;
		document.querySelector("#jScore").innerHTML = j;
		document.querySelector("#pScore").innerHTML = p;
		
		document.querySelector("#eiChart").style.marginLeft = i / 2 + "%";
		document.querySelector("#snChart").style.marginLeft = n / 2 + "%";
		document.querySelector("#tfChart").style.marginLeft = f / 2 + "%";
		document.querySelector("#jpChart").style.marginLeft = p / 2 + "%";
	}
	
	function showResults() {
		type += (e >= i) ? "E" : "I";
		type += (s >= n) ? "S" : "N";
		type += (t >= f) ? "T" : "F";
		type += (j >= p) ? "J" : "P";
		document.querySelector("#type").innerHTML = type;
		document.querySelector("#type-title").innerHTML = types[type].title;
		document.querySelector("#type-percentage").innerHTML = types[type].percentage;
		document.querySelector("#type-description").innerHTML = types[type].description;
		document.querySelector("#type-image").src = types[type].image;
		document.querySelector("#type-more").innerHTML = types[type].more;
		document.querySelector("#type-job").innerHTML = types[type].job;
		document.querySelector("#type-jobmore").innerHTML = types[type].jobmore;
		
		
		document.querySelector("#type-details").classList.remove("hidden");
		document.querySelector("#scroll-down").classList.remove("hidden");
		document.querySelector("#results").classList.remove("hidden");
	}
	
	return {
		processForm: function() {
			resetScores();
			getScores();
			calculatePercentages();
			createCharts();
			showResults();
		}
	};
})();



document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });
