const userPics = [
  'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
  'https://images.pexels.com/users/avatars/3446668/mountain-girl-382.jpeg?auto=compress&fit=crop&h=100&w=100&dpr=2',
  'https://images.pexels.com/users/avatars/221098896/virtual-girls-580.jpeg?auto=compress&fit=crop&h=100&w=100&dpr=2',
  'https://images.pexels.com/users/avatars/292690848/anna-r-884.jpeg?auto=compress&fit=crop&h=100&w=100&dpr=2',
  'https://images.pexels.com/users/avatars/74118496/bd-girls-417.jpeg?auto=compress&fit=crop&h=100&w=100&dpr=2',
  'https://images.pexels.com/users/avatars/174293552/soulja-girl-703.jpeg?auto=compress&fit=crop&h=100&w=100&dpr=2',
  'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1386603/pexels-photo-1386603.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export const getRandomUserPic = () => {
  const random = Math.floor(Math.random() * 10);
  return userPics[random];
};

export const generateRandomName = (): string => {
  const firstNames = [
    'Alex',
    'Jordan',
    'Taylor',
    'Morgan',
    'Casey',
    'Riley',
    'Jamie',
    'Drew',
    'Avery',
    'Parker',
    'Harper',
    'Emerson',
    'Skyler',
    'Dakota',
    'Rowan',
    'Logan',
    'Cameron',
    'Quinn',
    'Elliot',
    'Charlie',
    'Reese',
    'Sage',
    'Tatum',
    'Phoenix',
    'Hayden',
    'Blake',
    'Emery',
    'Lennox',
    'Finley',
    'Sloane',
    'Presley',
    'Landon',
  ];

  const lastNames = [
    'Smith',
    'Johnson',
    'Brown',
    'Taylor',
    'Anderson',
    'Lee',
    'Martin',
    'Walker',
    'Hall',
    'Allen',
    'Young',
    'King',
    'Wright',
    'Scott',
    'Green',
    'Adams',
    'Clark',
    'Turner',
    'Mitchell',
    'Campbell',
    'Carter',
    'Phillips',
    'Parker',
    'Evans',
    'Edwards',
    'Collins',
    'Stewart',
    'Morris',
    'Rogers',
    'Reed',
    'Cook',
    'Bailey',
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
};
