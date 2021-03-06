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
var HipHopRedArtists = ["Eve","2 Chainz","Kanye West"];
var HipHopOrangeArtists = [];
var HipHopYellowArtists = [];
var HipHopGreenArtists = ["Juelz Santana","Playboi Carti","Young M.A"];
var HipHopBlueArtists = ["Logic","Lil Pump","Dreezy","Missy Elliott"];
var HipHopPurpleArtists = ["Run�D.M.C.","Nicki Minaj"];
var HipHopPinkArtists = ["Nicki Minaj"];
var HipHopBrownArtists = ["21 Savage","The Diplomats","Lil' Kim","Skeme","The Lady Of Rage","Beastie Boys","J.J. Fad","Yo Gotti","Future"];
var HipHopBlackArtists = ["Rapsody","Lil Uzi Vert","PnB Rock","Roxanne Shante","Kamaiyah","Lil Wayne","Lady Leshurr","Migos","G Herbo","Cam�ron","Maxo Kream","YG","Lil Uzi Vert","Future","Juelz Santana"];
var HipHopWhiteArtists = ["Nicki Minaj"];
var HipHopBeigeArtists = ["Crime Mob","Queen Latifah","A$AP Ferg"];
var HipHopGrayArtists = ["Juelz Santana","Remy Ma","Cam�ron","50 Cent","Jeezy","Drake","MC Lyte","B.o.B","Big Pun","Snoop Dogg","Da Brat","Foxy Brown","Skooly","DeJ Loaf","Beastie Boys","Monie Love","Eminem","Jim Jones","Cardi B","Bankroll Fresh","Salt-N-Pepa"];

var HipHopRedCovers = ["https://i.scdn.co/image/a63c8327d08960468539a0729d6f9a593efae651","https://i.scdn.co/image/62898f761269ebc6928023c2f7f333c415c82ec7","https://i.scdn.co/image/de693f63e4f4f2796ff448ccd73d4b4831faf30b"];
var HipHopOrangeCovers = [];
var HipHopYellowCovers = [];
var HipHopGreenCovers = ["https://i.scdn.co/image/e2c06912b888992152b0355f860624e5f3b89a5f","https://i.scdn.co/image/b63a4c4bf11b45d02f3c7c2deba7f77867e4cffb","https://i.scdn.co/image/7041df5b2fbbe32abc7923e5d06417b2b8497900"];
var HipHopBlueCovers = ["https://i.scdn.co/image/8581cb58ce928aad955ae68087665a66562c550d","https://i.scdn.co/image/315d11e46a2e9190e16e2e33e24020bdbf5f7958","https://i.scdn.co/image/fecfe12bfd4a6f730f18d83a9a08ed45e2adddbf","https://i.scdn.co/image/c94d87f743f11254bdd0ffc5434b59dba851d7d6"];
var HipHopPurpleCovers = ["https://i.scdn.co/image/43878224b9393aafa13120751cf9a3acf234c255","https://i.scdn.co/image/bfe3e58f2f6c440dfab15937f4af2e3202a2a5af"];
var HipHopPinkCovers = ["https://i.scdn.co/image/cbaae5a0a78584e707943c56035123195639a48b"];
var HipHopBrownCovers = ["https://i.scdn.co/image/c1198389b8aa0fa3ff453e4c7bdc2b1665e70386","https://i.scdn.co/image/c6d02f2c419e9225c82a0999e0d041a3168cfd65","https://i.scdn.co/image/0646c58797b2cbdd5e4d0740a600ebbf3757c9fa","https://i.scdn.co/image/da9e5983ce891e06a85905289742f14eb193a681","https://i.scdn.co/image/4c08bc6c458173cc32dcc7f25bc53c56c4a24164","https://i.scdn.co/image/cc50d666b08d7a46b229fe8cbe345eea29e99d3f","https://i.scdn.co/image/44797cac48a2451d172837bb53e4477eab7710ec","https://i.scdn.co/image/8d2e409bb03255cabdfd239e2b311f8a4581b7cd","https://i.scdn.co/image/31b0a579225a718b4b1aea0ac6f9e9bdd3da17b0"];
var HipHopBlackCovers = ["https://i.scdn.co/image/ed8b619e4f46507aad2b6337dc287c15e726a997","https://i.scdn.co/image/04ccb28b0602fe535f0ddb2cc82396c4a65ec4a4","https://i.scdn.co/image/5e49036d2121a0e78c88b6cee6d4c7ede65045c3","https://i.scdn.co/image/01f338cac71773d30f27b602d7536be44732272f","https://i.scdn.co/image/e061d2eea139965cca82778f7d6f822384d2a344","https://i.scdn.co/image/9ea9889e18816427374c1e6f86d170ea6553ef5f","https://i.scdn.co/image/bae9d32d173070c30381b96b3dd9e2ab258d999d","https://i.scdn.co/image/f56f23cbd3783f8594a4871ca0424ffb9de7a5cd","https://i.scdn.co/image/fa955ebced60624cb64bee39a2f3340001aa93f9","https://i.scdn.co/image/bb0e596fd3deb59176e61859268a1c8bb41680fa","https://i.scdn.co/image/c4ec1230b61193a5b4581e6a728e3555c7af812e","https://i.scdn.co/image/a3b73329f217d318144e643080621ac3294f16d8","https://i.scdn.co/image/8ba7dfdcff5065943f88a9f97cdf2971f1622f40","https://i.scdn.co/image/b4714732cab11a52755c0dfc37aa0134466bdc59"];
var HipHopWhiteCovers = ["https://i.scdn.co/image/4044c3bdc55263cf7a3fc8acaf55df1e60e57b8a"];
var HipHopBeigeCovers = ["https://i.scdn.co/image/a6721602f7f9b2e49aea4752c2929950b3256e4e","https://i.scdn.co/image/6c3362dd3cc2c87601373199a61d447ae9ff98d1","https://i.scdn.co/image/a97a7ff8a14bac751e17604a2ff2b1db5bcbfa1f"];
var HipHopGrayCovers = ["https://i.scdn.co/image/069fcbc61bf924869f7c21880213e2189d18c04c","https://i.scdn.co/image/b948e88ba7f9ba4e471cf955d2e11241c268a765","https://i.scdn.co/image/58e8e039e3fda9297f52096c561e68f54fd1caf2","https://i.scdn.co/image/fe5b2783211d8e93fd4d2d072ea8546de3f43b51","https://i.scdn.co/image/0943bf8d5a4c0edc4054fac4a51c084ca5360d08","https://i.scdn.co/image/e73c706e842eb5233eab7afd3404218a2696d568","https://i.scdn.co/image/5bfea67b20718d9706b72ac86c4525dc54a77bc1","https://i.scdn.co/image/51a14afa5f6c046d2776d75152fb8e95958a7b7d","https://i.scdn.co/image/8e27a6ecc55e623ef4bf695397782d40e15fd573","https://i.scdn.co/image/0068185d3922ef1b88567dad102329cf23474deb","https://i.scdn.co/image/b40268c402c5eb7808d2d6658f439280393bdc06","https://i.scdn.co/image/159fea05fa74b35d3896f437f2397c82ca6b4fb8","https://i.scdn.co/image/4f8662591f25d1402fd9d5eac915dbe802302182","https://i.scdn.co/image/d3bfde1c81f2aab192eec6a5658c5ae0c0840fd8"];

//Folk
var FolkRedCovers = ["Steve Tyssen","Roadkill Ghost Choir","Johnny Flynn","Seth Avett & Jessica Lea Mayfield","Good Advice","Sunparlour Players"];
var FolkOrangeCovers = ["Holley Maher","Joe Purdy","Wild Rivers","Iron & Wine"];
var FolkYellowCovers = ["Little Green Cars","Laura Gibson","Califone","All Our Exes Live in Texas","Tutlie","Austin Basham","Haley Heynderickx","Karen Dalton"];
var FolkGreenCovers = ["James Taylor","The Sea The Sea","Fossil Collective","Hozier"];
var FolkBlueCovers = ["The Staves","Richard Thompson","John Paul White","Sufjan Stevens"];
var FolkPurpleCovers = ["Whitney Rose"];
var FolkPinkCovers = ["Devendra Banhart","The Harmaleighs","Dori Freeman"];
var FolkBrownCovers = ["Phil Ochs","Nick Mulvey","Vance Joy"];
var FolkBlackCovers = ["Joni Mitchell"];
var FolkWhiteCovers = ["Beta Radio","The Head and the Heart"];
var FolkBeigeCovers = ["Tim Buckley"];
var FolkGrayCovers = ["Judy Collins","Shovels & Rope","Dave Van Ronk","Half Moon Run","First Aid Kit","Vashti Bunyan","Joseph","Edward Sharpe & The Magnetic Zeros","Graham Colton","The Wind and The Wave","Richie Havens","Joan Baez","Houndmouth","Bob Dylan","Bob Dylan","Fairport Convention","The Lumineers","Bob Dylan","Lord Huron","Birdtalker","Milo Greene"];

var FolkRedCovers = ["https://i.scdn.co/image/29b5798d8694e956515360686d0352d18bb5d94b","https://i.scdn.co/image/c12d52e64c588a599cd2700822add0ae5a629d0e","https://i.scdn.co/image/be1fa6f5bb206680726206edf67eda77a9fa8fa9","https://i.scdn.co/image/ea5042cfa65e45e54b0e30afb6474627f9443e7c","https://i.scdn.co/image/c6cd5df2da6902111b42a474ee705aa1605ac6c6","https://i.scdn.co/image/cbbe70ca48110deb55660cffa706769fb176c9aa"];
var FolkOrangeCovers = ["https://i.scdn.co/image/546630738b67fb49b5f718b383bfaf34d4657fb6","https://i.scdn.co/image/aa51ac16be32cc4c0ef2d50bb8187278dee99d04","https://i.scdn.co/image/9077691f5cffc5a3f2869de0afffd7de32668287","https://i.scdn.co/image/137924a5aae930cf1baae2790deacc36dca8225d"];
var FolkYellowCovers = ["https://i.scdn.co/image/78a9bfda0ad4a4bc41ff301fa4a1349483d6af1c","https://i.scdn.co/image/c20a59e24695b25adaa527c50f8bcb896e04d3af","https://i.scdn.co/image/808f8162754a516f04f93d5796315693cda75a74","https://i.scdn.co/image/87e10121fe0b6d7a31fc1ea7369a60c81feefb7f","https://i.scdn.co/image/56e1e3fed4a5e4ad008abd81e424c042d6dafd47","https://i.scdn.co/image/e891c871121bd87b44e4ade7c4924e24f9ee5748","https://i.scdn.co/image/876905d8e8a98327bf513da920354ca1c74a92c5","https://i.scdn.co/image/f0996a03df8f0e8a92041249a47606a020ace8ed"];
var FolkGreenCovers = ["https://i.scdn.co/image/3a9694930e367236d22dc3059cd81df08a767769","https://i.scdn.co/image/845db84c798401f4f4d141aa1e1a5d7ad8df2aa0","https://i.scdn.co/image/754cd74243586dff71a212554eaef61a10a8b3a3","https://i.scdn.co/image/54ae81bff27a1979815d40846c763431d872b680"];
var FolkBlueCovers = ["https://i.scdn.co/image/ac40569e12ae690607a22b41eb77e6681a9f5155","https://i.scdn.co/image/271fc4b3c6f97013399bc0bf8d1507b12ddb30d9","https://i.scdn.co/image/137924a5aae930cf1baae2790deacc36dca8225d","https://i.scdn.co/image/a0779f588d1f1f50921a083f5a1fc4217f0ddf7d"];
var FolkPurpleCovers = ["https://i.scdn.co/image/1109a20e0571e77d029967e5c28f7b93b8f3db44"];
var FolkPinkCovers = ["https://i.scdn.co/image/421c9ed5c525deab1f57e7ebac6fb295db1a5f9f","https://i.scdn.co/image/229c6e3d4c3fb080e4437e5cc4b0158ee438799d","https://i.scdn.co/image/abead3a0660539a884365eaa08ec1125228e63aa"];
var FolkBrownCovers = ["https://i.scdn.co/image/50265274d7b52b58a830b92ec9f70dfc91e15234","https://i.scdn.co/image/cf4e1b21494f0d6b6c655cfd8b060f6c9e1d6c54","https://i.scdn.co/image/b88816a7bcea0f4b509ec57e298de88478521da5"];
var FolkBlackCovers = ["https://i.scdn.co/image/b3b97a6eef240a7b2214eff1a83901bd6e31f839"];
var FolkWhiteCovers = ["https://i.scdn.co/image/08038c1b5a926d11800d007dfb726418b5ba0dfb","https://i.scdn.co/image/7ec6459dc45401a53df009d52143e29277c5278e"];
var FolkBeigeCovers = ["https://i.scdn.co/image/f9eabf58e2f22160e56deb26131455d14cb8c853"];
var FolkGrayCovers = ["https://i.scdn.co/image/c34cb2d0fd542c10b64064bbc32cc48a4b494153","https://i.scdn.co/image/c04115c17ea91f6863cfd8fa9876c7a66fc87a8f","https://i.scdn.co/image/19f073cb51144a11f4275133f1cc0bfc8990a770","https://i.scdn.co/image/2251d93f13d12ed6cc066b5177db7cdac572a7ed","https://i.scdn.co/image/fec431f5dce53e6f754c4f0b3ac7d31153dab712","https://i.scdn.co/image/894b5d7bba1af9dde7d27725448ecd4c6c0d515f","https://i.scdn.co/image/846119de70309ac54a9ea932fb596f1b56cc5de3","https://i.scdn.co/image/8cf441e9ba44df92f902ce23143d6f7fc7e2986e","https://i.scdn.co/image/b0a0cf3d038a263d8f2b2b75d267352e4737c4b4","https://i.scdn.co/image/9bda5a241ee5cc9b81a2e7475c02658ac68912e2","https://i.scdn.co/image/101e2e10c3acff9aa410b2d76b0b2594c9a3b20c","https://i.scdn.co/image/d75fe8bf17aaca2c2bd99da55d01309145dab8d4","https://i.scdn.co/image/5119da78f3a3a6a3a25e8e6dcb3964c3681907dc","https://i.scdn.co/image/b14852d3e663025db365fab8125d06a7fd01b30b"];

//Country
var CountryRedArtists = ["Rick Trevino","Hal Ketchum"];
var CountryOrangeArtists = [];
var CountryYellowArtists = [];
var CountryGreenArtists = ["Diamond Rio","Randy Houser","Dierks Bentley","Cole Swindell","Daryle Singletary","Chely Wright"];
var CountryBlueArtists = ["Eric Church","David Nail"];
var CountryPurpleArtists = [];
var CountryPinkArtists = [];
var CountryBrownArtists = ["Thomas Rhett","Dolly Parton","Vince Gill","Luke Bryan","Little Texas","Mel Tillis","Jo Dee Messina","Mark Chesnutt","Kip Moore"];
var CountryBlackArtists = ["Brooks & Dunn","Luke Bryan","Shania Twain"];
var CountryWhiteArtists = [];
var CountryBeigeArtists = [];
var CountryGrayArtists = ["Grayson Capps","Dustin Lynch","Aaron Tippin","Dustin Lynch","Rodney Atkins","Dolly Parton","Randy Travis","Old Dominion","Joe Nichols","Townes Van Zandt","Brett Eldredge","Luke Bryan","Chris Young","Luke Bryan","Travis Tritt","John Michael Montgomery","Toby Keith","Eric Church","George Strait","Jason Aldean","Billy Ray Cyrus"];

var CountryRedCovers = ["https://i.scdn.co/image/77b341b359801e4a136b188987ff42ec28a74cc0","https://i.scdn.co/image/f2a78d9d285ea041ddae740974ab1212f0fcffb4"];
var CountryOrangeCovers = [];
var CountryYellowCovers = [];
var CountryGreenCovers = ["https://i.scdn.co/image/16d1632ac57f28682239e14ddc5cf37c3beba070","https://i.scdn.co/image/f0ec5eae65750afb2bdb4af2cf1d9af65b92380a","https://i.scdn.co/image/91b56bd84b936a08561ff8f882d1a255d89b39c5","https://i.scdn.co/image/335b7917c67709c67fe3289ee8fba4715a0166ed","https://i.scdn.co/image/afafc10482a1ff22802c60e1670a36ec63ba5eaf","https://i.scdn.co/image/9c253fc780b8b7797de07a848142fdbd3be87227"];
var CountryBlueCovers = ["https://i.scdn.co/image/218dd38dd598eec39f7ce7d5ca024f1bbcaa8a4e","https://i.scdn.co/image/2393cb0053104c3e16f2d1da586d19492240fe0b"];
var CountryPurpleCovers = [];
var CountryPinkCovers = [];
var CountryBrownCovers = ["https://i.scdn.co/image/84694d9a2c12230be39f4a0a85ed1dd7e6febbf0","https://i.scdn.co/image/e951564296a9823a67147608aeab8cf821a7d16f","https://i.scdn.co/image/65a37481e9d57043f6dec0d2f09cdebbe2c48570","https://i.scdn.co/image/28e8a93b3b7993de833d2263400172af39d77c52","https://i.scdn.co/image/ebbcc32903da51b47631a171bd5c18f763116284","https://i.scdn.co/image/dc6705fa2380f79d850f9ed8b731d56918e69718","https://i.scdn.co/image/22e8f9a5dca52bc842974a70688034d5b2292979","https://i.scdn.co/image/2411d343e421b84e68a155a9fa6de1b87243a1f9","https://i.scdn.co/image/b1df86313dc9a78c80c37cc7d7d7cdba5bbd13d1"];
var CountryBlackCovers = ["https://i.scdn.co/image/473d21f10eee40058fa205d075f0cc05a073c41d","https://i.scdn.co/image/fa556260b4daf6fc19757780c4837b3c76c43282","https://i.scdn.co/image/6e58af4c7567f22282f5de154a4d68d7f27d8bb0"];
var CountryWhiteCovers = [];
var CountryBeigeCovers = [];
var CountryGrayCovers = ["https://i.scdn.co/image/ec72b9151a400d6ece9beb9f65d55ad37491627c","https://i.scdn.co/image/248cf4c43a09393cf6f63ed137e6a8e20eb7e119","https://i.scdn.co/image/2e441ae8f2ba07d3545d263094512bd157c2c63e","https://i.scdn.co/image/0c99389f756fa08b8c504ebdcb2b00f906aa9b6c","https://i.scdn.co/image/4e10a4b20a4329cf083db88ad80c756df5e8c247","https://i.scdn.co/image/d6695e785737955d4417cc9363262e8b68f06f5c","https://i.scdn.co/image/ffd92e9c2ca517b9e3e728aa6710cbfe0cddc80e","https://i.scdn.co/image/7ee4f2b814d6b899e62dd69cba94624f70edc877","https://i.scdn.co/image/77d034ae9ffa7f3752786bb2a72f4be02155afbf","https://i.scdn.co/image/153ab476c08ed39bd752b942b8367f96b5f22382","https://i.scdn.co/image/b3511888aa2a54e6f0206cba6954fd044157a113","https://i.scdn.co/image/ffa6e5c07aad97bd632031de1d0eaad504ab5c8b","https://i.scdn.co/image/79eddf061ab3d4761efacb595b0cc393bb49382d","https://i.scdn.co/image/7199df74bb15de17f72704c79d482851c0cf4c38","https://i.scdn.co/image/9c24c71fae41df0d692ea8f8fdc1bc9f47c9263f"];

//Classical
var ClassicalRedArtists = ["Johann Sebastian Bach","Erik Satie"];
var ClassicalOrangeArtists = ["Bed_ich Smetana","Gustav Holst"];
var ClassicalYellowArtists = ["Jean Sibelius","Michael Finnissy"];
var ClassicalGreenArtists = ["Johann Pachelbel"];
var ClassicalBlueArtists = [];
var ClassicalPurpleArtists = ["Ursula Oppens","Franz Schubert"];
var ClassicalPinkArtists = ["Jean Sibelius"];
var ClassicalBrownArtists = ["George Gershwin","Camille Saint-Sa�ns","Alexander Borodin","Modest Mussorgsky","Astor Piazzolla"];
var ClassicalBlackArtists = ["Gustav Mahler","Johann Sebastian Bach","Fran�ois Couperin","Ludwig van Beethoven","Isaac Alb�niz"];
var ClassicalWhiteArtists = ["Franz Liszt","Ralph Vaughan Williams","Arvo P�rt","B�la Bart�k","Franz Joseph Haydn","John Adams","Arvo P�rt"];
var ClassicalBeigeArtists = ["Aaron Copland","Gioachino Rossini"];
var ClassicalGrayArtists = ["Anton Bruckner","Gabriel Faur�","Sergei Rachmaninoff","Christoph Willibald Gluck","Johann Sebastian Bach","Maurice Ravel","Richard Wagner","Gustav Mahler","Pyotr Ilyich Tchaikovsky","Igor Stravinsky","Arnold Schoenberg","Nikolai Rimsky-Korsakov","Johann Strauss II","Felix Mendelssohn","Philip Glass","Sergei Prokofiev","George Frideric Handel","Joaqu�n Rodrigo","Anton�n Dvo_�k","Charles Ives","Maurice Ravel"];

var ClassicalRedCovers = ["https://i.scdn.co/image/cea8f86b1a8eda7fa7024093186c4517fdde22ac","https://i.scdn.co/image/a4608dfcd98cff4075707725acef57fc3139b666"];
var ClassicalOrangeCovers = ["https://i.scdn.co/image/de3876cb74e240a15451e172c856f1162ac4d65e","https://i.scdn.co/image/8508e2e121940cf702db84847fc9af8df1e9a62b"];
var ClassicalYellowCovers = ["https://i.scdn.co/image/4c7354a253e562d95a434b9ed223ea56cdf50b50","https://i.scdn.co/image/2589dbca13f8ee6fd169af387bcfc34af23bc49e"];
var ClassicalGreenCovers = ["https://i.scdn.co/image/eb07b4b2da057f84361a2e073dd9cc9cc243c273"];
var ClassicalBlueCovers = [];
var ClassicalPurpleCovers = ["https://i.scdn.co/image/de4f14f40d4244c9b54d42ca364bc79c6ee55c9b","https://i.scdn.co/image/f894e6330b6e4d5d7ae46808415053046fb2de9f"];
var ClassicalPinkCovers = ["https://i.scdn.co/image/8b596d4fac40d882b39ad27e14cc989889a897d4"];
var ClassicalBrownCovers = ["https://i.scdn.co/image/65e3d6d8d73e98bec7a3085e611b5e33c8fe5224","https://i.scdn.co/image/1cae736c9abec88ea7b0eaf0c4d45e245b256182","https://i.scdn.co/image/861dd5ecd63546ef0b5ea09c7af8f2a8aecf4dc4","https://i.scdn.co/image/99c302a42b72e9270474d967d80b473e76cbc46b","https://i.scdn.co/image/909041bc13a0dbadc25e6672fe472c19a100fd4c"];
var ClassicalBlackCovers = ["https://i.scdn.co/image/d3597aeaec7d2b295bfcafd4f9e469788f698370","https://i.scdn.co/image/349233b69c00443027d16d3c09092ac36800bb6e","https://i.scdn.co/image/1ee6724d8dccf28731d166dd3ab04efb51691388","https://i.scdn.co/image/36189874a70a9339e0459dd853fc80c5d8a2f12b","https://i.scdn.co/image/3049c703cc49fec78697cbe9816ea4c6c41ceab9"];
var ClassicalWhiteCovers = ["https://i.scdn.co/image/1c01cacb804a6e87ab16aa6d7052cca302f5c02e","https://i.scdn.co/image/5038d0c1bdccba3af975d44f76c13582479b3cf8","https://i.scdn.co/image/f3c41c44d3029ee3405f09caa53b7e9a02afdb50","https://i.scdn.co/image/deee172efd0ad5f93e3b853730e5d186f2d03c41","https://i.scdn.co/image/78e31602bfc355d370a1a66e759d4bcaff569802","https://i.scdn.co/image/cf776ac0a373c59a77d5d158a7c415a3ddc2d5ad","https://i.scdn.co/image/1bc4f7848230cfefd8a37eb5dbc4cab888cea574"];
var ClassicalBeigeCovers = ["https://i.scdn.co/image/9cd26531727df1f8e4493328f7b583a9749e33bc","https://i.scdn.co/image/5d2a70fba9fe46fbdcfb4f7577dde7869f2ad9cd"];
var ClassicalGrayCovers = ["https://i.scdn.co/image/94c5a5ff29fcccd055c0c561c171a7ff07c585e3","https://i.scdn.co/image/98c7d8c389e7a7699121c93be8f79f21da5904a8","https://i.scdn.co/image/8c14918b5e64b03740a0a8e88bb7fcfe99b8407f","https://i.scdn.co/image/44862ca4966fdf3cb862fdc697f5b5a98f763a9b","https://i.scdn.co/image/af176511d7568d147d25b9436ed5508360504c66","https://i.scdn.co/image/5bd30bbccf96650daed5fd39dc67ce3a36492914","https://i.scdn.co/image/ab722d8c4b2727cbdd8a109a205918c68386ef25","https://i.scdn.co/image/fa44b468373c4eae58e070a9ca7b38f7e126626c","https://i.scdn.co/image/ceb0ef8b249160088ddcc905d95145a76b41f2ba","https://i.scdn.co/image/bf6739da5fde5b1c86ba0576ef7c02ed6d58c2d8","https://i.scdn.co/image/e9e5d1bcff10f52857a30cb15f1f6595700232f4","https://i.scdn.co/image/698b8befcf3f02ff059f5f85d262c5073f653225","https://i.scdn.co/image/96e27d4ed9cb0a7d82e0ca86e407c5d860d1bd5b","https://i.scdn.co/image/aacafa2e22a0668e05c2d6f27fe0afbd532a2c8e"];

//Electronic
var ElectronicRedArtists = ["David Guetta"];
var ElectronicOrangeArtists = ["Illenium","FTampa","Garmiani","Axwell /\ Ingrosso","Sam Feldt","Galantis","Various Artists"];
var ElectronicYellowArtists = ["Marshmello","Benny Benassi"];
var ElectronicGreenArtists = ["Major Lazer","Matisse & Sadko","R3HAB"];
var ElectronicBlueArtists = ["Lulleax","Ed Sheeran","Fedde Le Grand","Axwell","IZECOLD","Martin Garrix","San Holo","Parker","Yellow Claw"];
var ElectronicPurpleArtists = ["Mark Knight","Jarryd James"];
var ElectronicPinkArtists = ["Major Lazer","Romy","Miley Cyrus"];
var ElectronicBrownArtists = ["Illenium","Major Lazer","Morgan Page","Ferry Corsten","Family and Friends"];
var ElectronicBlackArtists = ["Major Lazer","The Shapeshifters","Calvin Harris","Tom Hangs","Late Night Alumni","Avicii","Sunfreakz","deadmau5","Kaskade","Hardwell","W&W","Gareth Emery","Tash SulBeigea","The Chainsmokers"];
var ElectronicWhiteArtists = ["Kaskade"];
var ElectronicBeigeArtists = [,"Toni Braxton","The Chainsmokers"];
var ElectronicGrayArtists = ["DJ Snake","Bibio","Kaskade","Martin Garrix","Icona Pop","Madison Mars","Eric Prydz","Zonderling","Eric Prydz","Joachim Garraud","Axwell","Krewella","Ti�sto","John De Sohn","Kaskade","Guru Josh Project","Martin Garrix","Hardwell","Steve Angello","Armin van Buuren","Sander van Doorn"];

var ElectronicRedCovers = ["https://i.scdn.co/image/2af69d6fcc191e4489ed3ae283ee1d8995f1c251"];
var ElectronicOrangeCovers = ["https://i.scdn.co/image/b8e654b7154a051c6634343cbfa2c6897b95b52b","https://i.scdn.co/image/4eefff66a6aa0394dc8a795a9b32e48f48a04a07","https://i.scdn.co/image/6113c3917af550e4d5e57ceb28b850375079a150","https://i.scdn.co/image/2d6804b4b59ed8329cebe9fba23969e28c3084c1","https://i.scdn.co/image/f3c1fcd960584789b778217aaab70a9b31c77435","https://i.scdn.co/image/3ee0e67a91b6c8b4b4e16b35af09b24f90293747","https://i.scdn.co/image/adc375cf42a951982d3b07d89dadb81b10658588"];
var ElectronicYellowCovers = ["https://i.scdn.co/image/7ca5f44909380bbe4155492e4bc7fc6d0ff44745","https://i.scdn.co/image/8a4d38f782bfd847f6544cbff2a113a0d4a8c10f"];
var ElectronicGreenCovers = ["https://i.scdn.co/image/021195b736a567fbe27ae2e84c55bd2f6721a892","https://i.scdn.co/image/58fd4ec397fb8d5ebd20eb99250a8d912a2fd65a","https://i.scdn.co/image/f2446546e6bc1d2ad8ffe07d473e9b94292825e8"];
var ElectronicBlueCovers = ["https://i.scdn.co/image/95643469571d5490425154ca33c1550ac3fb9695","https://i.scdn.co/image/59ba8b75dff51cf309f0c786fc6b7ada72cc7cca","https://i.scdn.co/image/5a45a07b590dca866dc9df8702575215f4321b38","https://i.scdn.co/image/0e19be1aa9cb8abb17af8103b7bd7a2f0d649df2","https://i.scdn.co/image/6a47f5f74453fa2671335a1e959dcdc88d2097ec","https://i.scdn.co/image/a1a2e08be66df92c75e46ad8330c9d4937bff209","https://i.scdn.co/image/06c7ba9e48b9bee598200277040eb7abaed0b3c3","https://i.scdn.co/image/1b7e26ff724d2472bafdfca7c5ae8eeed5325de5","https://i.scdn.co/image/89b1fe9fdcefcc738e7af734901c26aac8943c91"];
var ElectronicPurpleCovers = ["https://i.scdn.co/image/37469fc44e4885f1a0eff06c6ca458d007ae1bdc","https://i.scdn.co/image/802982d4b4a85ce7c1fa5744abc74fb7448b18c1"];
var ElectronicPinkCovers = ["https://i.scdn.co/image/07b676744d50ad3b59e55e744c124765eb769056","https://i.scdn.co/image/caf6e54057641a30ce410f8894896050c57d017d","https://i.scdn.co/image/58a6515470522f906bf4490e3cf06a67c948afd5"];
var ElectronicBrownCovers = ["https://i.scdn.co/image/b8e654b7154a051c6634343cbfa2c6897b95b52b","https://i.scdn.co/image/07b676744d50ad3b59e55e744c124765eb769056","https://i.scdn.co/image/15e910aef6b096fc472c3b98ded355752f77a44a","https://i.scdn.co/image/2d63a3530dcdb4055dba900fe60f49cc1dccac1e","https://i.scdn.co/image/334d61a18a550bd0cd11a51c700d19f856b84726"];
var ElectronicBlackCovers = ["https://i.scdn.co/image/071c7f412110d8754756e1833d978e5099a42648","https://i.scdn.co/image/9335a9345ed3624fb673c6848268c07b6c2cad54","https://i.scdn.co/image/b3d71d7a20d41146f24a7569c0869dfb3b16e860","https://i.scdn.co/image/baf79647f960a210a9c6e3141d4b84b87fbb263b","https://i.scdn.co/image/73304c633fc963d765eeb5dbbad040b2f01fe4de","https://i.scdn.co/image/3ae4a2a9a3db9b5532acccf179add53ac198b67b","https://i.scdn.co/image/c5f0ba273d41024001a626432f908ce93f17b6c3","https://i.scdn.co/image/975317b379166a69811cf885aa8890b9ddf4f942","https://i.scdn.co/image/8c8d585b5fde829bddd60bce3fd3254d477d8826","https://i.scdn.co/image/a63874bbc08bf43550fba15e0d931c8b5b4ba283","https://i.scdn.co/image/f06905ca417c6694fd012ba4283a33d04a7d6a6e","https://i.scdn.co/image/c0d174ebf58d18250b62b870d88b58bc150be01f","https://i.scdn.co/image/15de4cf91829285eaad10986a8e339906a69283c","https://i.scdn.co/image/506b3aee8a743d125460453499a56cb64e5a43ec"];
var ElectronicWhiteCovers = ["https://i.scdn.co/image/20c64440f363e41319626fc383c06dab38843c00"];
var ElectronicBeigeCovers = ["https://i.scdn.co/image/3eb791d6c7ffc4aedf1bb71802e1e07f7900c290","https://i.scdn.co/image/03aba72d44d250281b7423f81b4cfac97baf5679"];
var ElectronicGrayCovers = ["https://i.scdn.co/image/5acb2a5b069c2f14f6e7efd5daa9bd340131ca47","https://i.scdn.co/image/ee262bcc0e5fe2aff757e7e9b636f38cf6057a9d","https://i.scdn.co/image/c646e1915f97121832f5ac975272790e103ddde7","https://i.scdn.co/image/956b7a165b7936a2632ea8cd33019e31617ea94c","https://i.scdn.co/image/37d0dd9f0bb841e7879b2ed370f7a974f84458fb","https://i.scdn.co/image/e2afc11eddd4453c3c467cf74e1da894ed146d08","https://i.scdn.co/image/8f440b1487762e72e4434d13a0b2a9f8c5196992","https://i.scdn.co/image/1c6b3050c32fabf9a7e813e2f5e4db75ea292cb0","https://i.scdn.co/image/8e4121eb83cc0c2699de7fbcf67cf7fdbbc7b301","https://i.scdn.co/image/957e07424054f1b70b9578a7ac1ce37155930b21","https://i.scdn.co/image/7629d989912b138050cb227dd809dc05ad117e46","https://i.scdn.co/image/1537253c1da10ab1429090cbc6fe0d3c555743ad","https://i.scdn.co/image/06922f8150a34b805cf406d120d1c7a6e3f5fbce","https://i.scdn.co/image/11a7ab558b1d8d107f30ebf7cb67c2bd1779f3a5"];

//Jazz
var JazzRedArtists = ["Pabzzz","Tommy Flanagan, Ron Carter & Tony Williams","Tied & Tickled Trio","The Cinematic Orchestra","Dan Cray Trio","Brous One"];
var JazzOrangeArtists = ["Joey Pecoraro","Living Room","Groove Collective","joeshort","Xploding Plastix","Joe Corfield","Simon Jefferis"];
var JazzYellowArtists = ["BROCKBEATS","Otesla","Esbj�rn Svensson Trio","GurtyBeats","Otesla","Axian","Skalpel"];
var JazzGreenArtists = ["DJ Cam","Jimmy Dorsey & His Orchestra","Ra Ra Raj","Nils Petter Molv�r"];
var JazzBlueArtists = ["halberd","Frank Sinatra"];
var JazzPurpleArtists = ["Hawks","Shigeto","Various Artists","Electric Wire","The Greg Foat Group","Beegie Adair","Alex Tronic","Mujo"];
var JazzPinkArtists = ["Juan Rios","fantompower","Dewaldo","Yelena Eckemoff","Scott Hamilton","Cbakl","emune"];
var JazzBrownArtists = ["Lawrence Welk","Count Basie","Benny Goodman","Woody Herman & His Orchestra"];
var JazzBlackArtists = ["Nina Simone","Tony Bennett","Welshly Arms"];
var JazzWhiteArtists = ["Stan Getz","moow","Bill Evans","St Germain","Etta James"];
var JazzBeigeArtists = [];
var JazzGrayArtists = ["Dinah Washington","Art Pepper","Alice Babs","Harry Connick, Jr.","Dean Martin","Ann Hampton Callaway","John Tesh","Lionel Hampton","Count Basie","Artie Shaw","Buddy Rich","Glenn Miller"];

var JazzRedCovers = ["https://i.scdn.co/image/20b4c86796de4de4f19032b2ce47e120ef4ae4b3","https://i.scdn.co/image/a856dd76dad35113180b12fcd881f62190df8b54","https://i.scdn.co/image/0c1f5eb1de4205808e624c18daea8aa51ded6ef8","https://i.scdn.co/image/704421e3908d42ef6a6d105bf1a6c9f43a06e3cd","https://i.scdn.co/image/7544230f22eb28e3fbcf2077a5de60a495ca4090","https://i.scdn.co/image/7270bfb653d29c1d5010e21f5b94bec219ff64d3","https://i.scdn.co/image/c3d7522d0659900db3d7f06c5dffd3a0685ee01d","https://i.scdn.co/image/e2901efefc34c92cc9de3c215a68115ee6e9838d"];
var JazzOrangeCovers = ["https://i.scdn.co/image/a349cd87ed01dd843176e090e99baf8f1b8d6c4b","https://i.scdn.co/image/9332a97ae7acef6bff044a6e9091ef8028f8d798","https://i.scdn.co/image/ba0ae54525d7bf50cdbd298247b553b4bc84b66d","https://i.scdn.co/image/59511babe153ed39af47f453fadf7afa05098251","https://i.scdn.co/image/34d4b488b75cc8a84326824df279bbeaddf43ae8","https://i.scdn.co/image/e42f5eda6148b5a174031c23dd5741d3e82336c4","https://i.scdn.co/image/724f77162f37738fa303bd01c41484110d409618"];
var JazzYellowCovers = ["https://i.scdn.co/image/b52c36c904d9fad5cd64f2d010a07a840678edf3","https://i.scdn.co/image/4ff077bc2206837813f3c263bdc6c71d53350cdd","https://i.scdn.co/image/d60662ed9ab05f1dc0b0fc6bd0f5fec2dc8cba4a","https://i.scdn.co/image/bf18ebc5435158531a3d40ddb017d2a56cf97773","https://i.scdn.co/image/eab6002a9adc491deebcdd952c28be534de4960b","https://i.scdn.co/image/fef50c0cb8af253a05c6e05b707a4f47c142d3d4","https://i.scdn.co/image/7ec50960d7cbc81f3ccc127fc3ba3102d324cd23"];
var JazzGreenCovers = ["https://i.scdn.co/image/f5fc37ae229be515523748feb463c5e6224762eb","https://i.scdn.co/image/3f8668b7088547d526e23e507e24b00a10e0a6f4","https://i.scdn.co/image/5024cde5f8bf700c7d17b7129ee18a4acf1537cd","https://i.scdn.co/image/94981cf65be71ba46531b4e0ff93da5e7b8dc45f"];
var JazzBlueCovers = ["https://i.scdn.co/image/876dff42d861f2403b6bf6338bde53c2868479e8","https://i.scdn.co/image/6c815ce2d920f7b9fe8c5ced8de3fbb92086d5ec"];
var JazzPurpleCovers = ["https://i.scdn.co/image/cd1a73570312db0977070c13952b001a7f9dc6d4","https://i.scdn.co/image/37d73eafd9c2a8e1b7e19806786513abe10eb6fb","https://i.scdn.co/image/9cba1d4641a492adadb2398241a6a6a85845b6f9","https://i.scdn.co/image/d5990941897003cb375c8929f8cdf704434d82d0","https://i.scdn.co/image/591cbfa21a3bdae3ba76cc108cef2ac14f8bcb8b","https://i.scdn.co/image/a0133654d6a44cbaf62f4384725107394462c3ad","https://i.scdn.co/image/0894f60c188f5de9167092438fbbbdcc1f7bc6c4","https://i.scdn.co/image/bdfbd2799f070f8ebf4d288a0467b2637f27168f","https://i.scdn.co/image/d9b8a8e22411f75de14ec97d15e616df74d76d14"];
var JazzPinkCovers = ["https://i.scdn.co/image/a72c8dadc57bea56d4e6c7ead0afd62fc1769f86","https://i.scdn.co/image/2f4c005f07579f67d5e3f29c6c9bfe670e16c1a2","https://i.scdn.co/image/0a37a0864f1ba09516e0c5cd614499bfd2d62560","https://i.scdn.co/image/c70bfcfb1ddf7ba5243168f1ddcd64810f3984b7","https://i.scdn.co/image/ac67348c1ab4edb4a8d407d934e63fc5ecb4f749","https://i.scdn.co/image/0b87c182a97b6dbba6ffc447d687701f6f8eb37a","https://i.scdn.co/image/3d05419dbd1d6999a4e067c86450dbf26e40f812"];
var JazzBrownCovers = ["https://i.scdn.co/image/15900f264ca29b0af45843c36ba37478c52eee65","https://i.scdn.co/image/f1c71e5d6cfd7b1f447c0207d75cbe18a64557c4","https://i.scdn.co/image/bd46c54913d3959b61403eada08d0cbbe46c19b2","https://i.scdn.co/image/ab3877b713884d2369aa18807e693dbbbf9d6f4f"];
var JazzBlackCovers = ["https://i.scdn.co/image/2bc742038755e7ebb305689b0c7b0ef15503a27f","https://i.scdn.co/image/8dbcbd375fa79823e5c3e326bc40f1f8e949c685","https://i.scdn.co/image/c5c2bb20e986ff31dc14d08a1b4133a710d183c4"];
var JazzWhiteCovers = ["https://i.scdn.co/image/2c5e6aad21d5588d820a72b62821be77f1250032","https://i.scdn.co/image/40cb3467207001433913134447bc978c2d424d10","https://i.scdn.co/image/b4f5bf11d665ee11a9b7cffcdc1487489826d4df","https://i.scdn.co/image/62aa3d25d089016439a0e913b31edee701c303ba","https://i.scdn.co/image/64a6c0e2f432a35930ce9c3a6d78859938202cb9"];
var JazzBeigeCovers = [];
var JazzGrayCovers = ["https://i.scdn.co/image/ba9ba082ef7cdf321b78e0971255eb30908b7a52","https://i.scdn.co/image/8f9dab27895255579b16203b487c0b91c60dd1e3","https://i.scdn.co/image/8200acbc5f13105065890eb7fa8349c76a165c0e","https://i.scdn.co/image/f14e90a98afac35e1a5cc90f67a184b94ef7e524","https://i.scdn.co/image/707c61a46bc32324917987a73d1c8415ef053db9","https://i.scdn.co/image/754f3f6f0f4e560b8db5f225f4a65e9647328738","https://i.scdn.co/image/210df9facd2c5d21690f0c88ccb44098384e7f2d","https://i.scdn.co/image/03b57fc5cd203be8a2fcc94f1d3c927256961169","https://i.scdn.co/image/842ce59e5894c3fa05051e653d7c12d9823d3e58","https://i.scdn.co/image/3070a9a84dba36dc402c8547d49a38e0b41ac106","https://i.scdn.co/image/62efa146b3800a964f54795793df7a75ed4d5267","https://i.scdn.co/image/f1f3bf04452f0a48866a2b1a1ae8179f0ffda5bd"];

//Kpop
var KpopRedArtists = ["TAEMIN","Monsta X"];
var KpopOrangeArtists = [];
var KpopYellowArtists = [];
var KpopGreenArtists = [];
var KpopBlueArtists = ["KARD","EXO"];
var KpopPurpleArtists = ["BLACKPINK","TWICE"];
var KpopPinkArtists = ["BLACKPINK","Wanna One","TWICE"];
var KpopBrownArtists = [];
var KpopBlackArtists = ["Monsta X","KARD","EXO"];
var KpopWhiteArtists = ["Chanyeol","EXO","IU","WINNER","EXO"];
var KpopBeigeArtists = [];
var KpopGrayArtists = ["Henry","NCT 127","KARD","Epik High","SUNMI","PENTAGON","SEVENTEEN","SEVENTEEN","GOT7","KARD","Hyuna","Eddy Kim","EXID","Red Velvet","Super Junior","Imagine Dragons","Red Velvet","Wanna One"];


var KpopRedCovers = ["https://i.scdn.co/image/8966f2c4cbf7e47c8c978daa85349a9d57d5d3b8","https://i.scdn.co/image/69c99b0e816a5113979c6b99df671eb9d762cde6"];
var KpopOrangeCovers = [];
var KpopYellowCovers = [];
var KpopGreenCovers = [];
var KpopBlueCovers = ["https://i.scdn.co/image/d4e1e2ea4e73c381035f7770ed318824b9d2df14","https://i.scdn.co/image/67675278b93de8cf96aabe54ffcbe8d020b05acd"];
var KpopPurpleCovers = ["https://i.scdn.co/image/9c75c67fde68fabbd433749f8f1cd07b8c49ed11","https://i.scdn.co/image/bcea86e33154a3b1f3bb3b5f097cb6db8f227503"];
var KpopPinkCovers = ["https://i.scdn.co/image/119a66360da4b3f446d709b19b4a91b319daaebc","https://i.scdn.co/image/042e8fabd461269d18994088be3ebc2fee7e2cee","https://i.scdn.co/image/6551b45b4e5a692f61cd42357e7f9b08753430f9"];
var KpopBrownCovers = [];
var KpopBlackCovers = ["https://i.scdn.co/image/abad7de9b2050022d87056fa4719b8a0685dcefb","https://i.scdn.co/image/fdcbc520c716e691daab5b0d9a10d321a6df8760","https://i.scdn.co/image/594bb6fda34f07fe96da938135478baa8727889d"];
var KpopWhiteCovers = ["https://i.scdn.co/image/84c00681f2040bafb1cc87bc0b06d766f5e56e63","https://i.scdn.co/image/561cd6ef162eb9c6d82ef3a4764e1da2105b1ed0","https://i.scdn.co/image/9f4f56926ab1d9377f7248b0800bf274ef7d7ad2","https://i.scdn.co/image/38ba25ed8579bfe9dd253f40fcffb52338d86115","https://i.scdn.co/image/e20bed05bb268bf50f5be4c19ef245cc6131826c"];
var KpopBeigeCovers = [];
var KpopGrayCovers = ["https://i.scdn.co/image/3395afb09e418b2b3173be4a09ca76e8550de110","https://i.scdn.co/image/ced97f1b18277b52d7bbf8e5149e3b3f1946d572","https://i.scdn.co/image/332379c4dc50a1771d8669ea7933ad367026b663","https://i.scdn.co/image/95234cfaf8e6cdfac21853b9c881742928c232ad","https://i.scdn.co/image/a6c1261e031f22e0fedbed203441c5f79eeec183","https://i.scdn.co/image/66a4ce96a7fd03bcd8dd8242782ac0815997d779","https://i.scdn.co/image/66d476d244eeb140a896e64d4350ebf13e667b71","https://i.scdn.co/image/cf9f0edd035423dd16944330a1a27c9bf1a889b6","https://i.scdn.co/image/87df9d3f8f7a2a64059c78d4f7b261df5bf9db0a","https://i.scdn.co/image/b038eaa50b4a7715caf190d47f539feadc30c4e2","https://i.scdn.co/image/e79f5d4f4f5b293abae85976062d8c227bdf2d69","https://i.scdn.co/image/ee50792be20aadebca98cec91295cccb1228acc9","https://i.scdn.co/image/5686c3aa67d92c4e593d9c129147b07ff563aaad","https://i.scdn.co/image/45d1f44432c9791eca30685e9c52c5a9588ace78"];

//Pop
var PopRedArtists = ["Halsey","Cascada",];
var PopOrangeArtists = [];
var PopYellowArtists = [];
var PopGreenArtists = ["Becky G","OneRepublic","Shawn Mendes","Post Malone"];
var PopBlueArtists = ["DJ Khaled","Ed Sheeran","gnash","Ed Sheeran","Dionne Warwick","Beyonc�","Justin Bieber","Clean Bandit","Fifth Harmony","Camila Cabello","Jennifer Lopez","Selena Gomez & The Scene","Troye Sivan"];
var PopPurpleArtists = [];
var PopPinkArtists = ["Drake"];
var PopBrownArtists = ["Miley Cyrus","DJ Khaled","Jason Derulo","Ella Vos","Rihanna","Michael Bubl�","Post Malone","Post Malone","The Weeknd"];
var PopBlackArtists = ["Aquilo","Bobby Darin","Lorde","K.Flay","Pitbull","Chef'Special","Foster The People","Hailee Steinfeld","Coldplay","Taio Cruz","Flo Rida","Macklemore & Ryan Lewis","Lauv"];
var PopWhiteArtists = ["Glenn Miller","Sam Smith","OMI","Julia Michaels","Coldplay","Katy Perry"];
var PopBeigeArtists = ["WALK THE MOON","Billie Eilish"];
var PopGrayArtists = ["Mr Eazi","Whitney Houston","Niall Horan","Beyonc�","Jason Derulo","Jon Bellion","Sia","Gym Class Heroes","Enrique Iglesias","The Chainsmokers","AJR","Shaggy","Phoenix","Janet Jackson","Destiny's Child","DREAMERS","The Chainsmokers","Red 5","The 1975","Hailee Steinfeld","EMF"];

var PopRedCovers = ["https://i.scdn.co/image/91a80095d0d7b3dded2acdad3ab27ee363643541","https://i.scdn.co/image/19aef00ff423f363d2ba4b0196275336ad343444"];
var PopOrangeCovers = [];
var PopYellowCovers = [];
var PopGreenCovers = ["https://i.scdn.co/image/e332f9b003d71ade5f2b2ebdc0e39bf9647a84a2","https://i.scdn.co/image/8b6238186da6c5c9b0ff756065883aa1a8fbd339","https://i.scdn.co/image/c2a79e47d7487784c3be29841d3fa2bcf6b6558b","https://i.scdn.co/image/a09de4ae3ad26e860a08f1034ed0a3bdfa10a156"];
var PopBlueCovers = ["https://i.scdn.co/image/017f05aea238929a9b3970743a879c90bfff23ca","https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c","https://i.scdn.co/image/2ea8b06d4eb92c2c9f0a1ac6f31398c2d5bacb3e","https://i.scdn.co/image/621d2909bcc2c26cd0b274aab0414c9d422a1576","https://i.scdn.co/image/dc5c13d9d7e1f2bd57ee3cecc6a9f55e412e5092","https://i.scdn.co/image/4f209f5fa9d4ee65215f0dcc5fb513a4119cef10","https://i.scdn.co/image/6538912b146e0dd3a4d981801cc89216f1480648","https://i.scdn.co/image/bd5229f938b3ca00bb1821ecb415acb991929810","https://i.scdn.co/image/c6b8d1bdc7b02768d0b0478475768ad802ffbbae","https://i.scdn.co/image/7429b64ba636934d53763b9076492b551b240003","https://i.scdn.co/image/96b6334c65b36862cf0878dd9b44612248225626","https://i.scdn.co/image/89b09a02d233c0ebc71835be46df0bbd628bdcf2","https://i.scdn.co/image/f96947dffe790a60fdf7f2a88549dc4c6f28fcef"];
var PopPurpleCovers = [];
var PopPinkCovers = ["https://i.scdn.co/image/0cf194beeb8118bcb0d492e1fdd010798dbc3a20"];
var PopBrownCovers = ["https://i.scdn.co/image/a1fa7f590996868ebd1248aab3233e793db22fd7","https://i.scdn.co/image/5bda0fc91fbc18a112278a3458ed3a9c6334af88","https://i.scdn.co/image/87d0b1856d2c2ce55fdb4c8129e47a6df6f33aff","https://i.scdn.co/image/45e801a7acd2639a9931f4412ff71eabee35114f","https://i.scdn.co/image/660849fa669b8fd072487d557e39232ffdd64479","https://i.scdn.co/image/6d21449c11da6548826b6d153988900a8fb4334c","https://i.scdn.co/image/17e68a2e03de74a114bf6609d69f9bdbf6029f70","https://i.scdn.co/image/73fb1de575a85db765a1c6c928f81a38d0db03aa","https://i.scdn.co/image/7bc60842d505753942b0cedf0e95f53074867806"];
var PopBlackCovers = ["https://i.scdn.co/image/c78fb1b0f928d132993fdf823d96dd72c134d873","https://i.scdn.co/image/46452be8110d1885a917391230e6d89efdc0069c","https://i.scdn.co/image/f06f0658ccc185e6e884fe4af76b217c4fe478c7","https://i.scdn.co/image/dfbaa65e99a6635dd7c571dc5ae9faf93b3af189","https://i.scdn.co/image/3edb3f970f4a3af9ef922efd18cdb4dabaf85ced","https://i.scdn.co/image/f6ad32a19fa656ac94213e258cdab2ee1eb042ea","https://i.scdn.co/image/6af5ce94627ad636d5d41b5206d527a13347dac7","https://i.scdn.co/image/200c574b96d791d66064fc85d214db50c345a264","https://i.scdn.co/image/595846b1b208b9edfb91ee79b5b886456856da9f","https://i.scdn.co/image/1786ca5b511633d9e4ca5b6b49686a6d37b4d707","https://i.scdn.co/image/e52b7aa534088442e0ed2d58f2771d541d7e04cb","https://i.scdn.co/image/410191f75b2d2d48adb5a5d80d2acd09f811ff47","https://i.scdn.co/image/35dcc2590052f8e802372400bd4344ee3864775a"];
var PopWhiteCovers = ["https://i.scdn.co/image/f073db141df494b824a7ef5f3ebd2a653be78992","https://i.scdn.co/image/8309ef0d95d908f7a2f2d1f74d2c9599c91dbf37","https://i.scdn.co/image/480048f32e1d99d4cdd1833f162b284514734f72","https://i.scdn.co/image/5548ac701deaf64c22e0ebef9ed0eb47ff802085","https://i.scdn.co/image/70d8660d8b802835a280ce75799d30db262f7094","https://i.scdn.co/image/33080534f9716c159af3cc491162a3e8745e6d84"];
var PopBeigeCovers = ["https://i.scdn.co/image/1c87b0ac6f0cd837dc399d52bab96134442547ea","https://i.scdn.co/image/d7f9b43755bdb0272b77c37bab7314bf0c46b84e"];
var PopGrayCovers = ["https://i.scdn.co/image/1b17b41f4e75287ab68c4290026594d94ab015ab","https://i.scdn.co/image/967089a394a33b98836be3412f8ebf43f135628c","https://i.scdn.co/image/de9439753c53cb26080405f7310c9b17565f8b9c","https://i.scdn.co/image/272c8679a23e1c92b17c176f5470e9c2eca3e4bc","https://i.scdn.co/image/679472c6c90c259f3ed625bfa495b5a202d60e66","https://i.scdn.co/image/1b9620a8657dd6853437d914896cd314cde1e19c","https://i.scdn.co/image/4b37c81ce1579532d39ef417141fd883357e6a6d","https://i.scdn.co/image/65c5610d5b8b4186e1ed7eac05073ed397f58ee5","https://i.scdn.co/image/794277848c453905c713bd5bbc7cf00e432aad28","https://i.scdn.co/image/df3b17e748de56e4ce78ac29b216d3f99afd0c5a","https://i.scdn.co/image/79b4ce3c6c0f88e0c3a12bfd7fb49b02568459f7","https://i.scdn.co/image/8f112329b3d15c6620ac09791defce3ac485beb2","https://i.scdn.co/image/dd50cf172806b09c1596579d8e921eb868c4d17c","https://i.scdn.co/image/f494d2550eeb430ddf71c5f1201bedb4693c6ebf"];

//RnB
var RnBRedArtists = ["Jacob Banks","Usher","Kehlani","SG Lewis"];
var RnBOrangeArtists = [];
var RnBYellowArtists = [];
var RnBGreenArtists = ["Jidenna","Joe","Jhene Aiko","Klymaxx","Deniece Williams"];
var RnBBlueArtists = ["Bryson Tiller","Jeremih","Tinashe","Patti LaBelle","Kelly Rowland","Mary J. Blige"];
var RnBPurpleArtists = ["Marvin Gaye"];
var RnBPinkArtists = ["Rico Nasty"];
var RnBBrownArtists = ["Jean Knight","Yo-Yo","Ms. Lauryn Hill","Minnie Riperton","Jocelyn Brown","Tory Lanez","Fats Domino","Frank Ocean","Eric Bellinger","Kari Faux"];
var RnBBlackArtists = ["Lalah Hathaway","PARTYNEXTDOOR","Randy Crawford","Jeremih","August Alsina","George Benson","Beyonc�","Chris Brown","Ann Peebles","Tamia"];
var RnBWhiteArtists = ["Leikeli47","Gladys Knight & The Pips","The Marvelettes"];
var RnBBeigeArtists = ["Kash Doll","Martha Reeves & The Vandellas"];
var RnBGrayArtists = ["Aaliyah","En Vogue","BJ The Chicago Kid","SZA","Xscape","Miguel","Tamia","Eric Bellinger","Beyonc�","Keyshia Cole","Tory Lanez","The Supremes","Jeremih","SWV","Brenda Russell","Meli'sa Morgan","The Staple Singers","Diana Ross","Lyn Collins","Teena Marie","Stephanie Mills"];

var RnBRedCovers = ["https://i.scdn.co/image/39ac61b157b85d869c593e7d7efa47c125f97bfc","https://i.scdn.co/image/81097fadc548f0650a8b79b728326b5d6c8e18a2","https://i.scdn.co/image/990f7ee5c06a8d53c89fbf01a8237fd82a5d7580","https://i.scdn.co/image/60e50167fcd6e9fb9b39683aef2a95283e91718d"];
var RnBOrangeCovers = [];
var RnBYellowCovers = [];
var RnBGreenCovers = ["https://i.scdn.co/image/d5725eb974d195decc6f92a9afae71741e59c7d2","https://i.scdn.co/image/d2d54491bfc7ba9b9ed2f945b06a2e4b7cb516c1","https://i.scdn.co/image/fadc73a93cfeafefbc0f11cffbaeec985848685b","https://i.scdn.co/image/294c658bb11f3208c43009189604fce1db423b35","https://i.scdn.co/image/be48b9d2a214ba1ec403ce2cd65bd21ab4bedd22"];
var RnBBlueCovers = ["https://i.scdn.co/image/1870e3c0e5abc4a58cfbfb8aeaf3b6a57b88eb87","https://i.scdn.co/image/559108cb16ce2ed5284c0f75d85ed28cf6e7e308","https://i.scdn.co/image/a046a478200e74c4f4696a3c0d4b3a0a93f8cdd2","https://i.scdn.co/image/b810ef230bb0c3c355a5f6f7e6892bfefb11ec98","https://i.scdn.co/image/992caf963513d3408f1474266238ec870164fe9a","https://i.scdn.co/image/a59a82fe436a504a263646aac1e7bf5609f42722"];
var RnBPurpleCovers = ["https://i.scdn.co/image/62445185cfdb6105cb9e65e495539f1bb364d3cf"];
var RnBPinkCovers = ["https://i.scdn.co/image/c37a24be6d49db3dcb3eaaeaa3760ae378965dc3"];
var RnBBrownCovers = ["https://i.scdn.co/image/95ecc317bd38f4cfe53baac9fc4a42e22b0d7f55","https://i.scdn.co/image/e31fcd61151d94dd25ee21f725caad81acb7e383","https://i.scdn.co/image/cc7c7708444f17c09bddacedd0c230fd3e52e196","https://i.scdn.co/image/e03c51aa81a9efcd1c1dc9513f45180e28829734","https://i.scdn.co/image/9affba3a27e466802de664fa5688d3bbf95e8b24","https://i.scdn.co/image/fab9fb1421e38019957ea78a3ae7e46dbe42da49","https://i.scdn.co/image/4a89ad77ad125b999a722a5f2e3a99e3337b09c3","https://i.scdn.co/image/a809b53f724dab8416e399bda6c0fc2a16ab75ed","https://i.scdn.co/image/edbe4cd91b8c52f0448406772fb6113a69c7ab07","https://i.scdn.co/image/820cb27919c00df60a944e36110e461e87cfc6bf"];
var RnBBlackCovers = ["https://i.scdn.co/image/a55b588c9ab87ecfc8181dcc7a40e0e02b9cda39","https://i.scdn.co/image/225d4551ebc93b56b897b75c695b39ac61c4401c","https://i.scdn.co/image/5d2a8804d7c77e2897a6e0c2b2629adce91b8ceb","https://i.scdn.co/image/9dd12785d3e55addf458042ae4ff29269ebfbbf8","https://i.scdn.co/image/7f92151d7806ee4ffedd2b04558314b439704881","https://i.scdn.co/image/8814ae7f0146db352b5c132f34754ec15f4ae739","https://i.scdn.co/image/98be8968e1c29e6ef80831c5867733d2e687b508","https://i.scdn.co/image/c97fdccc8f6d6a4c669e4b5c460d9222a14c574a","https://i.scdn.co/image/f5ac81c0b2de2d03ad61e94e32555d0c9f25e31a","https://i.scdn.co/image/595856c0d7e272a5c7667227124fbfe079d67cfe"];
var RnBWhiteCovers = ["https://i.scdn.co/image/9855bf24e170909378de30005695126d7ed8fd24","https://i.scdn.co/image/3f2aab0b3738849b998616ed8a12e4bb5bb4c86c","https://i.scdn.co/image/4417452a6583e545a0347d2d30c3a8acf80c0f3d"];
var RnBBeigeCovers = ["https://i.scdn.co/image/c40b6dd66cefc65a9c6baf36376d6b07c272db26","https://i.scdn.co/image/b87926dd8d34d7760d2b551e141129ae53709287"];
var RnBGrayCovers = ["https://i.scdn.co/image/b12694544931e1542ebfb923a1739669e82eae79","https://i.scdn.co/image/9efbe67c1accdb61e9897365acdbcefb1240e743","https://i.scdn.co/image/c050bd363e83a1e285f3249ae34f43e445c0cd6f","https://i.scdn.co/image/056d5d03db611ad1b9f00b1c3d19b7acf989b62e","https://i.scdn.co/image/964e87f80e22f2cd1545c23ee9cde663fadf049d","https://i.scdn.co/image/17389ebe9eb4c57cb14aa970cdeb60c214bbb58a","https://i.scdn.co/image/cfd0473f2006af6fc40a0c36bb975388d2788c44","https://i.scdn.co/image/9b4f34d66ccbafe35c794650eb59ebe115d61a0a","https://i.scdn.co/image/03f017a0243f8700181a566c8201a0ee992a9e91","https://i.scdn.co/image/53d1ef911a50f6e43a581399aa0658cb25d7546c","https://i.scdn.co/image/15212b2c20fe1f5d704c354521090f8039fcda20","https://i.scdn.co/image/b82914ee9b199058ea53bdfd03a21ddb514eb910","https://i.scdn.co/image/7391b9ad6ff2b5e95e653c4345977eaa07d7f58c","https://i.scdn.co/image/8a216dab9d7e5321ff67b850f396d3322f2cbe64"];

//Reggae
var ReggaeRedArtists = ["Delroy Wilson","Rita Marley"];
var ReggaeOrangeArtists = [];
var ReggaeYellowArtists = [];
var ReggaeGreenArtists = ["Bob Marley & The Wailers","Gregory Isaacs","Israel Vibration","Bob Marley & The Wailers","Toots & The Maytals","Stephen Marley"];
var ReggaeBlueArtists = [];
var ReggaePurpleArtists = [];
var ReggaePinkArtists = [];
var ReggaeBrownArtists = ["Ini Kamoze","Pablo Moses","Inner Circle","Ziggy Marley"];
var ReggaeBlackArtists = ["Alborosie"];
var ReggaeWhiteArtists = ["Bob Marley & The Wailers"];
var ReggaeBeigeArtists = ["Protoje","Alborosie"];
var RnBGrayArtists = ["Junior Kelly","Gregory Isaacs","Damian Marley","Bob Marley & The Wailers","Damian Marley","UB40","UB40","Ziggy Marley & The Melody Makers","Steel Pulse","Steel Pulse","John Holt","Alpha Blondy","Jacob Miller","Wayne Wade","Max Romeo","Max Romeo","Bob Marley & The Wailers","Toots & The Maytals","Barrington Levy"];

var ReggaeRedCovers = ["https://i.scdn.co/image/f6b47def50fc682020af4a528d957a78cf1cbf6a","https://i.scdn.co/image/477acc203e319e8a5b205ab85ba8e066d5fdb051"];
var ReggaeOrangeCovers = [];
var ReggaeYellowCovers = [];
var ReggaeGreenCovers = ["https://i.scdn.co/image/f7ccf14994837cad595dc14a8d8b29ae4c5d60b3","https://i.scdn.co/image/67a7cb0a8d42ec3be3211081827567f358259fc2","https://i.scdn.co/image/55fc98aa45746edf3e6334bcd1a8f1d35c3f9ffc","https://i.scdn.co/image/c810edae4eccafd84aa73244b6bcd30f1c8dfa6f","https://i.scdn.co/image/a59b95f1ff9f23eb310ba9ce685845fddd1f1e69","https://i.scdn.co/image/74e48ed03a404006db2b7557932575929532a389"];
var ReggaeBlueCovers = [];
var ReggaePurpleCovers = [];
var ReggaePinkCovers = [];
var ReggaeBrownCovers = ["https://i.scdn.co/image/ad7c1cea64db1e1d497f6577b1597bcb1f994777","https://i.scdn.co/image/fa8d0ee7a5a24b044e44c6728f1de6e1ff23937b","https://i.scdn.co/image/48703d59cc5e093a33b2d53423f607ecb1a9402a","https://i.scdn.co/image/f593c9804f5a97afacf525342931c5a77f3ea85b"];
var ReggaeBlackCovers = ["https://i.scdn.co/image/2f6db9fd9319c6d8e30ed034fd7a8f19fc41c65f"];
var ReggaeWhiteCovers = ["https://i.scdn.co/image/f471f206761429e9150c06a9f1927516e41e855e"];
var ReggaeBeigeCovers = ["https://i.scdn.co/image/885b16970533511d3067f40de5332bb17552302d","https://i.scdn.co/image/6c88ca82d21aa5cb5b80a53a388ef6f551249cc8"];
var ReggaeGrayCovers = ["https://i.scdn.co/image/d989d1f2ec8067eb1a256370386a56bd22861378","https://i.scdn.co/image/01f052d7f0f1df2a4584cc75b67639a51d7f631a","https://i.scdn.co/image/7d42ad03f17b86b83c38e135a66cfc78adf42f0c","https://i.scdn.co/image/f2f50548ed0dbe032c4fdf13b51df672c8e26b94","https://i.scdn.co/image/25af5ff3e093079884ea6038ca88f9b536eb35e4","https://i.scdn.co/image/e465a95428c4a34a3c2bcb1e0b2e8dff9a79756a","https://i.scdn.co/image/d7192fb3314cba3850d4c4a048edde35cd5af7a4","https://i.scdn.co/image/7b8afd79d31dabf5cca5cde21e9b520cca5e4f46","https://i.scdn.co/image/7d8660252251127a0e7e7d0cacf742bd07c43d7d","https://i.scdn.co/image/461ab1dc1b4e3f9648b31ff8069d3660a1a566dc","https://i.scdn.co/image/fa77ebe7bd8c5f7091317fcf20855a863d187c7b","https://i.scdn.co/image/9d39d99f34744b607576712bcdb1981b0cc72498","https://i.scdn.co/image/58aebbe44ce5c1fa38bfca0e6a8d22754680b213","https://i.scdn.co/image/d4fc11d2284078dfa0bd7f0055a729f980effcce"];
//Metal
var MetalRedArtists = [];
var MetalOrangeArtists = [];
var MetalYellowArtists = [];
var MetalGreenArtists = ["Marilyn Manson","Korn","Megadeth","Five Finger Death Punch","Megadeth"];
var MetalBlueArtists = ["Fear Factory","System Of A Down","Metallica"];
var MetalPurpleArtists = [];
var MetalPinkArtists = [];
var MetalBrownArtists = ["Judas Priest","Korn","Dio","Rage Against The Machine"];
var MetalBlackArtists = ["Rage Against The Machine","Diamond Head","Helloween","Limp Bizkit","System Of A Down","Crazy Town","Testament","Volbeat","A Perfect Circle","All That Remains","Sepultura","Sepultura","Metallica","Rammstein","Lamb of God","Drowning Pool","Metallica","Slipknot","Helloween","Judas Priest","Killswitch Engage"];
var MetalWhiteArtists = ["10 Years"];
var MetalBeigeArtists = [];
var MetalGrayArtists = ["Five Finger Death Punch","Audioslave","Slayer","Disturbed","Avenged Sevenfold","Limp Bizkit","Fozzy","Judas Priest","Rage Against The Machine","Anthrax","Marilyn Manson","Limp Bizkit","Sodom","Pantera","Dio","Theory of a Deadman","Rob Zombie","System Of A Down","Papa Roach","Slipknot","Stone Sour"];


var MetalRedCovers = [];
var MetalOrangeCovers = [];
var MetalYellowCovers = [];
var MetalGreenCovers = ["https://i.scdn.co/image/a22479b5fb33a31bcbdf191964fdf615be7f38a9","https://i.scdn.co/image/c26ce66ab4d6fd71658189d0bafeb473234a0f63","https://i.scdn.co/image/ca9bd579bc5785e39e902af111aa8b278d11c732","https://i.scdn.co/image/f1ad4a50d8fd52f19b1f36b5a632c10fe23640c6","https://i.scdn.co/image/42e2138c3b100306ac07dd386f6e5301f61ad506"];
var MetalBlueCovers = [];
var MetalPurpleCovers = [];
var MetalPinkCovers = [];
var MetalBrownCovers = ["https://i.scdn.co/image/25e2b6f33844c92542321bb5c234e801c408beb8","https://i.scdn.co/image/32e04f1d7399703e8344fd21cf5b570140948b0a","https://i.scdn.co/image/836953e4e564916dc253dc4f6585397ca3bccdda","https://i.scdn.co/image/d78afcdcd80e39d229bf3360b86111dd9b8c441c"];
var MetalBlackCovers = ["https://i.scdn.co/image/85236cc12312fac9405206c25bd38479e63a04d6","https://i.scdn.co/image/b1400eb570c33eaad30cedfff58cabf9ccddd33c","https://i.scdn.co/image/9cdff92f505db96eaad31ddb055977a118cac6db","https://i.scdn.co/image/8418feeea3f710b77cac4630b1a65fffd384c3b2","https://i.scdn.co/image/66eb75e0f3a8a91822ba7154e4b41066e63e51f2","https://i.scdn.co/image/1ed64355c2251642234fbee9bf3288e706b39b85","https://i.scdn.co/image/d9725e2b22846cf72189123fd1d5c802125faf7a","https://i.scdn.co/image/13aea93009cca6816f5a37919bb48c91b857bcd7","https://i.scdn.co/image/a38fa4e806f58470a4c0a899f79f1c49e9299be0","https://i.scdn.co/image/5e883703e963abb6e59f73f4a24531950c6fefe2","https://i.scdn.co/image/023b595b9db0184401bbeaa3e414f129cf971cf2","https://i.scdn.co/image/24ba490f0cd64ba1aa7cd5571de6b583a2c27caf","https://i.scdn.co/image/5515df20c6ead399b0ef14169679e40b6ed7dbd7","https://i.scdn.co/image/371d799ebaec660045c9397a530d053557dbd7e7"];
var MetalWhiteCovers = ["https://i.scdn.co/image/3940f913ccce17427997580436845359f85c7634"];
var MetalBeigeCovers = [];
var MetalGrayCovers = ["https://i.scdn.co/image/71ad0ca4643ae8ecbb4e80a64641823bcad7e625","https://i.scdn.co/image/d0cd8c42f2816b208641d030f809d155a7484756","https://i.scdn.co/image/ae67fa6abf93bce85479566effb3ddea6732a284","https://i.scdn.co/image/684896f889df80e20be26cf31832312cd3b9e08b","https://i.scdn.co/image/22da875c060f901998e1f3518ab8fc08d814f926","https://i.scdn.co/image/cf4d4a543d480e68fb96197f0120ead6d6f0e8a2","https://i.scdn.co/image/6969d74d7dec76816f38764f517867580ff21a15","https://i.scdn.co/image/1d496bc0d2a4e0971955a6856b67c8671113e5fa","https://i.scdn.co/image/d36b38316f7c9f8c6e3b66305811fe5ae1517b1a","https://i.scdn.co/image/a92cae6059c7c72abb7958b7f80d63e703cc6a4e","https://i.scdn.co/image/fff9757528e1d13dc59dd217f47ce0f8d487608b","https://i.scdn.co/image/113580af3f0eab8ce44fa253cba5c2bdcdd3e670","https://i.scdn.co/image/19e36f912d1d728b9d2cc0c3ce0d4dc3f191fcb9","https://i.scdn.co/image/260ec57a8ffade8261cf5b57123990626395c64f"];

//Latin
var LatinRedArtists = ["Don Omar"];
var LatinOrangeArtists = [];
var LatinYellowArtists = [];
var LatinGreenArtists = ["De La Ghetto"];
var LatinBlueArtists = ["CNCO","Maluma","Alexis y Fido","Gente De Zona","J Balvin","Danny Ocean","J Balvin"];
var LatinPurpleArtists = ["Daddy Yankee"];
var LatinPinkArtists = ["Karol G"];
var LatinBrownArtists = ["Enrique Iglesias","Sebastian Yatra","Sie7e","Thal�a","Bacilos","Paulina Rubio","Romeo Santos","Natalia Lafourcade"];
var LatinBlackArtists = ["Wisin","Zion & Lennox","Valentino","Reykon","Oscar D'Le�n","Wisin","Pitbull","Don Omar","Romeo Santos","Nicky Jam"];
var LatinWhiteArtists = ["Luis Fonsi","Maite Perroni","Bomba Est�reo","Chino & Nacho","Ozuna"];
var LatinBeigeArtists = ["Jesse & Joy","Shakira","Carlos Vives"];
var LatinGrayArtists = ["Luis Fonsi","Don Omar","CNCO","Joey MonBeigea","Matisse","IAmChino","Chayanne","CNCO","Abraham Mateo","Nicky Jam","Gente De Zona","Yandel","Juanes","Piso 21","Carlos Vives","Nacho","Luis Fonsi","J Balvin","Maluma","Ricky Martin","Jacob Forever"];


var LatinRedCovers = ["https://i.scdn.co/image/287be72c066155aef916069cadf054fc9bf0a882"];
var LatinOrangeCovers = [];
var LatinYellowCovers = [];
var LatinGreenCovers = ["https://i.scdn.co/image/e9025240ef21cb3d3f4bfdc0b4738cc4cbcf3138"];
var LatinBlueCovers = ["https://i.scdn.co/image/d994664fe58a6436a4ba4195617463cc8d60ed1d","https://i.scdn.co/image/06cae8d5a5c1a1e8d9e41a8c4f0866936a55515d","https://i.scdn.co/image/fa314ab8d2d422f1c81941a4a8c5db281018b784","https://i.scdn.co/image/1d1f1da622055407f1154e1af93a51a629c84a01","https://i.scdn.co/image/177be761c3d63fd28990ba04e7693884a4ef5dc4","https://i.scdn.co/image/f4827b927ab977c63642a21b510a2c4793b14d91","https://i.scdn.co/image/ff61c019f44bfee06d8e9aa1816238014d33037c"];
var LatinPurpleCovers = ["https://i.scdn.co/image/5fde53b334bd0c9f5d731d30d3ed72bc986cd71d"];
var LatinPinkCovers = ["https://i.scdn.co/image/8739c3c7f3bf8bc2d721f82197d991b37cf83622"];
var LatinBrownCovers = ["https://i.scdn.co/image/d164559e048a94f4847e60dda3ffb8f4bfee4f31","https://i.scdn.co/image/d433e8c739695f88784b9e36912b305ceca5076a","https://i.scdn.co/image/b28354990303194cae0d3f0d21211711ff374bbb","https://i.scdn.co/image/baff341635bec603e5d791abe127a34201b0860c","https://i.scdn.co/image/2703f2840020762c1169c1b231632069a3024423","https://i.scdn.co/image/73d68bd865f6f95ee762b3467fbb7cee873e2d21","https://i.scdn.co/image/e7803d97d7e309b2882f7311729643e0cdd5af4f","https://i.scdn.co/image/af9be45c426b265f40cfaf8106e6552079675940"];
var LatinBlackCovers = ["https://i.scdn.co/image/b9970bf538c792d2fd116c1671a4a29162b7f01f","https://i.scdn.co/image/b83dd31f940cb5e1368a2dbb2a394555dafd9669","https://i.scdn.co/image/61bf0f05ca64701f65e1a7f2cc317030f05f5f05","https://i.scdn.co/image/994e93b899e98f9c3d27b5ff49c7feb11467ebea","https://i.scdn.co/image/715976cb9aff0a40af87607f970781abfd70271d","https://i.scdn.co/image/8592efd7ec9a986fce9b248475ea5133480031e7","https://i.scdn.co/image/881fedd75a3c0b6de327ff10aebe4e3866463bd3","https://i.scdn.co/image/64407da78c7cc9d8b6ec767ad7e0ff7ba6b1affb","https://i.scdn.co/image/d642faa098f49008625d6128806b341c9706a585","https://i.scdn.co/image/4b3b5550488c3319d74c26693642d6064ff7463d"];
var LatinWhiteCovers = ["https://i.scdn.co/image/edcc53317411b5e025e920857fb0f871c4087ce9","https://i.scdn.co/image/cc39d0592479a802cc3b61b4a26b9349bba0a445","https://i.scdn.co/image/50aa1c2e65bec0c5f7e54a64f39eee4cc59549d5","https://i.scdn.co/image/24e00b5940ea9e66f689013cb973ac5161443c44","https://i.scdn.co/image/be41af2ac36aeb3f8019d06971e486a932159726"];
var LatinBeigeCovers = ["https://i.scdn.co/image/aadba069885777d4cfd1102b5bdb6935d97e211f","https://i.scdn.co/image/dfc33b5bf07955cd5a21fd651bc13fc5cbef3133","https://i.scdn.co/image/dcf90c219dd0587742f61ff57f344201c3ed6b8e"];
var LatinGrayCovers = ["https://i.scdn.co/image/4cb7f82b38a318311e2726509577bd5574228556","https://i.scdn.co/image/062ebb6ed8e5013e088c04e081a75dfdf7c6cbc9","https://i.scdn.co/image/51465c25b2d45aa30e082d92577d0c97466679a3","https://i.scdn.co/image/06c6d5f79961a2611c72ba9971e5f41615c4897c","https://i.scdn.co/image/84b0120927edc55e8e559d6527339432c2938d17","https://i.scdn.co/image/4344339e1c284eb63b88233b2adaf6d3bc3cde6c","https://i.scdn.co/image/919ed90849714dbcc5d77738159a0ae25e10984e","https://i.scdn.co/image/2b98bab77614f78e306f6e28fb6df0622852bfcc","https://i.scdn.co/image/9ee2d350ee46cecbded8df3fc2d3052504252a29","https://i.scdn.co/image/7306577e182cabedfab078922068638154f8b150","https://i.scdn.co/image/3960452493295e8d570f828b9ae4cd2ab322d204","https://i.scdn.co/image/f06259a378f1425ce9e2ed73d3fccd041862a395","https://i.scdn.co/image/8ccba5ac21b3120342143fda6c319fce48dee994","https://i.scdn.co/image/e41240fde893cac0927cc11ab4457979664c0bbc"];
