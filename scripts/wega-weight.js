

const ctx = document.getElementById('weightChart').getContext('2d');

    const labels = [
	'2026-01', 
      '2026-03-05',
	  '2026-03-06',
	  '2026-03-07',
      '2026-03-08',
      '2026-03-09',
      '2026-03-10',
      '2026-03-11',
      '2026-03-12',
      '2026-03-13',
	  '2026-03-14',
      '2026-03-15',
      '2026-03-16',
	  '2026-03-17',
      '2026-03-18',
	  '2026-03-19',
      '2026-03-20',
      '2026-03-21',
      '2026-03-22',
      '2026-03-23',
	  '2026-03-24',
	  '2026-03-25',
	  '2026-03-26',
      '2026-03-27',
      '2026-03-28',
      '2026-03-29',
      '2026-03-30',
	  '2026-03-31',
      '2026-04-01',
      '2026-04-02',
      '2026-04-03',
      '2026-04-04',
      '2026-04-05',
      '2026-04-06',
	  '2026-04-07',
	  '2026-04-08',
	  '2026-04-09',
	  'smalec',
	  '2026-04-11',
	  '2026-04-12',
	  '2026-04-13',
	  '2026-04-14'
    ];

    const data = [
	null, //0
	
      14.0, //5
	  null, //6
	  null, //7
      13.8, //8
      13.7, //9
      13.3, //10
      13.7, //11
      13.7, //12
      13.7, //13
	  null, //14
      13.6, //15
      13.6, //16
      null, //17
	  13.6, //18
      null, //19
	  14.0, //20
      14.1, //21
      13.45, //22
      13.85, //23
      null, //24
	  null, //25
	  null, //26
	  14.65, //27
      14.55, //28
      14.65, //29
      14.45, //30
      null, //31
	  14.55, //01
      14.4, //02.04
      14.55, //03.04
      14.55, //04.04
      14.55, //05.04
      14.6, //06.04
	  14.3, //07.04
	  14.55, //08.04
	  14.70, //09.04
	  14.75, //10.04 smalec
	  14.65, // 11.04
	  15.15, //12.04
	  14.85, //13.04
	  15.05, //14.04
    ];
	
	const sport = [
	null, //0
	
	  null, //5
	  null, //6
	  13.75, //7
      13.75, //8
      13.65, //9
      13.25, //10
      null, //11
      null, //12
      null, //13
	  null, //14
      null, //15
      13.55, //16
      null, //17
	  null, //18
      null, //19
	  null, //20
      14.05, //21
      13.40, //22
      null, //23
      null, //24
	  null, //25
	  null, //26
	  null, //27
      null, //28
      14.60, //29
      null, //30
      null, //31
	  null, //01
      null, //02.04
      null, //03.04
      14.50, //04.04
      null, //05.04
      14.55, //06.04
	  null, //07.04
	  null, //08.04
	  null, //09.04
	  null, //10.04 smalec
	  14.6, // 11.04
	  15.10, //12.04
	  null, //13
	  null, //14
    ];
	
	const kreon = [
	null, //0
	
	  null, //5
	  null, //6
	  null, //7
      null, //8
      null, //9
      null, //10
      null, //11
      null, //12
      null, //13
	  null, //14
      null, //15
      null, //16
      15.8, //17
	  15.8, //18
      15.8, //19
	  15.8, //20
      15.8, //21
      15.8, //22
      16, //23
      16, //24
	  16, //25
	  16, //26
	  16, //27
      16, //28
      16, //29
      16.2, //30
      16.2, //31
	  16.2, //01
      16.2, //02.04
      16.2, //03.04
      16.2, //04.04
      16.2, //05.04
      16.2, //06.04
	  16.2, //07.04
	  16.2, //08.04
	  16.4, //09.04
	  16.4, //10.04 smalec
	  16.4, //11.04
	  16.4, //12.04
	  16.4, //13.04
	  16.35, //14.04 4*2 - 8
    ];
	
	const stara_waga = [
	16, //0
	
	  16, //5
	  16, //6
	  16, //7
      16, //8
      16, //9
      16, //10
      16, //11
      16, //12
      16, //13
	  16, //14
      16, //15
      16, //16
      16, //17
	  16, //18
      16, //19
	  16, //20
      16, //21
      16, //22
      16, //23
      16, //24
	  16, //25
	  16, //26
	  16, //27
      16, //28
      16, //29
      16, //30
      16, //31
	  16, //01
      16, //02.04
      16, //03.04
      16, //04.04
      16, //05.04
      16, //06.04
	  16, //07.04
	  16, //08.04
	  16, //09.04
	  16, //10.04 smalec
	  16,  //11.04
	  16,  //12.04
	  16,  //13.04
	  16, //14.04
    ];
	
	

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Waga [kg]',
          data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.2
        },
		{
          label: 'Wysilek',
          data: sport,
          borderColor: 'rgba(255, 51, 0, 1)',
          backgroundColor: 'rgba(255, 51, 0, 0.2)',
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 6,
          tension: 0.2,
		  showLine: false
        },
		{
          label: 'Kreon',
          data: kreon,
          borderColor: 'rgba(100, 100, 0, 1)',
          backgroundColor: 'rgba(100, 100, 0, 0.2)',
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 6,
          tension: 0.2,
		  showLine: true
        },
		
		{
          label: 'Stara waga',
          data: stara_waga,
          borderColor: 'rgba(0, 0, 0, 1)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 6,
          tension: 0.2,
		  showLine: true,
		  spanGaps: 5000
        }
		]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return ' ' + context.parsed.y.toFixed(2) + ' kg';
              }
            }
          },
          title: {
            display: true,
            text: 'Zmiana wagi psa w czasie'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Data'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Waga [kg]'
            },
            beginAtZero: false
          }
        }
      }
    });