$(window).load(function (){
	// 메인 접속자
	var chartPie = c3.generate({
		bindto : '#chartPie',
		data: {
			// iris data from R
			columns: [
				['PC', 3673],
				['Mobile', 6583]
			],
			type : 'pie',
			onclick: function (d, i) { console.log("onclick", d, i); },
			onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			onmouseout: function (d, i) { console.log("onmouseout", d, i); },
			colors: {
				PC: '#ff6600',
				Mobile: '#00b0f0',
			}
		},
		// size: {
		//   width: 250,
		//   height: 300
		// }
	});
	// 메인 대중평가참여
	var chartPie2 = c3.generate({
		bindto : '#chartPie2',
		data: {
			// iris data from R
			columns: [
				['Facebook', 10],
				['Twitter', 10],
				['KAKAO', 10],
				['Naver', 10],
				['Email', 10]
			],
			type : 'pie',
			onclick: function (d, i) { console.log("onclick", d, i); },
			onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			onmouseout: function (d, i) { console.log("onmouseout", d, i); },
			colors: {
				Facebook: '#0070c0',
				Twitter: '#00b0f0',
				KAKAO: '#ffcc00',
				Naver: '#2bc191',
				Email: '#ff6699'
			},
		},
		// size: {
		//   width: 250,
		//   height: 300
		// }
	});

	// 접속자통계
	var chartBar1 = c3.generate({
		bindto : '#chartBar1',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['PC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Mobile', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				PC: '#71d4b7',
				Mobile: '#939497',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1500},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 월간 pc ver
	setTimeout(function () {
		chartBar1.load({
			columns: [
				['전체', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
				['PC', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 78],
				['Mobile', 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 78],
			]
		});
	}, 500);
	var chartBar2 = c3.generate({
		bindto : '#chartBar2',
		size: {
			height: 700
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['PC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Mobile', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				PC: '#71d4b7',
				Mobile: '#939497',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			},
		}
	}); // 월간 mobile ver
	setTimeout(function () {
		chartBar2.load({
			columns: [
				['전체', 19, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
				['PC', 19, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 78],
				['Mobile', 129, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 78],
			]
		});
	}, 500);
	var chartBar3 = c3.generate({
		bindto : '#chartBar3',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['PC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Mobile', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				PC: '#71d4b7',
				Mobile: '#939497',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar3.load({
			columns: [
				['전체', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
				['PC', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 223],
				['Mobile', 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 182],
			]
		});
	}, 500);
	var chartBar4 = c3.generate({
		bindto : '#chartBar4',
		size: {
			height: 2000
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['PC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Mobile', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				PC: '#71d4b7',
				Mobile: '#939497',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar4.load({
			columns: [
				['전체', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
				['PC', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 223],
				['Mobile', 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 182],
			]
		});
	}, 500);

	// 회원가입통계
	var chartBar5 = c3.generate({
		bindto : '#chartBar5',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480'
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 월간 pc ver
	setTimeout(function () {
		chartBar5.load({
			columns: [
				['가입회원수', 19, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
			]
		});
	}, 500);
	var chartBar6 = c3.generate({
		bindto : '#chartBar6',
		size: {
			height: 700
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 월간 mobile ver
	setTimeout(function () {
		chartBar6.load({
			columns: [
				['가입회원수', 19, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
			]
		});
	}, 500);
	var chartBar7 = c3.generate({
		bindto : '#chartBar7',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar7.load({
			columns: [
				['가입회원수', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
			]
		});
	}, 500);
	var chartBar8 = c3.generate({
		bindto : '#chartBar8',
		size: {
			height: 2000
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar8.load({
			columns: [
				['가입회원수', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
			]
		});
	}, 500);

	// 지원자통계
	var chartBar9 = c3.generate({
		bindto : '#chartBar9',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 월간 pc ver
	setTimeout(function () {
		chartBar9.load({
			columns: [
				['가입회원수', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
			]
		});
	}, 500);
	var chartBar10 = c3.generate({
		bindto : '#chartBar10',
		size: {
			height: 700
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 월간 mobile ver
	setTimeout(function () {
		chartBar10.load({
			columns: [
				['가입회원수', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
			]
		});
	}, 500);
	var chartBar11 = c3.generate({
		bindto : '#chartBar11',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar11.load({
			columns: [
				['가입회원수', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
			]
		});
	}, 500);
	var chartBar12 = c3.generate({
		bindto : '#chartBar12',
		size: {
			height: 2000
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['가입회원수', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				가입회원수: '#f79480',
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar12.load({
			columns: [
				['가입회원수', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
			]
		});
	}, 500);

	// 평가참여통계
	var chartBar13 = c3.generate({
		bindto : '#chartBar13',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Facebook', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['KAKAO', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Instagram', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				Facebook: '#85badb',
				KAKAO: '#ffda85',
				Instagram: '#bba2cc'
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 월간 pc ver
	setTimeout(function () {
		chartBar13.load({
			columns: [
				['전체', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
				['Facebook', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 78],
				['KAKAO', 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 78],
				['Instagram', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 78],
			]
		});
	}, 500);
	var chartBar14 = c3.generate({
		bindto : '#chartBar14',
		size: {
			height: 700
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Facebook', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['KAKAO', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Instagram', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				Facebook: '#85badb',
				KAKAO: '#ffda85',
				Instagram: '#bba2cc'
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 월간 mobile ver
	setTimeout(function () {
		chartBar14.load({
			columns: [
				['전체', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 6, 7, 65],
				['Facebook', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 78],
				['KAKAO', 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 78],
				['Instagram', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 78],
			]
		});
	}, 500);
	var chartBar15 = c3.generate({
		bindto : '#chartBar15',
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Facebook', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['KAKAO', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Instagram', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				Facebook: '#85badb',
				KAKAO: '#ffda85',
				Instagram: '#bba2cc'
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			}
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar15.load({
			columns: [
				['전체', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Facebook', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['KAKAO', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				['Instagram', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			]
		});
	}, 500);
	var chartBar16 = c3.generate({
		bindto : '#chartBar16',
		size: {
			height: 2000
		},
		data: {
			x: 'x',
			labels: true,
			columns: [
				['전체', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
				['Facebook', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 223],
				['KAKAO', 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 182],
				['Instagram', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 223],
				['x', '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', 'TOTAL']
			],
			type: 'bar',
			colors: {
				전체: '#f79480',
				Facebook: '#85badb',
				KAKAO: '#ffda85',
				Instagram: '#bba2cc'
			}
		},
		axis: {
			x: {
				type: 'category',
				tick:{
					multiline: false
				},
				height:35
			},
			rotated : true
		},
		transition: {duration: 1000},
		
		bar: {
			width: {
				ratio: 0.9
			}
		}
	}); // 일간 pc ver
	setTimeout(function () {
		chartBar15.load({
			columns: [
				['전체', 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 150],
				['Facebook', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 223],
				['KAKAO', 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 182],
				['Instagram', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 223],
			]
		});
	}, 500);
});