import { Component, OnInit } from '@angular/core';

// import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tableCaption: string = 'users';

  condition: boolean = false;

  searchValue: any;
  description: string = '';
  descriptions: string[] = [
    'country',
    'age-descending',
    'age-ascending',
    'age-more-than',
    'age-less-than',
    'ID-is-null',
    'latitude',
    'longitude',
    'search-by-id',
  ];
  users: any[] = [
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Melodie',
        last: 'Thompson',
      },
      location: {
        street: {
          number: 4643,
          name: 'Richmond Ave',
        },
        city: 'Cornwall',
        state: 'Saskatchewan',
        country: 'Canada',
        postcode: 'P3T 2K4',
        coordinates: {
          latitude: '-67.5400',
          longitude: '25.7436',
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca',
        },
      },
      email: 'melodie.thompson@example.com',
      login: {
        uuid: 'de377c3e-6b3e-4b95-b23f-97bd030301c3',
        username: 'yellowmeercat541',
        password: 'caitlin',
        salt: 'Sm6QJwok',
        md5: '64e277a8b027ab094b45e06198f37580',
        sha1: '1f7145a76053b39fd6dcd9c6664db69144d7c6c3',
        sha256:
          '3be51d94d756326fa8f3610b7ebf3771ec5db834f4ad221cb08d7aed68d73a46',
      },
      dob: {
        date: '1983-09-10T22:56:20.705Z',
        age: 39,
      },
      registered: {
        date: '2016-12-07T12:06:15.625Z',
        age: 6,
      },
      phone: '202-007-2933',
      cell: '265-583-0976',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/0.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/0.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/0.jpg',
      },
      nat: 'CA',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Debra',
        last: 'Lopez',
      },
      location: {
        street: {
          number: 5918,
          name: 'West Street',
        },
        city: 'Newry',
        state: 'Devon',
        country: 'United Kingdom',
        postcode: 'HR37 6AR',
        coordinates: {
          latitude: '5.6592',
          longitude: '176.3655',
        },
        timezone: {
          offset: '+5:30',
          description: 'Bombay, Calcutta, Madras, New Delhi',
        },
      },
      email: 'debra.lopez@example.com',
      login: {
        uuid: '48fb9f94-8736-4d40-8b53-ac80a5410436',
        username: 'blueostrich800',
        password: 'fish',
        salt: 'DpxZrbdS',
        md5: '4996283111b304014e04bb21dff90540',
        sha1: '2e0af6cb5fa63688e9b0f771b84c6dd92831c277',
        sha256:
          '28b5289793e7df28ce3b07f2cd4106010fffd8d94dc9dfc3a9d04242963cf966',
      },
      dob: {
        date: '1974-12-06T19:07:22.302Z',
        age: 48,
      },
      registered: {
        date: '2002-06-04T06:25:58.550Z',
        age: 20,
      },
      phone: '016977 6022',
      cell: '0770-576-172',
      id: {
        name: 'NINO',
        value: 'JN 72 21 19 A',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/66.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/66.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/66.jpg',
      },
      nat: 'GB',
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Michael',
        last: 'Rolland',
      },
      location: {
        street: {
          number: 7214,
          name: 'Avenue Debourg',
        },
        city: 'Ellikon an der Thur',
        state: 'Aargau',
        country: 'Switzerland',
        postcode: 2696,
        coordinates: {
          latitude: '-51.8734',
          longitude: '-77.2152',
        },
        timezone: {
          offset: '+5:00',
          description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
        },
      },
      email: 'michael.rolland@example.com',
      login: {
        uuid: 'aeab040a-d7ea-4f2a-ae51-b3603fe41269',
        username: 'goldenbird744',
        password: 'tester',
        salt: 'ZE6O8iO6',
        md5: 'fae818585a431b4dc95957cfe0b9e5e5',
        sha1: 'd0d711ab475db5950784cc95a8980809bc59786b',
        sha256:
          '47b7e6a55dd341e6754a2439214eeb9f615b2008e777c1463f7566b3fbb148fd',
      },
      dob: {
        date: '1957-01-15T15:12:57.500Z',
        age: 65,
      },
      registered: {
        date: '2009-06-07T08:53:30.430Z',
        age: 13,
      },
      phone: '079 820 13 52',
      cell: '076 450 59 34',
      id: {
        name: 'AVS',
        value: '756.8563.4430.08',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/3.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/3.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
      },
      nat: 'CH',
    },
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Eloïse', last: 'Leroux' },
      location: {
        street: { number: 6415, name: "Rue de L'Abbé-Roger-Derry" },
        city: 'Rueil-Malmaison',
        state: 'Indre',
        country: 'France',
        postcode: 37815,
        coordinates: { latitude: '-5.2422', longitude: '58.5530' },
        timezone: {
          offset: '-8:00',
          description: 'Pacific Time (US & Canada)',
        },
      },
      email: 'eloise.leroux@example.com',
      login: {
        uuid: '49d2a9c7-427a-460a-86b4-b1a57bd86993',
        username: 'brownpanda180',
        password: 'renegade',
        salt: 'lBOAdOIy',
        md5: '736f5c4324eb69c251b46108472817ce',
        sha1: '8a14fa686255a2d94cc2b22bcc6296a19d17d152',
        sha256:
          '510a0e186ad2913c15eacbb4215f54c53f41c71f493a671c429f7da9ae3c15c5',
      },
      dob: { date: '1980-04-24T02:41:13.451Z', age: 42 },
      registered: { date: '2008-09-07T08:13:34.680Z', age: 14 },
      phone: '04-85-35-52-82',
      cell: '06-95-01-05-87',
      id: { name: 'INSEE', value: '2NNaN06144397 06' },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/43.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/43.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/43.jpg',
      },
      nat: 'FR',
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Gonzalo', last: 'Herrero' },
      location: {
        street: { number: 6610, name: 'Calle del Prado' },
        city: 'Castellón de la Plana',
        state: 'Islas Baleares',
        country: 'Spain',
        postcode: 96831,
        coordinates: { latitude: '-25.9283', longitude: '-48.4304' },
        timezone: { offset: '+3:30', description: 'Tehran' },
      },
      email: 'gonzalo.herrero@example.com',
      login: {
        uuid: '669ad2bf-de0f-420e-95fe-808b77294f38',
        username: 'yellowwolf585',
        password: 'evolutio',
        salt: 'Z5d7kc4f',
        md5: '3ca3f7b96f3931f08e73261f0bf75394',
        sha1: '7c270d7922247fcbd805d5ffd0234ea9cc362751',
        sha256:
          '458f034863902fd040a26199b28c0ad753a1584af75cd7efbabe21deec774020',
      },
      dob: { date: '1946-10-07T08:08:55.744Z', age: 76 },
      registered: { date: '2011-03-06T04:53:07.967Z', age: 11 },
      phone: '944-163-925',
      cell: '683-461-822',
      id: { name: 'DNI', value: '71252421-F' },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/73.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/73.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/73.jpg',
      },
      nat: 'ES',
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Carlos', last: 'Vicente' },
      location: {
        street: { number: 2435, name: 'Calle de Arturo Soria' },
        city: 'Torrejón de Ardoz',
        state: 'Asturias',
        country: 'Spain',
        postcode: 11266,
        coordinates: { latitude: '-15.8954', longitude: '-138.1985' },
        timezone: { offset: '-12:00', description: 'Eniwetok, Kwajalein' },
      },
      email: 'carlos.vicente@example.com',
      login: {
        uuid: '2f035e20-0f79-4543-8e3a-8621b63e938a',
        username: 'brownmouse604',
        password: 'theboss',
        salt: 'd9DKupod',
        md5: 'dea64d200a297a17ed71eca77436f210',
        sha1: '249315e1715cc35e41358787a90db98258978f96',
        sha256:
          'fa7a32051771eb760dfaed878e46ae2a79311591dcc08c92155ba67908ae7b98',
      },
      dob: { date: '1966-08-23T16:41:32.981Z', age: 56 },
      registered: { date: '2005-05-20T21:25:51.539Z', age: 17 },
      phone: '973-195-256',
      cell: '661-713-696',
      id: { name: 'DNI', value: '55382943-G' },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/8.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/8.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/8.jpg',
      },
      nat: 'ES',
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Aitor', last: 'Cano' },
      location: {
        street: { number: 5604, name: 'Calle de Toledo' },
        city: 'Albacete',
        state: 'Melilla',
        country: 'Spain',
        postcode: 98289,
        coordinates: { latitude: '-17.6944', longitude: '-99.7331' },
        timezone: { offset: '+5:45', description: 'Kathmandu' },
      },
      email: 'aitor.cano@example.com',
      login: {
        uuid: '01c8a0df-390a-474b-83a9-91385c55e572',
        username: 'redlion659',
        password: 'camelot',
        salt: 'nKdQCqTG',
        md5: '0fd334c967aa741be123b03758ffcf48',
        sha1: '1884b1e1d6bc55610001446e6bcc82e92b81d785',
        sha256:
          'e5705e7c24c0700c4fd1f27addfbac521533b452bcc33b083348718077ae0c55',
      },
      dob: { date: '1948-09-26T21:07:12.386Z', age: 74 },
      registered: { date: '2006-02-28T02:03:10.160Z', age: 16 },
      phone: '937-339-341',
      cell: '631-749-099',
      id: { name: 'DNI', value: '61420235-K' },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/50.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/50.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
      },
      nat: 'ES',
    },
    {
      gender: 'female',
      name: { title: 'Mrs', first: 'Eden', last: 'Wood' },
      location: {
        street: { number: 6311, name: 'Bank Street' },
        city: 'Whangarei',
        state: 'Bay of Plenty',
        country: 'New Zealand',
        postcode: 36073,
        coordinates: { latitude: '61.0419', longitude: '76.1157' },
        timezone: { offset: '+9:30', description: 'Adelaide, Darwin' },
      },
      email: 'eden.wood@example.com',
      login: {
        uuid: '3e6ea0f1-4431-40f2-bd6b-f3051fcea01d',
        username: 'redzebra297',
        password: 'harvard',
        salt: 'qogb8kR1',
        md5: '1a9b88cc5b6c3497c526b4ded60b3973',
        sha1: '2e3488d5d2df6f3bf4b3cbe8bfe6503a565bea1e',
        sha256:
          '7dee47450d641a2b98ac6b15a006333fd10f14fe733a7d674946383576979a96',
      },
      dob: { date: '1944-11-03T00:48:45.781Z', age: 78 },
      registered: { date: '2007-11-12T10:00:26.213Z', age: 15 },
      phone: '(989)-601-8330',
      cell: '(123)-386-4708',
      id: { name: '', value: null },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/9.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/9.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/9.jpg',
      },
      nat: 'NZ',
    },
    {
      gender: 'female',
      name: { title: 'Madame', first: 'Stella', last: 'Dumont' },
      location: {
        street: { number: 347, name: 'Avenue du Château' },
        city: 'Oftringen',
        state: 'Schaffhausen',
        country: 'Switzerland',
        postcode: 9116,
        coordinates: { latitude: '-52.2019', longitude: '7.8670' },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca',
        },
      },
      email: 'stella.dumont@example.com',
      login: {
        uuid: 'e38700a9-e3c9-495c-bded-0e8228e2bcea',
        username: 'ticklishbear900',
        password: 'underwear',
        salt: 'lYMLvWU2',
        md5: 'a6751187f7cec947a2249db015009f46',
        sha1: 'fb9e4a97e3c728cc4b3d16f8560180d226bf16b6',
        sha256:
          '827e59637e0b559eb569a5d46884235e857281d200e4a5c19215b763538bacac',
      },
      dob: { date: '1971-09-21T14:35:17.768Z', age: 51 },
      registered: { date: '2004-10-30T18:17:40.847Z', age: 18 },
      phone: '075 778 66 25',
      cell: '078 638 67 94',
      id: { name: 'AVS', value: '756.6654.3390.29' },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/15.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/15.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/15.jpg',
      },
      nat: 'CH',
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Çetin', last: 'Tokatlıoğlu' },
      location: {
        street: { number: 4702, name: 'Talak Göktepe Cd' },
        city: 'Malatya',
        state: 'İzmir',
        country: 'Turkey',
        postcode: 71410,
        coordinates: { latitude: '75.2082', longitude: '-136.6028' },
        timezone: {
          offset: '+11:00',
          description: 'Magadan, Solomon Islands, New Caledonia',
        },
      },
      email: 'cetin.tokatlioglu@example.com',
      login: {
        uuid: '3cf7486a-62a3-4301-a559-7265c3663c99',
        username: 'goldenlion538',
        password: 'fingerig',
        salt: 'xhPonae6',
        md5: 'bf60a09adb9793bfa3fdd5f68327bc20',
        sha1: 'eb2d7e5071dc9265b61553afb77f2ad49cfa522c',
        sha256:
          'fd402edb3a3fe014833ceebb9d5fc7ef907f93ca6592da3469c7e71d177769b0',
      },
      dob: { date: '1953-10-18T02:56:00.570Z', age: 69 },
      registered: { date: '2009-08-12T01:12:04.722Z', age: 13 },
      phone: '(724)-427-5649',
      cell: '(915)-355-7142',
      id: { name: '', value: null },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/31.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/31.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/31.jpg',
      },
      nat: 'TR',
    },
  ];

  countries: any[] = ['All list'];
  ngOnInit(): void {
    this.users.filter((item) => {
      if (this.countries.includes(item.location.country)) {
        return 'null';
      } else {
        this.countries.push(item.location.country);
      }
      return this.countries;
    });
    this.users.forEach(
      (user) =>
        (user.fullId = (user.id.name + user.id.value)
          .toLowerCase()
          .replace(/\s/g, ''))
    );
  }

  showCountryOptions: boolean = false;
  showNumberInput: boolean = false;
  showIdInput: boolean = false;
  toggle(e: Event) {
    let element = (<HTMLSelectElement>e.target).value;
    console.log(element);
    switch (element) {
      case 'country':
        this.showCountryOptions = true;
        this.showNumberInput = false;
        this.showIdInput = false;
        break;
      case 'age-more-than':
        this.showNumberInput = true;
        this.showCountryOptions = false;
        this.searchValue = 0;
        this.showIdInput = false;
        break;
      case 'age-less-than':
        this.showNumberInput = true;
        this.showCountryOptions = false;
        this.searchValue = 0;
        this.showIdInput = false;
        break;
      case 'search-by-id':
        this.showIdInput = true;
        this.showCountryOptions = false;
        this.showNumberInput = false;
        this.searchValue = '';
        break;
      case 'age-descending':
        this.showIdInput = false;
        this.showCountryOptions = false;
        this.showNumberInput = false;
        break;
      case 'age-ascending':
        this.showIdInput = false;
        this.showCountryOptions = false;
        this.showNumberInput = false;
        break;
      case 'ID-is-null':
        this.showIdInput = false;
        this.showCountryOptions = false;
        this.showNumberInput = false;
        break;
      case 'latitude':
        this.showIdInput = false;
        this.showCountryOptions = false;
        this.showNumberInput = false;
        break;
      case 'longitude':
        this.showIdInput = false;
        this.showCountryOptions = false;
        this.showNumberInput = false;
        break;
    }
  }
}
