const text = "GUILTY AS SIN";
const typingElement = document.getElementById("typing");

(function () {
  'use strict';

  var MUSIC_LINKS = {
    kenchie: 'https://file.garden/avfrhhNmL46cQZyA/7669282743850781965-Tikdown.net.mp3',
    iyah: '',
    kaeri: '',
    cozy: '',
    lexi: '',
    ira: '',
    ciya: '',
    pyu: '',
    luzi: 'https://file.garden/avfrhhNmL46cQZyA/7706619956040846598-Tikdown.net.mp3',
  };

  var MANAGEMENT = [
    {name:'Kenchie', role:'FOUNDER', music:MUSIC_LINKS.kenchie, discordId:'444393598621057054', handle:'@K0xz', management: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/k0xz.gif', bio:'They gonna crucify me anyway'},
    {name:'Iyah', role:'CO-FOUNDER', music:MUSIC_LINKS.iyah, discordId:'1208365640612712498', handle:'@Iyah', management: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/67.jpeg', bio:'six sevennnnnnnnnnnnn'},
    {name:'Kaeri', role:'HEAD ADMIN', music:MUSIC_LINKS.kaeri, discordId:'1213125111981543524', handle:'@Kaeri', management: true, banner: '', bio:''},
    {name:'Cozy', role:'HEAD ADMIN', music:MUSIC_LINKS.cozy, discordId:'1456894512419967080', handle:'@Cozy', management: true, banner: '', bio:''},
    {name:'Lexi', role:'ADMIN', music:MUSIC_LINKS.lexi, discordId:'1228011743175901316', handle:'@Lexi', management: true, banner: '', bio:''},
    {name:'Ira', role:'ADMIN', music:MUSIC_LINKS.ira, discordId:'830411307668340756', handle:'@Ira', management: true, banner: '', bio:''},
    {name:'Ciya', role:'ADMIN', music:MUSIC_LINKS.ciya, discordId:'1222819470964297759', handle:'@Ciya', management: true,  banner: 'https://file.garden/avfrhhNmL46cQZyA/kitkat.gif', bio:''},
    {name:'Pyu', role:'ADMIN', music:MUSIC_LINKS.pyu, discordId:'762562739368362006', handle:'@Pyu', management: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/8F3E6526-89C2-4F65-B2D2-F083627D4A55.gif', bio:''},
    {name:'Luzi', role:'DISCIPLINARY ADMIN', music:MUSIC_LINKS.luzi, discordId:'765797439629164564', handle:'@Luzi', management: true, banner: 'https://file.garden/avfrhhNmL46cQZyA/ken1.gif', bio:'i have come to you with men who love death as you love life '},
    ];

 
  var MEMBERS = MANAGEMENT;

  var COMMUNITY_MEMBERS = [
    {
       name: 'Ace',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png', 
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Adam',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Aiz',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
      name: 'Ali',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
        {
       name: 'Amaya',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
       name: 'Arc',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Arv',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Aster',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Atreus',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Athena',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
        {
       name: 'Belle',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
       name: 'Bria',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
      name: 'Bry',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Canton',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Carlo',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png ',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Cez',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
        {
       name: 'Chami',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Cho',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Clove',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Czae',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
       name: 'Calm',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
      name: 'Darl',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Deejay',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Dice',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Drei',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Daf',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
      name: 'Dro',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Drew',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Enya',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
      name: 'Exo',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Flonn',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Guts',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
      name: 'Hara',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
        {
       name: 'Haze',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Insomnia',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Ivo',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Jahseh',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Jas',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Josh',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Kaia',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
    {
       name: 'Kazu',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Kaii',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Kiele',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Kel',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
       name: 'Kel',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
    {
      name: 'Kent',
      role: 'MEMBER',
      banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
      avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
        {
       name: 'Kevs',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Kez',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
      {
       name: 'Kia',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Kid',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Kise',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Kiyo',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Kren',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Krows',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Kuting',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Kuz',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Kwene',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Kyu',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Lao',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Laz',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Lia',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Liu',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Lucy',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Lynyx',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Mer',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Mrko',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Nat',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Nasty',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Naza',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Noks',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Oze',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Palmsu',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Pat',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Quenne',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    }, {
       name: 'Raze',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Reeve',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Ret',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Revy',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Riz',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Rex',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Rusa',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Russ',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Seraphim',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Snow',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'San',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Spiderman',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Sanity',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Synx',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Sychie',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Sheng',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Sion',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Saiki',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Tiney',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Teri',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Tokwa',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Teya',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Uno',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Wes',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Wes',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Wona',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Wayne',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Xi',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Xia',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Xyeli',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Yang',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Yin',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Yazi',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'You',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Zi',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },
     {
       name: 'Zhive',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/boy'
    },
     {
       name: 'Zumi',
       role: 'MEMBER',
       banner: 'https://file.garden/avfrhhNmL46cQZyA/aa.png',
       avatar: 'https://file.garden/avfrhhNmL46cQZyA/girl'
    },

  ];

  MEMBERS.forEach(function (member) {
    if (!member.role) member.role = 'Management';
  });

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];
    });
  }
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function displayName(management, data) {
    var u = data && data.discord_user;
    if (u) {
      var n = u.global_name || u.display_name || u.username;
      if (n && String(n).trim()) return n;
    }
    return management ? management.name : '';
  }

  function decoUrl(user) {
    if (!user) return null;
    var d = user.avatar_decoration_data;
    var asset = (d && d.asset) ? d.asset : (user.avatar_decoration || null);
    if (!asset) return null;
    return 'https://cdn.discordapp.com/avatar-decoration-presets/' + asset + '.png';
  }

  function applyDeco(img, user) {
    if (!img) return;
    var url = decoUrl(user);
    if (url) {
      if (img.getAttribute('src') !== url) img.src = url;
      img.classList.add('is-on');
    } else {
      img.removeAttribute('src');
      img.classList.remove('is-on');
    }
  }

  function customStatusText(data) {
    if (!data || !Array.isArray(data.activities)) return '';
    for (var i = 0; i < data.activities.length; i++) {
      var a = data.activities[i];
      if (a && a.type === 4) {
        var emoji = a.emoji && a.emoji.name ? a.emoji.name + ' ' : '';
        var state = a.state || '';
        return (emoji + state).trim();
      }
    }
    return '';
  }

  function bioText(member, data) {
    var custom = customStatusText(data);
    if (custom) return custom;
    return member && member.bio ? member.bio : '';
  }

  var views = {
    '/':             document.getElementById('view-home'),
    '/management':   document.getElementById('view-management'),
    '/members':      document.getElementById('view-members')
  };
  var navLinks = document.querySelectorAll('[data-route]');


  (function initBrandSwitcher() {
    var brand = document.getElementById('brandSwitcher');
    if (!brand) return;
    window.setInterval(function () {
      brand.classList.toggle('is-logo');
      brand.setAttribute('aria-label', brand.classList.contains('is-logo') ? 'Guilty as Sin logo — home' : 'Guilty as Sin home');
    }, 2000);
  }());

  var activeRoute = null;

  function currentRoute() {
    var rawHash = location.hash.replace(/^#/, '');
    if (!rawHash) return activeRoute || '/';
    var h = rawHash;
    if (h === '/') return '/';
    if (h === '/management' || h === '/manage') return '/management';
    if (h === '/members' || h === '/mem') return '/members';

    return activeRoute || '/';
  }

  function renderMembersDirectory() {
    var target = document.getElementById('membersDirectory');
    if (!target) return;

    // Render every person in COMMUNITY_MEMBERS. The grid grows
    // automatically into additional rows; there is no 36-card limit.
    target.innerHTML = COMMUNITY_MEMBERS.map(function (member, index) {
      member = member || {};
      var banner = member.banner
        ? '<img src="' + escapeHTML(member.banner) + '" alt="" loading="lazy">'
        : '';
      var avatar = member.avatar
        ? '<img class="directory-avatar" src="' + escapeHTML(member.avatar) + '" alt="" loading="lazy">'
        : '<div class="directory-avatar directory-avatar-empty" aria-hidden="true"></div>';
      var info = '<div class="directory-info">' +
        '<h2>' + escapeHTML(member.name || '') + '</h2>' +
        '<span class="directory-role">' + escapeHTML(member.role || 'MEMBER') + '</span>' +
        '</div>';

      return '<article class="directory-card" style="--card-index:' + (index % 20) + '">' +
        '<div class="directory-banner">' + banner + '</div>' +
        avatar + info +
      '</article>';
    }).join('');

    target.dataset.ready = 'true';
  }

  function applyRoute() {
    var r = currentRoute();
    var routeChanged = r !== activeRoute;
    activeRoute = r;
    Object.keys(views).forEach(function (k) {
      views[k].classList.toggle('active', k === r);
    });
    navLinks.forEach(function (a) {
      var on = a.getAttribute('data-route') === r && a.hasAttribute('data-nav');
      if (on) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.title = r === '/management' ? 'GUILTY AS SIN ' : (r === '/members' ? 'GUILTY AS SIN ' : 'GUILTY AS SIN');
    if (r === '/management') {
      renderPresence();
      connectSocket();
    }
    if (r === '/members') renderMembersDirectory();
    if (routeChanged) {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }

  window.addEventListener('hashchange', applyRoute);
  window.addEventListener('popstate', applyRoute);

  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  var themeIcon = document.getElementById('themeIcon');
  var MOON = ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'];
  var SUN  = ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z','M12 2v2','M12 20v2','M4.93 4.93l1.41 1.41','M17.66 17.66l1.41 1.41','M2 12h2','M20 12h2','M4.93 19.07l1.41-1.41','M17.66 6.34l1.41-1.41'];

  function renderThemeIcon() {
    var paths = root.classList.contains('light') ? SUN : MOON;
    if (themeIcon) themeIcon.innerHTML = paths.map(function (d) { return '<path d="' + d + '"></path>'; }).join('');
  }
  function setTheme(t) {
    root.classList.toggle('light', t === 'light');
    root.classList.toggle('dark', t !== 'light');
    root.style.colorScheme = t === 'light' ? 'light' : 'dark';
    try { localStorage.setItem('theme', t); } catch (e) {}
    renderThemeIcon();
  }
  renderThemeIcon();
  if (themeBtn) themeBtn.addEventListener('click', function () {
    setTheme(root.classList.contains('light') ? 'dark' : 'light');
  });

  var menuBtn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  function closeMenu() { menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 768) closeMenu(); });

  var bgMusic   = document.getElementById('bgMusic');
  var musicBtn  = document.getElementById('musicBtn');
  var musicIcon = document.getElementById('musicIcon');
  var NOTE_ON   = '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>';
  var NOTE_OFF  = NOTE_ON + '<line x1="2" y1="2" x2="22" y2="22"></line>';
  var siteMusicSrc = 'https://file.garden/avfrhhNmL46cQZyA/Taylor%20Swift%20-%20Guilty%20as%20Sin%20(Official%20Lyric%20Video)%20-%20Taylor%20Swift.mp3';
  var currentMusicMode = 'site';
  var currentMemberMusic = null;
  var musicWanted = false;

  try { musicWanted = localStorage.getItem('music') === 'on'; } catch (e) {}

  function renderMusicIcon() {
    if (!musicIcon || !musicBtn) return;
    var playing = bgMusic && !bgMusic.paused;
    musicIcon.innerHTML = playing ? NOTE_ON : NOTE_OFF;
    musicBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    musicBtn.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
    musicBtn.title = playing ? 'Pause background music' : 'Play background music';
  }

  function setMusicSource(src, mode, shouldPlay) {
    if (!bgMusic || !src) return;
    currentMusicMode = mode;
    bgMusic.onerror = null;
    bgMusic.pause();
    if (bgMusic.getAttribute('src') !== src) {
      bgMusic.setAttribute('src', src);
      bgMusic.load();
    }
    if (shouldPlay) tryPlayMusic();
    else renderMusicIcon();
  }

  function tryPlayMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.35;
    var p = bgMusic.play();
    if (p && typeof p.then === 'function') {
      p.then(function () {
        renderMusicIcon();
        try { localStorage.setItem('music', 'on'); } catch (e) {}
      }).catch(function () { renderMusicIcon(); });
    }
  }

  function playSelectedMemberMusic(member) {
    if (!bgMusic || !member) return;
    var memberTrack = member.music;
    currentMemberMusic = memberTrack || null;
    if (!memberTrack) {
      setMusicSource(siteMusicSrc, 'site', !bgMusic.paused || musicWanted);
      return;
    }


    setMusicSource(memberTrack, 'member', true);
    bgMusic.onerror = function () {
      bgMusic.onerror = null;
      currentMemberMusic = null;
      setMusicSource(siteMusicSrc, 'site', true);
    };
  }

  if (bgMusic && musicBtn) {
    renderMusicIcon();
    musicBtn.addEventListener('click', function () {
      if (bgMusic.paused) {
        musicWanted = true;
        tryPlayMusic();
      } else {
        musicWanted = false;
        bgMusic.pause();
        renderMusicIcon();
        try { localStorage.setItem('music', 'off'); } catch (e) {}
      }
    });
    bgMusic.addEventListener('play', renderMusicIcon);
    bgMusic.addEventListener('pause', renderMusicIcon);

    // The site-wide song is the default until a member is selected.
    if (bgMusic.getAttribute('src') !== siteMusicSrc) {
      bgMusic.setAttribute('src', siteMusicSrc);
    }
    var startEntranceMusic = false;
    try {
      startEntranceMusic = sessionStorage.getItem('alfarsiStartEntranceMusic') === 'yes';
      if (startEntranceMusic) sessionStorage.removeItem('alfarsiStartEntranceMusic');
    } catch (e) {}
    if (musicWanted || startEntranceMusic) tryPlayMusic();
  }

  function buildHallOfFame() {
    var fameGrid = document.getElementById('fameGrid');
    if (!fameGrid) return;

    var fameMembers = MEMBERS.filter(function(m) { return m.hall === true; });

    fameGrid.innerHTML = fameMembers.map(function(m, i) {
      var bgSrc = m.banner ? m.banner : 'https://cdn.discordapp.com/embed/avatars/0.png';
      var avatarSrc = 'https://cdn.discordapp.com/embed/avatars/0.png';

      return '<div class="fame-card fade-up" style="animation-delay:' + (i * 100) + 'ms" data-name="' + escapeHTML(m.name) + '">' +
        '<img class="fame-card-bg" src="' + escapeHTML(bgSrc) + '" alt="" loading="lazy">' +
        '<div class="fame-card-overlay"></div>' +
        '<div class="fame-card-content">' +
          '<div class="fame-card-header">' +
            '<div class="fame-card-avatar-wrap">' +
              '<img class="fame-card-avatar" src="' + avatarSrc + '" alt="' + escapeHTML(m.name) + '">' +
              '<img class="avatar-deco" alt="" aria-hidden="true">' +
            '</div>' +
            '<div class="fame-card-text">' +
              '<h3 class="fame-card-name">' + escapeHTML(m.name) + '</h3>' +
              '<p class="fame-card-handle">' + escapeHTML(m.handle) + '</p>' +
            '</div>' +
          '</div>' +
          '<p class="fame-card-bio">' + escapeHTML(m.bio) + '</p>' +
          '<div class="fame-card-tags">' +
            '<div class="fame-card-tag"></div>' +
            '<div class="fame-card-tag"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  var showcase = document.getElementById('showcase');
  var carousel = document.getElementById('carousel');
  var rail = document.getElementById('rail');
  var gridView = document.getElementById('gridView');
  var idAvatar = document.getElementById('identityAvatar');
  var idDeco = document.getElementById('identityDeco');
  var idName = document.getElementById('identityName');
  var idHandle = document.getElementById('identityHandle');
  var idRole = document.getElementById('identityRole');
  var idBio = document.getElementById('identityBio');
  var viewSingle = document.getElementById('viewSingle');
  var viewGrid = document.getElementById('viewGrid');

  var index = 0;
  var total = MEMBERS.length;

  function buildCarousel() {
    carousel.innerHTML = MEMBERS.map(function (m, i) {
      var cached = presenceCache[m.name];
      var user = cached && cached.discord_user;
      var initialImg = m.banner || (user ? (getBannerUrl(user.id, user.banner) || getAvatarUrl(user.id, user.avatar)) : 'https://cdn.discordapp.com/embed/avatars/0.png');
      return '<div class="carousel-card" data-index="' + i + '" role="option" aria-selected="' + (i === index) + '">' +
        '<div class="card-overlay"></div>' +
        '<span class="card-label">' + escapeHTML(m.name.toUpperCase() + ' - ' + (m.role || 'MANAGEMENT')) + '</span>' +
        '<div class="card-presence" data-status="offline"><span class="dot"></span><span class="presence-label">Offline</span></div>' +
        '<img src="' + initialImg + '" alt="' + m.name + '">' +
      '</div>';
    }).join('');
  }

  function updatePositions() {
    var cards = carousel.querySelectorAll('.carousel-card');
    cards.forEach(function (card, i) {
      var diff = i - index;
      var pos;
      if (diff === 0) pos = '0';
      else if (diff === 1) pos = '1';
      else if (diff === -1) pos = '-1';
      else if (diff === 2) pos = '2';
      else if (diff === -2) pos = '-2';
      else pos = 'hidden';

      if (pos === 'hidden') {
        card.setAttribute('data-pos', 'hidden');
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.transform = 'translate(-50%,-50%) rotateY(-12deg) rotateX(4deg) translateZ(-500px)';
        card.style.zIndex = '0';
        return;
      }
      card.style.opacity = '';
      card.style.transform = '';
      card.style.zIndex = '';
      card.setAttribute('data-pos', pos);
      card.style.pointerEvents = (pos === '0') ? 'auto' : 'none';
      card.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    var m = MEMBERS[index];
    idName.textContent = displayName(m, presenceCache[m.name]);
    idHandle.textContent = m.handle;
    idRole.textContent = m.role || (m.management ? 'Management' : 'Member');

    renderPresence();

    var steps = rail.querySelectorAll('.rail-step');
    steps.forEach(function (s, i) {
      var on = i === index;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) {
        var rTop = rail.scrollTop;
        var rBottom = rTop + rail.clientHeight;
        var sTop = s.offsetTop;
        var sBottom = sTop + s.offsetHeight;
        if (sTop < rTop) rail.scrollTop = sTop - 8;
        else if (sBottom > rBottom) rail.scrollTop = sBottom - rail.clientHeight + 8;
      }
    });
  }

  function buildRail() {
    rail.innerHTML = MEMBERS.map(function (m, i) {
      return '<button class="rail-step' + (i === index ? ' is-active' : '') + '" type="button" role="tab" aria-label="Go to ' + m.name + '" aria-selected="' + (i === index) + '"><span>' + pad(i + 1) + '</span></button>';
    }).join('');
    rail.querySelectorAll('.rail-step').forEach(function (btn, i) {
      btn.addEventListener('click', function () { goTo(i); });
    });
  }
  
  console.log("reverse engineering is a crime, but resu did it anyway..");

  function buildGrid() {
    gridView.innerHTML = MEMBERS.map(function (m) {
      return '<article class="grid-card" data-name="' + m.name + '">' +
        '<div class="grid-presence" data-status="offline"><span class="dot"></span><span class="grid-presence-label">Offline</span></div>' +
        '<div class="avatar-wrapper">' +
          '<img class="avatar" src="https://cdn.discordapp.com/embed/avatars/0.png" alt="' + m.name + '">' +
          '<img class="avatar-deco" alt="" aria-hidden="true">' +
        '</div>' +
        '<h3 class="member-name">' + m.name + '</h3>' +
        '<p class="member-role">' + m.role + '</p>' +
        '<p class="member-bio">' + m.bio + '</p>' +
      '</article>';
    }).join('');
  }

  function goTo(i) { index = (i + total) % total; updatePositions(); playSelectedMemberMusic(MEMBERS[index]); }
  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  document.addEventListener('keydown', function (e) {
    if (!views['/management'].classList.contains('active')) return;
    if (showcase.classList.contains('grid-mode')) return;
    if (e.target.matches('input, textarea, select')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
  });

  var startX = null, startY = null;
  showcase.addEventListener('touchstart', function (e) {
    if (showcase.classList.contains('grid-mode')) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  showcase.addEventListener('touchend', function (e) {
    if (startX === null || showcase.classList.contains('grid-mode')) return;
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
    else if (Math.abs(dy) > 45 && Math.abs(dy) > Math.abs(dx)) goTo(index + (dy < 0 ? 1 : -1));
    startX = null; startY = null;
  }, { passive: true });

  // --- SCROLL-TO-NAVIGATE FOR THE WHOLE MEMBERS PAGE ---
  // Scroll anywhere on the page to advance members. One scroll gesture = one member.
  var scrollAccum = 0;
  var scrollIdleTimer = null;
  var SCROLL_THRESHOLD = 80;

  function resetScrollAccumSoon() {
    if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(function () {
      scrollAccum = 0;
    }, 200);
  }

  window.addEventListener('wheel', function (e) {
    if (activeRoute !== '/management' || !views['/management'].classList.contains('active')) return;
    if (showcase.classList.contains('grid-mode')) return;

    // Keep wheel gestures inside the member carousel; never let them trigger
    // browser/page navigation or an accidental fragment change.
    e.preventDefault();
    e.stopPropagation();
    scrollAccum += e.deltaY;

    if (Math.abs(scrollAccum) >= SCROLL_THRESHOLD) {
      if (scrollAccum > 0) next();
      else prev();
      scrollAccum = 0;
    }
    resetScrollAccumSoon();
  }, { passive: false });

  function setView(mode) {
    var isGrid = mode === 'grid';
    showcase.classList.toggle('grid-mode', isGrid);
    viewGrid.classList.toggle('is-active', isGrid);
    viewSingle.classList.toggle('is-active', !isGrid);
    viewGrid.setAttribute('aria-pressed', isGrid ? 'true' : 'false');
    viewSingle.setAttribute('aria-pressed', isGrid ? 'false' : 'true');
    try { localStorage.setItem('membersView', mode); } catch (e) {}
    renderPresence();
  }
  viewGrid.addEventListener('click', function () { setView('grid'); });
  viewSingle.addEventListener('click', function () { setView('single'); });

  var LANYARD_REST_BASE = 'https://api.lanyard.rest/v1/users/';
  var LANYARD_SOCKET_URL = 'wss://api.lanyard.rest/socket';

  var presenceCache = {};
  var socket = null;
  var heartbeatTimer = null;
  var reconnectTimer = null;
  var gotInit = false;

  function isPlaceholder(id) {
    return !id || id.indexOf('REPLACE_WITH') === 0;
  }

  function getAvatarUrl(userId, hash) {
    if (!hash) return 'https://cdn.discordapp.com/embed/avatars/0.png';
    var ext = hash.startsWith('a_') ? 'gif' : 'png';
    return 'https://cdn.discordapp.com/avatars/' + userId + '/' + hash + '.' + ext + '?size=512';
  }

  function getBannerUrl(userId, hash) {
    if (!hash) return null;
    var ext = hash.startsWith('a_') ? 'gif' : 'png';
    return 'https://cdn.discordapp.com/banners/' + userId + '/' + hash + '.' + ext + '?size=600';
  }

  function statusLabel(s) {
    if (s === 'online') return 'Online';
    if (s === 'idle') return 'Idle';
    if (s === 'dnd') return 'Do Not Disturb';
    return 'Offline';
  }

  function activityLabel(data) {
    if (!data) return null;

    if (data.listening_to_spotify && data.spotify) {
      return {
        type: 'spotify',
        text: data.spotify.song + ' — ' + data.spotify.artist,
        icon: data.spotify.album_art_url
      };
    }

    var acts = data.activities;
    if (!acts || !acts.length) return null;

    var a = acts[0];
    var prefix = a.type === 0 ? 'Playing'
               : a.type === 1 ? 'Streaming'
               : a.type === 2 ? 'Listening'
               : a.type === 3 ? 'Watching'
               : a.type === 5 ? 'Competing'
               : 'Doing';
    return {
      type: 'activity',
      text: prefix + ' ' + (a.name || ''),
      icon: null
    };
  }

  function memberFromId(userId) {
    for (var i = 0; i < MEMBERS.length; i++) {
      if (MEMBERS[i].discordId === userId) return MEMBERS[i];
    }
    return null;
  }

  function fetchPresenceREST(name) {
    var member = MEMBERS.find(function(m) { return m.name === name; });
    if (!member || isPlaceholder(member.discordId)) return Promise.resolve(null);

    return fetch(LANYARD_REST_BASE + member.discordId)
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.success && j.data) {
          presenceCache[name] = j.data;
          return j.data;
        }
        return null;
      })
      .catch(function () { return null; });
  }

  function fetchAllREST() {
    return Promise.all(MEMBERS.map(function (m) { return fetchPresenceREST(m.name); }))
      .then(function () { renderPresence(); });
  }

  function connectSocket() {
    if (socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)) return;

    var ids = MEMBERS.map(function (m) { return m.discordId; })
                     .filter(function (id) { return !isPlaceholder(id); });
    if (!ids.length) return;

    gotInit = false;
    socket = new WebSocket(LANYARD_SOCKET_URL);

    var initTimeout = setTimeout(function () {
      if (!gotInit) fetchAllREST();
    }, 5000);

    socket.onopen = function () {
      socket.send(JSON.stringify({ op: 2, d: { subscribe_to_ids: ids } }));
    };

    socket.onmessage = function (event) {
      var msg;
      try { msg = JSON.parse(event.data); } catch (e) { return; }

      if (msg.op === 1 && msg.d && msg.d.heartbeat_interval) {
        if (heartbeatTimer) clearInterval(heartbeatTimer);
        heartbeatTimer = setInterval(function () {
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ op: 3 }));
          }
        }, msg.d.heartbeat_interval);
      }

      if (msg.op === 0 && msg.t === 'INIT_STATE') {
        gotInit = true;
        clearTimeout(initTimeout);
        var map = msg.d || {};
        Object.keys(map).forEach(function (userId) {
          var member = memberFromId(userId);
          if (member) presenceCache[member.name] = map[userId];
        });
        renderPresence();
      }

      if (msg.op === 0 && msg.t === 'PRESENCE_UPDATE') {
        var userId = msg.d && msg.d.user_id;
        if (!userId) return;
        var member = memberFromId(userId);
        if (member) {
          presenceCache[member.name] = msg.d;
          renderPresence();
        }
      }
    };

    socket.onclose = function () {
      socket = null;
      clearTimeout(initTimeout);
      if (heartbeatTimer) { clearInterval(heartbeatTimer); heartbeatTimer = null; }
      fetchAllREST();
      if (!reconnectTimer) {
        reconnectTimer = setTimeout(function () {
          reconnectTimer = null;
          connectSocket();
        }, 10000);
      }
    };

    socket.onerror = function () {
      if (socket) socket.close();
    };
  }

  function renderPresence() {
    document.querySelectorAll('.fame-card').forEach(function (card) {
      var name = card.getAttribute('data-name');
      var member = MEMBERS.find(function (m) { return m.name === name; });
      var data = presenceCache[name];
      var user = data && data.discord_user;

      var img = card.querySelector('.fame-card-avatar');
      if (img && user) img.src = getAvatarUrl(user.id, user.avatar);

      applyDeco(card.querySelector('.avatar-deco'), user);

      var nameEl = card.querySelector('.fame-card-name');
      if (nameEl && member) nameEl.textContent = displayName(member, data);

      var bioEl = card.querySelector('.fame-card-bio');
      if (bioEl && member) bioEl.textContent = bioText(member, data);
    });

    var m = MEMBERS[index];
    if (!m) return;
    var data = presenceCache[m.name];
    var status = data ? data.discord_status : 'offline';
    var user = data && data.discord_user;

    var dot = document.getElementById('identityDot');
    if (dot) { dot.setAttribute('data-status', status); dot.title = statusLabel(status); }

    if (user) {
      idAvatar.src = getAvatarUrl(user.id, user.avatar);
    } else {
      idAvatar.src = 'https://cdn.discordapp.com/embed/avatars/0.png';
    }

    applyDeco(idDeco, user);

    idName.textContent = displayName(m, data);

    if (idBio) idBio.textContent = bioText(m, data);

    var chip = document.getElementById('identityActivity');
    var chipIcon = document.getElementById('identityActivityIcon');
    var chipText = document.getElementById('identityActivityText');
    var act = data ? activityLabel(data) : null;

    if (act) {
      chip.classList.remove('hidden');
      chip.classList.toggle('spotify', act.type === 'spotify');
      chipText.innerHTML = '<span class="chip-label">' +
        (act.type === 'spotify' ? 'Spotify' : 'Activity') +
        '</span> · ' + escapeHTML(act.text);
      if (act.icon) { chipIcon.src = act.icon; chipIcon.style.display = ''; }
      else { chipIcon.style.display = 'none'; }
    } else {
      chip.classList.add('hidden');
    }

    // Keep every carousel card in sync with its own member. Updating only the
    // active card left placeholder Discord avatars on the cards behind it.
    carousel.querySelectorAll('.carousel-card').forEach(function (card) {
      var cardIndex = Number(card.getAttribute('data-index'));
      var cardMember = MEMBERS[cardIndex];
      if (!cardMember) return;

      var cardData = presenceCache[cardMember.name];
      var cardUser = cardData && cardData.discord_user;
      var cardImg = card.querySelector('img');

      if (cardImg) {
        var bannerUrl = cardMember.banner || (cardUser ? getBannerUrl(cardUser.id, cardUser.banner) : null);
        var imageUrl = bannerUrl || (cardUser ? getAvatarUrl(cardUser.id, cardUser.avatar) : 'https://cdn.discordapp.com/embed/avatars/0.png');
        if (cardImg.getAttribute('src') !== imageUrl) cardImg.src = imageUrl;
      }

      var badge = card.querySelector('.card-presence');
      if (badge) {
        var cardStatus = cardData ? cardData.discord_status : 'offline';
        badge.setAttribute('data-status', cardStatus);
        var label = badge.querySelector('.presence-label');
        if (label) label.textContent = statusLabel(cardStatus);
      }
    });

    gridView.querySelectorAll('.grid-card').forEach(function (gc) {
      var gName = gc.getAttribute('data-name');
      var gData = presenceCache[gName];
      var gStatus = gData ? gData.discord_status : 'offline';
      var gUser = gData && gData.discord_user;

      var gImg = gc.querySelector('.avatar');
      if (gImg) {
        if (gUser) {
          gImg.src = getAvatarUrl(gUser.id, gUser.avatar);
        } else {
          gImg.src = 'https://cdn.discordapp.com/embed/avatars/0.png';
        }
      }

      applyDeco(gc.querySelector('.avatar-deco'), gUser);

      var gNameEl = gc.querySelector('.member-name');
      var gMember = MEMBERS.find(function (x) { return x.name === gName; });
      if (gNameEl && gMember) gNameEl.textContent = displayName(gMember, gData);

      var gBioEl = gc.querySelector('.member-bio');
      if (gBioEl && gMember) gBioEl.textContent = bioText(gMember, gData);

      var gp = gc.querySelector('.grid-presence');
      if (gp) {
        gp.setAttribute('data-status', gStatus);
        var gl = gp.querySelector('.grid-presence-label');
        if (gl) gl.textContent = statusLabel(gStatus);
      }
    });
  }

  // Refresh stale Discord presence when the visitor returns to this tab.
  // This updates card contents in place and never reloads the document.
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'visible') return;
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      fetchAllREST();
      if (!reconnectTimer) connectSocket();
    }
  });

  buildHallOfFame();
  buildCarousel();
  buildRail();
  buildGrid();

  var savedView = null;
  try { savedView = localStorage.getItem('membersView'); } catch (e) {}
  if (savedView === 'grid') setView('grid');

  updatePositions();
  applyRoute();
})();
