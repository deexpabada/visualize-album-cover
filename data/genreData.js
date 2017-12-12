//Genres
//Rock
var RockRedArtists = ["Queens of the Stone Age","Third Eye Blind","Aerosmith","The White Stripes"];
var RockOrangeArtists = [];
var RockYellowArtists = [];
var RockGreenArtists = ["Bishop Briggs","Donovan","ZZ Top","Motley Crue","Kid Rock","Aerosmith","The Offspring","The Doobie Brothers","Cream","Creedence Clearwater Revival","Anti-Flag","Weezer"];
var RockBlueArtists = ["Fall Out Boy","Nirvana","Weezer","The Beatles","The Smashing Pumpkins","The Who","AC/DC","The Killers","AWOLNATION","Led Zeppelin","The Killers","Green Day"];
var RockPurpleArtists = [];
var RockPinkArtists = [];
var RockBrownArtists = ["Led Zeppelin","Iron Maiden","Lit","The Doors","J. Roddy Walston & The Business","Pearl Jam","Jimi Hendrix","Jimi Hendrix","Ram Jam","Free","Royal Blood","David Bowie","The Rolling Stones","Blur","Stone Temple Pilots","Harvey Danger","Steppenwolf","Van Morrison","The Offspring","The Romantics","Green Day"];
var RockBlackArtists = ["Tom Waits","The White Stripes","Van Halen","Mötley Crüe","Van Halen","Guns N' Roses","Alice Cooper","Franz Ferdinand","Cold War Kids","Boston","Stevie Nicks","Fall Out Boy","X Ambassadors","Guns N' Roses","Pink Floyd","ZZ Top","T. Rex","AC/DC","Creedence Clearwater Revival","Motley Crue","Ozzy Osbourne"];
var RockWhiteArtists = ["Red Hot Chili Peppers","Queen","Golden Earring","Pink Floyd","Jet","The Black Keys","The Kinks","The Band","Dire Straits","Fleetwood Mac","Kings of Leon","Oasis"];
var RockBeigeArtists = ["Van Morrison","Kansas","Lynyrd Skynyrd","The Mamas & The Papas","Derek & The Dominos","The Rolling Stones","Alien Ant Farm","Cage The Elephant","Big Brother & The Holding Company"];
var RockGrayArtists = ["Seal","Led Zeppelin","Queen","Jane's Addiction","Steve Miller Band","Alabama Shakes","Green Day","Led Zeppelin","Creedence Clearwater Revival","The Doors","X Ambassadors","Nine Inch Nails","Whitesnake","Papa Roach","Red Hot Chili Peppers","Linkin Park","Violent Femmes","Buffalo Springfield","Weezer","3 Doors Down","Joe Walsh"];



var RockRedCovers = ["https://i.scdn.co/image/e1404c0c6126f62ae724dfa5d271d21feb624cbc","https://i.scdn.co/image/53e089d368f4ffe69ac66ef7acd03cf273db9f23","https://i.scdn.co/image/96f22afcf6eaf5d1a9deb873ee3586f0911b1c6b","https://i.scdn.co/image/0a11bb546557b3b02f02903476fe13f52a052ad1","https://i.scdn.co/image/ce2399f9d2078083c796baec06a4c8946104b2bf"];
var RockOrangeCovers = ["https://i.scdn.co/image/b7bde2a4f65587cd8855187d5f2fdf3f4536f444"];
var RockYellowCovers = [];
var RockGreenCovers = ["https://i.scdn.co/image/5a6ffa8082d067fa48ed5dbe4c4c528b9bb0a76a","https://i.scdn.co/image/fbf08c435581f1f35da79413ec1f4eb88b8505aa","https://i.scdn.co/image/972ec426477769d0cb5f442c0fa8aaacea11e6a5","https://i.scdn.co/image/52c4b2e93f533056a878fede107de09945fa18bf","https://i.scdn.co/image/807a6beda216f72e96e91e25fe248a8e0687bf73","https://i.scdn.co/image/c34dd22b96e2fe11f75a9db24d1a6a3382832f77","https://i.scdn.co/image/098e1f2c7932149607e373af1bf5a5c70c27bc81","https://i.scdn.co/image/9b0ebed40344b2b37fb644b57411a422f30693d0","https://i.scdn.co/image/c3216aca24876a4095338629315e634b3c05d0e7","https://i.scdn.co/image/5cd8a1457a89eaa4bad2fa5a537ff787cf9537f7","https://i.scdn.co/image/11f1844767f7268975ec0640b0f895ce325ac38e","https://i.scdn.co/image/60a7b8672c73d0d46e3233e41028af19ceae159c"];
var RockBlueCovers = ["https://i.scdn.co/image/1cd75171d6593fc4d9b59fdcfeb2d0577d660649","https://i.scdn.co/image/52b8f5143396bb96c5e801b2c05f7dd51acafb5e","https://i.scdn.co/image/0b5ec7a2f7999ab456f40337a7743c4a882f2531","https://i.scdn.co/image/b4b907579f0c68b81fa98e16478351bdcd943f94","https://i.scdn.co/image/5281fb40593e18fcacb40daac1d455dc1777e072","https://i.scdn.co/image/8ab74ab918a0cc8fd5799ddc6c0a90fbd1de7198","https://i.scdn.co/image/3b1f17f0694f9c3ddc8e126582123ea8a3f384d1","https://i.scdn.co/image/ae33d84ad5b1b47f5c7b73c63ca0f1fd4d131b84","https://i.scdn.co/image/8a26ae609b3454ae57066f0a6a3f673fbdfbb159","https://i.scdn.co/image/686ba2cb84fd5b12f9c2dbcca46434f93532157c","https://i.scdn.co/image/49d01f27dcf8f6bec2ba4f16038bd22e309ae2d0","https://i.scdn.co/image/2027dbfec96249cdc12ff804738898afce24a7a5"];
var RockPurpleCovers = [];
var RockPinkCovers = [];
var RockBrownCovers = ["https://i.scdn.co/image/71e6a72a1b3a00d2ddabee9a3e2d5ade3be25409","https://i.scdn.co/image/15651a052cd8ecdebeb11ca725bf4b9e812db9a1","https://i.scdn.co/image/30cfe67f0ba70692cf6eb2e684f6a99c895a3116","https://i.scdn.co/image/006e418c379a9417ebf9af0c67a2d17726aa1932","https://i.scdn.co/image/dac313078f7194d5573422bc92a18cecb0a23043","https://i.scdn.co/image/425e1fef6d70a48a103dfd168a556b7f72f72865","https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80","https://i.scdn.co/image/bf44daf8c3f35de83e5875bc49791c1347ef36f0","https://i.scdn.co/image/200552fdf350c8d8e007a1fb53dc2f5e6d3df53d","https://i.scdn.co/image/672f492296b5f8a3892af34029b644b4f2e1c96b","https://i.scdn.co/image/9ccf4a8669fcd328d7288d4232518cf0cc0747f8","https://i.scdn.co/image/c922785af159311ec7d149320087e26918d4c3ee","https://i.scdn.co/image/91117ff482243a9284058456abc97bd8bbfcec22","https://i.scdn.co/image/8598dd87ca83d963fb9c6295f42ebb883fbfd93f",
"https://i.scdn.co/image/ff71d87f1851d43bac44a37da93bcb2a21a7c103","https://i.scdn.co/image/a1202e3c454e45734adcb38e697992223cf1f1a9","https://i.scdn.co/image/7be9cbb0a86c5d3ce91310b2a5375190a6004ec6  ","https://i.scdn.co/image/f95935461bce5ff290d78e0bc68e8b1ffe8192b7","https://i.scdn.co/image/c3491a66365f5ab9b6729cfaced05fee06e30a93","https://i.scdn.co/image/80a1ff1574dbbd1d5a722b03395df8e5b9d41ab4","https://i.scdn.co/image/77b344205e5e42ab6ef4fd3fa6759ab4528ee2ea"];
var RockBlackCovers = ["https://i.scdn.co/image/8e653240017bbb3fba7313dfa4a887cc06a4a238","https://i.scdn.co/image/9e6d6908d0bffe5d6d58748d453f9f2e6181c2d1","https://i.scdn.co/image/f491552bd6193c4622f1b4235bdf8179911ed1b0","https://i.scdn.co/image/23f0e53e68858fe25ab574eca5821849496b45d4","https://i.scdn.co/image/9b312163180f5adb5901ba8ab8b1b25fd0740d66","https://i.scdn.co/image/8cb8c9552c65730a15302d7b74d38cbc14f6d7fb","https://i.scdn.co/image/0407568bb7145bba92427574d65a25430119210f","https://i.scdn.co/image/dcdbaf864f35cb4fdba68f82f5fe66c73f1d11a4","https://i.scdn.co/image/570650cb379f86234d2ad10bd7a443327979bc9d","https://i.scdn.co/image/98ae5260657d85788a079c68dcc4aa0ff698c61e","https://i.scdn.co/image/4ccbd042736d2ff4a4a5dab6131c075d1af0592b","https://i.scdn.co/image/63a37f32006eab70bd58c892e4098f2a84bb915e","https://i.scdn.co/image/886c0fe47aac8e31bcab118a182638e254372389","https://i.scdn.co/image/0fbe3c2ba5d231d626a60976b7f03d21526376f5",
"https://i.scdn.co/image/e5f5a50956c2c7dd5411051ca507b4f771d6d816","https://i.scdn.co/image/339704434b2733dbeb446472e588d03d5423084b","https://i.scdn.co/image/16f2cbdeacd1fb73f59618aa44cb943e96229b41","https://i.scdn.co/image/52d83377fe9d7fc838deeb859499f3973adf903f","https://i.scdn.co/image/eb97e6eb739f539a6eca14bde45cd6a4db75afdd","https://i.scdn.co/image/5cda02bec1450918ab920e84f034b06f45303058","https://i.scdn.co/image/3ef91e710ba04b2b1b1ae2e69aecbdd83b038424"];
var RockWhiteCovers = ["https://i.scdn.co/image/5e553d65e84fde60e3293ce2138a52e5f5b3ec10","https://i.scdn.co/image/afa7b61787f4ae5ea245b927aa301ab3a1f263c7","https://i.scdn.co/image/8bc868f685bffbef1e10da37b879e19022f713c7","https://i.scdn.co/image/61fbfc12c92752d2334547c00d5f13b8b7edba94","https://i.scdn.co/image/85ad2f58633be509d371f2ebda235c07fdd5a08e","https://i.scdn.co/image/7a8bb797da6d4c6c8b627135500a9db44a38f58f","https://i.scdn.co/image/5c77c792b83fe91d8023c03402573f4af9e53911","https://i.scdn.co/image/22f896de1f5d43ee19b339f263c2d02c7b53e182","https://i.scdn.co/image/a635106f337f4216c7c05f72e43aac71c89c9d77","https://i.scdn.co/image/df336667c74abdfe56835e54712cdea8acc55814","https://i.scdn.co/image/8efb25315084d6a01748deb0af455fa154775bda","https://i.scdn.co/image/a1eccc5f4b2158ed8c021ca5aaec245c87f300eb"];
var RockBeigeCovers = ["https://i.scdn.co/image/66f808e859993f0100fea78f37462ea8925f9ec2","https://i.scdn.co/image/4d8256cad24fce3afd07d4a3d21d379f00388dfc","https://i.scdn.co/image/df6d664c56fc929d07b9e0e60d83319d26dc82f0","https://i.scdn.co/image/7587959b71e16f93fe668464ecdd4dd0c7aa9923","https://i.scdn.co/image/84215dac3aff5e7060cbb1209fc63ba62f80a8d9","https://i.scdn.co/image/6212b0659d60bdd9b10ccd5976759e820fe9c864","https://i.scdn.co/image/3bf4181e5b2f4b3728fa39e502310bf074a34cfa","https://i.scdn.co/image/70149c6e3d436c62c97970f0c41f89012a718e58","https://i.scdn.co/image/3bd51bccab26a6bbed9ffc9e61cfa0bfa8a8d746"];
var RockGrayCovers = ["https://i.scdn.co/image/594340fd535de088674b20df30f1cc8d4cec8640","https://i.scdn.co/image/e4d437831cccc9967dc92726c59e855ac59d6abd","https://i.scdn.co/image/f55a6b339d3a4d4fc3a624d77f7ecb1c64930c99","https://i.scdn.co/image/10bcac84a08e89b4d890509584fc3e7b167f549f","https://i.scdn.co/image/1b2dea302aea0f4aba76f6c13fdd9981db14f050","https://i.scdn.co/image/c25c00b1924f3cc303377224a8a22aa46e7bfadc","https://i.scdn.co/image/927a0b3a207f999eaf94aa1f9b92b8900c95e014","https://i.scdn.co/image/5fa3a6cc1848ea743a293d2088046746d1b09608","https://i.scdn.co/image/b52c814ec03977643ecbb8f47a96e5705fed8d83","https://i.scdn.co/image/ced9e563b1c1fe9a9ae16ee615e1cc2aac4ae133","https://i.scdn.co/image/34b238f37cafaf4171334955a0bdf689b7d9b1d4","https://i.scdn.co/image/3b4b6c358ca5d3c362380fd7a78207a2c693ec29","https://i.scdn.co/image/a4d48364ab1b5a69b6d1b2e8ddf84e3ba5e6d96a","https://i.scdn.co/image/82a524741433e305f57cc8a69b824689bff536ad",
"https://i.scdn.co/image/5a6a1c6514398dc4004c6348a83d77694a3883d4","https://i.scdn.co/image/66ff51342a9b250bf5b998fd0ec8e977671468bc","https://i.scdn.co/image/e4f436716843d498bda75a0fb1792df79d3471cc","https://i.scdn.co/image/9ed6534e737d8336d6480024e50eef9bf74deb47","https://i.scdn.co/image/0074e12e5155e33f46285b7ba5ed5f0b297d94e0","https://i.scdn.co/image/d583f1543f6a9fd58e5f79bc3a5358d943258096","https://i.scdn.co/image/13d0fc217119d644c2c6ac245059e5411d643ff3"];


//Hiphop
var HipHopRedArtists = [];
var HipHopOrangeArtists = [];
var HipHopYellowArtists = [];
var HipHopGreenArtists = [];
var HipHopBlueArtists = [];
var HipHopPurpleArtists = [];
var HipHopPinkArtists = [];
var HipHopBrownArtists = [];
var HipHopBlackArtists = [];
var HipHopWhiteArtists = [];
var HipHopBeigeArtists = [];
var HipHopGrayArtists = [];

var HipHopRedCovers = [];
var HipHopOrangeCovers = [];
var HipHopYellowCovers = [];
var HipHopGreenCovers = [];
var HipHopBlueCovers = [];
var HipHopPurpleCovers = [];
var HipHopPinkCovers = [];
var HipHopBrownCovers = [];
var HipHopBlackCovers = [];
var HipHopWhiteCovers = [];
var HipHopBeigeCovers = [];
var HipHopGrayCovers = [];

//Folk
var FolkRedArtists = [];
var FolkOrangeArtists = [];
var FolkYellowArtists = [];
var FolkGreenArtists = [];
var FolkBlueArtists = [];
var FolkPurpleArtists = [];
var FolkPinkArtists = [];
var FolkBrownArtists = [];
var FolkBlackArtists = [];
var FolkWhiteArtists = [];
var FolkBeigeArtists = [];
var FolkGrayArtists = [];

var FolkRedCovers = [];
var FolkOrangeCovers = [];
var FolkYellowCovers = [];
var FolkGreenCovers = [];
var FolkBlueCovers = [];
var FolkPurpleCovers = [];
var FolkPinkCovers = [];
var FolkBrownCovers = [];
var FolkBlackCovers = [];
var FolkWhiteCovers = [];
var FolkBeigeCovers = [];
var FolkGrayCovers = [];

//Country
var CountryRedArtists = [];
var CountryOrangeArtists = [];
var CountryYellowArtists = [];
var CountryGreenArtists = [];
var CountryBlueArtists = [];
var CountryPurpleArtists = [];
var CountryPinkArtists = [];
var CountryBrownArtists = [];
var CountryBlackArtists = [];
var CountryWhiteArtists = [];
var CountryBeigeArtists = [];
var CountryGrayArtists = [];

var CountryRedCovers = [];
var CountryOrangeCovers = [];
var CountryYellowCovers = [];
var CountryGreenCovers = [];
var CountryBlueCovers = [];
var CountryPurpleCovers = [];
var CountryPinkCovers = [];
var CountryBrownCovers = [];
var CountryBlackCovers = [];
var CountryWhiteCovers = [];
var CountryBeigeCovers = [];
var CountryGrayCovers = [];

//Classical
var ClassicalRedArtists = [];
var ClassicalOrangeArtists = [];
var ClassicalYellowArtists = [];
var ClassicalGreenArtists = [];
var ClassicalBlueArtists = [];
var ClassicalPurpleArtists = [];
var ClassicalPinkArtists = [];
var ClassicalBrownArtists = [];
var ClassicalBlackArtists = [];
var ClassicalWhiteArtists = [];
var ClassicalBeigeArtists = [];
var ClassicalGrayArtists = [];

var ClassicalRedCovers = [];
var ClassicalOrangeCovers = [];
var ClassicalYellowCovers = [];
var ClassicalGreenCovers = [];
var ClassicalBlueCovers = [];
var ClassicalPurpleCovers = [];
var ClassicalPinkCovers = [];
var ClassicalBrownCovers = [];
var ClassicalBlackCovers = [];
var ClassicalWhiteCovers = [];
var ClassicalBeigeCovers = [];
var ClassicalGrayCovers = [];

//Electronic
var ElectronicRedArtists = [];
var ElectronicOrangeArtists = [];
var ElectronicYellowArtists = [];
var ElectronicGreenArtists = [];
var ElectronicBlueArtists = [];
var ElectronicPurpleArtists = [];
var ElectronicPinkArtists = [];
var ElectronicBrownArtists = [];
var ElectronicBlackArtists = [];
var ElectronicWhiteArtists = [];
var ElectronicBeigeArtists = [];
var ElectronicGrayArtists = [];

var ElectronicRedCovers = [];
var ElectronicOrangeCovers = [];
var ElectronicYellowCovers = [];
var ElectronicGreenCovers = [];
var ElectronicBlueCovers = [];
var ElectronicPurpleCovers = [];
var ElectronicPinkCovers = [];
var ElectronicBrownCovers = [];
var ElectronicBlackCovers = [];
var ElectronicWhiteCovers = [];
var ElectronicBeigeCovers = [];
var ElectronicGrayCovers = [];

//Jazz
var JazzRedArtists = [];
var JazzOrangeArtists = [];
var JazzYellowArtists = [];
var JazzGreenArtists = [];
var JazzBlueArtists = [];
var JazzPurpleArtists = [];
var JazzPinkArtists = [];
var JazzBrownArtists = [];
var JazzBlackArtists = [];
var JazzWhiteArtists = [];
var JazzBeigeArtists = [];
var JazzGrayArtists = [];

var JazzRedCovers = [];
var JazzOrangeCovers = [];
var JazzYellowCoverst = [];
var JazzGreenCovers = [];
var JazzBlueCovers = [];
var JazzPurpleCovers = [];
var JazzPinkCovers = [];
var JazzBrownCovers = [];
var JazzBlackCovers = [];
var JazzWhiteCovers = [];
var JazzBeigeCovers = [];
var JazzGrayCovers = [];

//Kpop
var KpopRedArtists = [];
var KpopOrangeArtists = [];
var KpopYellowArtists = [];
var KpopGreenArtists = [];
var KpopBlueArtists = [];
var KpopPurpleArtists = [];
var KpopPinkArtists = [];
var KpopBrownArtists = [];
var KpopBlackArtists = [];
var KpopWhiteArtists = [];
var KpopBeigeArtists = [];
var KpopGrayArtists = [];


var KpopRedCovers = [];
var KpopOrangeCovers = [];
var KpopYellowCovers = [];
var KpopGreenCovers = [];
var KpopBlueCovers = [];
var KpopPurpleCovers = [];
var KpopPinkCovers = [];
var KpopBrownCovers = [];
var KpopBlackCovers = [];
var KpopWhiteCovers = [];
var KpopBeigeCovers = [];
var KpopGrayCovers = [];

//Pop
var PopRedArtists = [];
var PopOrangeArtists = [];
var PopYellowArtists = [];
var PopGreenArtists = [];
var PopBlueArtists = [];
var PopPurpleArtists = [];
var PopPinkArtists = [];
var PopBrownArtists = [];
var PopBlackArtists = [];
var PopWhiteArtists = [];
var PopBeigeArtists = [];
var PopGrayArtists = [];

var PopRedCovers = [];
var PopOrangeCovers = [];
var PopYellowCovers = [];
var PopGreenCovers = [];
var PopBlueCovers = [];
var PopPurpleCovers = [];
var PopPinkCovers = [];
var PopBrownCovers = [];
var PopBlackCovers = [];
var PopWhiteCovers = [];
var PopBeigeCovers = [];
var PopGrayCovers = [];

//RnB
var RnBRedArtists = [];
var RnBOrangeArtists = [];
var RnBYellowArtists = [];
var RnBGreenArtists = [];
var RnBBlueArtists = [];
var RnBPurpleArtists = [];
var RnBPinkArtists = [];
var RnBBrownArtists = [];
var RnBBlackArtists = [];
var RnBWhiteArtists = [];
var RnBBeigeArtists = [];
var RnBGrayArtists = [];

var RnBRedCovers = [];
var RnBOrangeCovers = [];
var RnBYellowCovers = [];
var RnBGreenCovers = [];
var RnBBlueCovers = [];
var RnBPurpleCovers = [];
var RnBPinkCovers = [];
var RnBBrownCovers = [];
var RnBBlackCovers = [];
var RnBWhiteCovers = [];
var RnBBeigeCovers = [];
var RnBGrayCovers = [];

//Reggae
var ReggaeRedArtists = [];
var ReggaeOrangeArtists = [];
var ReggaeYellowArtists = [];
var ReggaeGreenArtists = [];
var ReggaeBlueArtists = [];
var ReggaePurpleArtists = [];
var ReggaePinkArtists = [];
var ReggaeBrownArtists = [];
var ReggaeBlackArtists = [];
var ReggaeWhiteArtists = [];
var ReggaeBeigeArtists = [];
var ReggaeGrayArtists = [];

var ReggaeRedCovers = [];
var ReggaeOrangeCovers = [];
var ReggaeYellowCovers = [];
var ReggaeGreenCovers = [];
var ReggaeBlueCovers = [];
var ReggaePurpleCovers = [];
var ReggaePinkCovers = [];
var ReggaeBrownCovers = [];
var ReggaeBlackCovers = [];
var ReggaeWhiteCovers = [];
var ReggaeBeigeCovers = [];
var ReggaeGrayCovers = [];

//Metal
var MetalRedArtists = [];
var MetalOrangeArtists = [];
var MetalYellowArtists = [];
var MetalGreenArtists = [];
var MetalBlueArtists = [];
var MetalPurpleArtists = [];
var MetalPinkArtists = [];
var MetalBrownArtists = [];
var MetalBlackArtists = [];
var MetalWhiteArtists = [];
var MetalBeigeArtists = [];
var MetalGrayArtists = [];


var MetalRedCovers = [];
var MetalOrangeCovers = [];
var MetalYellowCovers = [];
var MetalGreenCovers = [];
var MetalBlueCovers = [];
var MetalPurpleCovers = [];
var MetalPinkCovers = [];
var MetalBrownCovers = [];
var MetalBlackCovers = [];
var MetalWhiteCovers = [];
var MetalBeigeCovers = [];
var MetalGrayCovers = [];

//Latin
var LatinRedArtists = [];
var LatinOrangeArtists = [];
var LatinYellowArtists = [];
var LatinGreenArtists = [];
var LatinBlueArtists = [];
var LatinPurpleArtists = [];
var LatinPinkArtists = [];
var LatinBrownArtists = [];
var LatinBlackArtists = [];
var LatinWhiteArtists = [];
var LatinBeigeArtists = [];
var LatinGrayArtists = [];

var LatinRedCovers = [];
var LatinOrangeCovers = [];
var LatinYellowCovers = [];
var LatinGreenCovers = [];
var LatinBlueCovers = [];
var LatinPurpleCovers = [];
var LatinPinkCovers = [];
var LatinBrownCovers = [];
var LatinBlackCovers = [];
var LatinWhiteCovers = [];
var LatinBeigeCovers = [];
var LatinGrayCovers = [];
