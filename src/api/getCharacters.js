const mockCharacters = [
    {
        character_name: "Akuma",
        full_name: "Akuma",
        char_id: 1,
        nickname: "Master of the Fist",
        synopsis: "A mysterious fighter… a demon. He finds himself in the middle of the Mishima blood feud by a pre-existing relationship with Kazumi Mishima, Heihachi's wife, who once saved his life. He makes his debut in Tekken 7 promising to fulfill a debt owed to Kazumi by killing Heihachi, as well as their son Kazuya Mishima.",
        fight_style: "ANSATSUKEN",
        nation: "Japan"
    },
    {
        character_name: "Alisa",
        full_name: "Alisa Bosconovitch",
        char_id: 2,
        nickname: "",
        synopsis: "An android created by Dr. Bosconovitch as a bodyguard for Jin Kazama. Her design itself is modeled after Bosconovitch's own lost daughter. Her fighting capabilities are extremely high. She can perform attacks with high mobility using arm-mounted missiles and thrusters.",
        fight_style: "UNIQUE",
        nation: "Russia"
    },
    {
        character_name: "Anna",
        full_name: "Anna Williams",
        char_id: 3,
        nickname: "Scarlet Lightning",
        synopsis: "Anna Williams was assigned to lead G Corporations Special Forces to fight against her sister, Nina Williams, with whom she has a fierce rivalry. However, Anna became exhausted by the endless fighting. Additionally, at the King of Iron Fist Tournament 6 (which Anna attended as part of her Special Forces work), Anna’s popularity as a fighter ranked far below her sister’s. Anna’s heart broke as she was confronted by the difference in the world’s perception of herself and her sister.",
        fight_style: "AIKIDO AND KOPPOJUTSU",
        nation: "Ireland"
    },
    {
        character_name: "Armor King",
        full_name: "Armor King",
        char_id: 4,
        nickname: "",
        synopsis: "A mysterious wrestler who wears a suit of steel armor and a black jaguar mask. He was presumed to have been killed in a bar fight with Craig Marduk, yet he's returned to fight once again. No one knows his true identity.",
        fight_style: "PRO-WRESTLING",
        nation: "Unknown"
    },
    {
        character_name: "Asuka",
        full_name: "Asuka Kazama",
        char_id: 5,
        nickname: "Spirited Peacemaker",
        synopsis: "Daughter of the Kazama Style Traditional Martial Arts School and known as \"Gang Mediator\" in her hometown. Ever since she involved herself in a certain street fight, Lili has viewed her as a rival. She knows that Jin Kazama, head of the Mishima Zaibatsu, is her cousin and vows to take him down.",
        fight_style: "KAZAMA STYLE",
        nation: "Japan"
    },
    {
        character_name: "Bob",
        full_name: "Robert Richards",
        char_id: 6,
        nickname: "The Perfect Body",
        synopsis: "Bob entered the King of Iron Fist Tournament to prove he was the strongest in the world. On the way to his match, the road before him exploded, blocking his way forward. The smoke cleared to reveal a lone man, emanating an evil aura.",
        fight_style: "FREESTYLE KARATE",
        nation: "USA"
    },
    {
        character_name: "Bryan",
        full_name: "Bryan Fury",
        char_id: 7,
        nickname: "Snake Eyes",
        synopsis: "A savage fighter who uses a kickboxing fighting style. He's reported to have died twice and was somehow revived each time. He once belonged to an international police force, but Dr. Abel and Dr. Bosconovitch made him a replicant with a perpetual generator that keeps him alive.",
        fight_style: "KICKBOXING",
        nation: "USA"
    },
    {
        character_name: "Claudio",
        full_name: "Claudio Serafino",
        char_id: 8,
        nickname: "",
        synopsis: "The Archers of Sirius are a group of exorcists who have been banishing supernatural entities from this world since ancient times. A highly secretive organization, its existence is unknown to the public. Although it is not known how their existence was revealed, the Archers of Sirius were suddenly approached by the Mishima Zaibatsu. They were heavy-handedly requested by the Mishima Zaibatsu to join their conglomerate but naturally refused. This did not stop the persistent pressure from the Mishima Zaibatsu, however.",
        fight_style: "SIRIUS-STYLE",
        nation: "Italy"
    },
    {
        character_name: "Devil Jin",
        full_name: "Jin Kazama",
        char_id: 9,
        nickname: "",
        synopsis: "After he defeated Azazel, Jin Kazama was apprehended by UN troops. As his unconscious body was being transported by helicopter, he became possessed by his devil form, ripped free from his straitjacket, tore through the helicopter's fuselage with a powerful beam attack, and then escaped.",
        fight_style: "MISHIMA STYLE AND KAZAMA STYLE",
        nation: "Unknown"
    },
    {
        character_name: "Dragunov",
        full_name: "Sergei Dragunov",
        char_id: 10,
        nickname: "The White Angel of Death",
        synopsis: "Sergei Dragunov entered the King of Iron Fist Tournament on army orders. At the designated arena of his first match, a woman appeared before him. There was something strangely familiar about her...",
        fight_style: "COMMANDO SAMBO",
        nation: "Russia"
    },
    {
        character_name: "Eddy",
        full_name: "Eddy Gordo",
        char_id: 11,
        nickname: "Vengeful Demon of Prison",
        synopsis: "Eddy Gordo went to G Corporation to exact revenge on Kazuya Mishima for murdering his father. After he'd taken out a crowd of guards, a young girl in a strange outfit stood before him, and struck a pose. \"You're not getting past me, old man! Teehee!\"",
        fight_style: "CAPOEIRA",
        nation: "Brazil"
    },
    {
        character_name: "Eliza",
        full_name: "Eliza",
        char_id: 12,
        nickname: "Sexy Vampire",
        synopsis: "Eliza was only supposed to take a short nap, but she ended up sleeping for 600 years. Upon awakening, she found her powers as a vampire had faded to nothing. In an attempt to restore her strength, she consumed the blood of several victims. However, it wasn't enough.",
        fight_style: "UNKNOWN",
        nation: "Unknown"
    },
    {
        character_name: "Fahkumram",
        full_name: "Fahkumram",
        char_id: 13,
        nickname: "",
        synopsis: "Struck by lightning at the age of 12, Fahkumram became a Muay Thai champion by the time he was 18. Married and father of a daughter, his life took a dramatic turn for the worse. Ambshed and kept prisoner by the military, his family was taken hostage, leaving no choice to Fahkumram but to comply with his captors' orders and fight in underground battle rings. Unable to see a way out, the once proud champion gradually lost himself in more extreme acts of violence and rage. He competes in the King of Iron Fist Tournament as his last hope to gain freedom for both him and his family.",
        fight_style: "MUAY THAI",
        nation: "Thailand"
    },
    {
        character_name: "Feng",
        full_name: "Feng Wei",
        char_id: 14,
        nickname: "",
        synopsis: "Under the trining of a \"God Fist\" Chinese kenpo master, Feng Wei trives to be considered the strongest amongst his peers. He now continues his training, aiming to achieve the \"Dragon God\" as written within the Secrets of the God Fist scrolls, stolen from the Mishima Zaibatsu.",
        fight_style: "CHINESE KENPO",
        nation: "China"
    },
    {
        character_name: "Ganryu",
        full_name: "Ganryu",
        char_id: 15,
        nickname: "Reckless Great Maidenhair",
        synopsis: "To gather some much-needed publicity for his restaurant \"Chanko Paradise\", Ganryu entered The King of Iron Fist Tournament 6. As a result, Chanko Paradise's popularity soared, and Ganryu found himself busy tending to his newfound success.",
        fight_style: "SUMO",
        nation: "Japan"
    },
    {
        character_name: "Geese",
        full_name: "Geese Howard",
        char_id: 16,
        nickname: "Nightmare Geese",
        synopsis: "The CEO of The Howard Connection and most powerful man in South Town, controlling it from behind the scenes. Geese Howard is well-versed in ancient Japanese martial arts, and specialises in reversing his opponent's attacks with his various Atemi counter-throws. He wields an overwhelming presence with his charismatic evil. Interested in the power of the Devil Gene, Geese enters The King of Iron Fist Tournament 7 to obtain it for himself.",
        fight_style: "KOBUJUTSU AND AIKI-JUJUTSU",
        nation: "USA"
    },
    {
        character_name: "Gigas",
        full_name: "Gigas",
        char_id: 17,
        nickname: "",
        synopsis: "In a power struggle between Mishima Zaibatsu and G Corporation, the latter develops a new biotechnological weapon called Gigas. Led by Jane, the team behind the Jack series and the Gigas team compete in the King of Iron Fist Tournament to determine which is the best next-gen humanoid weapon. G Corporation enters Gigas into the tournament to test its capabilities and provoke Heihachi Mishima. The first battle takes place on the rooftop of G Corp's Millennium Tower.",
        fight_style: "DESTRUCTIVE IMPULSE",
        nation: "Unknown"
    },
    {
        character_name: "Heihachi",
        full_name: "Heihachi Mishima",
        char_id: 18,
        nickname: "The King of Iron Fist",
        synopsis: "Heihachi Mishima is the son of Jinpachi, who founded a corporation selling weapons during World War Two. Jinpachi turned pacifist after the war and focused on developing Mishima Style Fighting Karate, training Heihachi and Kazumi Hachijo. Heihachi launched a coup at 30 and took control of the corporation from his father, turning it into the Mishima Zaibatsu. He imprisoned Jinpachi beneath the Hon-Maru temple when he tried to retake control. Jinpachi was confirmed dead 15 years later, and Heihachi would have been 45.",
        fight_style: "MISHIMA STYLE KARATE",
        nation: "Japan"
    },
    {
        character_name: "Hwoarang",
        full_name: "Hwoarang",
        char_id: 19,
        nickname: "Blood Talon",
        synopsis: "Prior to King of Iron Fist Tournament 3, Hwoarang was a Taekwondo student of Baek Doo San and led a street fraud team using dishonest tactics to increase bets. He encountered Jin Kazama and their fight ended in a draw, which was Hwoarang's first failure. Baek Doo San went missing and was believed to have been killed by Ogre. Hwoarang entered the tournament to avenge his master and settle his score with Jin, but it is unknown if they fought.",
        fight_style: "TAEKWONDO",
        nation: "South Korea"
    },
    {
        character_name: "Jack-7",
        full_name: "Jack",
        char_id: 20,
        nickname: "High Tech Annihilator",
        synopsis: "The first Jack robot was created by Doctor Bosconovitch in the Soviet Union as a killing machine. The Russian military sent Jack to The King of Iron Fist Tournament to eliminate Kazuya Mishima, but he failed. Jack was upgraded and renamed Jack-2, but during a mission, he abandoned it to save an infected girl named Jane. The Russian military kept his desertion a secret and searched for him. Jack-2 entered The King of Iron Fist Tournament 2 to free Doctor Bosconovitch and become human.",
        fight_style: "BRUTE FORCE",
        nation: "Russia"
    },
    {
        character_name: "Jin",
        full_name: "Jin Kazama",
        char_id: 21,
        nickname: "Lightning of Fate",
        synopsis: "Jin Kazama is the son of Jun Kazama and Kazuya Mishima, inheriting his father's Devil Gene. Jun managed to keep Devil at bay during her pregnancy and raised Jin in a remote location, teaching him the Kazama family's fighting style. When Jin was fifteen, Ogre attacked and abducted Jun. Devil seized its chance to possess Jin, who then sought out his grandfather, Heihachi Mishima. Heihachi trained Jin in Mishima-style Karate, and Jin attended the Mishima Polytechnical School, where he met Xiaoyu and Hwoarang, with whom he developed a rivalry after a draw in a street fight.",
        fight_style: "KAZAMA STYLE MARTIAL ARTS",
        nation: "Japan"
    },
    {
        character_name: "Josie",
        full_name: "Josie Rizal",
        char_id: 22,
        nickname: "",
        synopsis: "Josie was known as a crybaby since childhood, but her martial arts-loving parents insisted on her training, and she became a skilled kickboxer. Despite her sensitivity, Josie made a living through modeling and fighting. After witnessing the Tekken Force's aid efforts during a typhoon, Josie decides to join the organization and participates in its recruitment exam. While training, she faces her fear of bears when she encounters one on her usual running course.",
        fight_style: "KICKBOXING AND MUAY THAI",
        nation: "Philippines"
    },
    {
        character_name: "Julia",
        full_name: "Julia Chang",
        char_id: 23,
        nickname: "Wandering Fighter",
        synopsis: "Julia was abandoned as a baby and was later adopted by Michelle Chang, a young woman from a native tribe who taught her to fight and raised her as her own. In the third King of Iron Fist Tournament, Michelle went missing and Julia entered the tournament to rescue her, discovering that Heihachi had used Michelle's pendant to fully awaken Ogre. After this, Julia turned her attention to researching ways to restore the global ecosystem and joined a team of researchers at the G Corporation headquarters, but her research was stolen by the Mishima Zaibatsu, leading her to enter the fourth King of Iron Fist tournament to retrieve it. During this time, she caught the attention of Ganryu, who fell in love with her due to her resemblance to Michelle, and joined her in the fifth King of Iron Fist tournament to win her heart.",
        fight_style: "CHANG KENPO",
        nation: "USA"
    },
    {
        character_name: "Katarina",
        full_name: "Katarina Alves",
        char_id: 24,
        nickname: "",
        synopsis: "Katarina was orphaned at a young age and eventually adopted by a stranger. She rebelled at first but they grew close. When her adoptive father disappeared, she entered the King of Iron Fist Tournament 7 to find him. In her first match, she fought against Gigas, who she later found out was her adoptive father who had been experimented on by G Corporation.",
        fight_style: "SAVATE",
        nation: "Brazil"
    },
    {
        character_name: "Kazumi",
        full_name: "Kazumi Hachijo Mishima",
        char_id: 25,
        nickname: "",
        synopsis: "Kazumi Mishima, the wife of Heihachi Mishima, is well versed in Hachijō Karate. She was childhood friends with her husband Heihachi and eventually, they fell in love. Through their love, they birthed a healthy young boy. Fast forward a few years later, Heihachi would become the head of a huge organization called the Mishima Zaibatsu, with plans to conquer the world. Kazumi loved Heihachi unconditionally, but at the same time, he was beginning to feel dangerous. In this state, Heihachi threw the world into war and Kazumi took it upon herself to stop him.",
        fight_style: "HACHIJO STYLE AND MISHIMA STYLE KARATE",
        nation: "Japan"
    },
    {
        character_name: "Kazuya",
        full_name: "Kazuya Mishima",
        char_id: 26,
        nickname: "Cold-Blooded Oppressor",
        synopsis: "Kazuya is a complex character in the Tekken series, initially portrayed as a hero seeking revenge against his abusive father, Heihachi. However, he was always intended to be more villainous, with plans for world domination. Kazuya's tragic backstory involves the disappearance of his grandfather, Jinpachi, and the death of his mother, Kazumi, who had been tasked with stopping Heihachi from pursuing war. Unbeknownst to Kazuya, his mother had a demonic alter ego that tried to kill Heihachi. These events shaped Kazuya into a ruthless and power-hungry fighter, eventually leading him to become the devil-like entity known as Devil or Devil Kazuya.",
        fight_style: "MISHIMA STYLE KARATE",
        nation: "Japan"
    },
    {
        character_name: "King",
        full_name: "King II",
        char_id: 27,
        nickname: "Anger of the Beast",
        synopsis: "The second King was a street urchin who was brought up in the first King's orphanage. Until the age of twenty-four, this person worked hard with King until, one day, news broke of the first King's death. Seeing that the orphanage would crumble into ruin, this man donned the mask of King and imitatedhis style.Unfortunately, he had only seen King's wrestling moves as a child, and he lost every competition he entered. Having heard of King's death, Armor King, an old friend of King's felt obligated to train the young man and to help him take revenge. For four years, the two of them trained, and the new King learned quickly, maturing into a forceful wrestler with extreme power, known as King II. By this time, the now twenty-eight-year-old wrestler was a worthy heir to his successor. Feeling the time was right, Armor King tearfully recounted how King had died at the hands of Ogre. King entered the King of Iron Fist Tournament 3 determined to end Ogre.",
        fight_style: "LUCHA LIBRE",
        nation: "Mexico"
    },
    {
        character_name: "Kuma",
        full_name: "Kuma II",
        char_id: 28,
        nickname: "Master of the Salmon",
        synopsis: "Kuma II was first introduced in Tekken 3, and returned for all subsequent games. He replaced Kuma I, his father, who died of an old age just after the second tournament. Just like his father, the second Kuma is Heihachi Mishima's pet and bodyguard. Kuma is in love with Panda, but she neither feels the same nor has any interest in him. It is noted that although she does not love him, she does occasionally give him a thought",
        fight_style: "KUMA SHINKEN",
        nation: "Japan"
    },
    {
        character_name: "Lars",
        full_name: "Lars Alexandersson",
        char_id: 29,
        nickname: "Lion of the Rebellion",
        synopsis: "Lars is a charismatic and just leader, leading a coup against the Mishima Zaibatsu when their actions no longer aligned with his beliefs. He can be short tempered and emotional, but also practical and able to set aside personal feelings for the greater good. He values loyalty and trusts those who have proven themselves to him, such as Tougou, Alisa, and Lee. Lars is a pragmatic soldier who is willing to use a gun if it serves his purpose and is unafraid to fight on the front lines alongside his troops.",
        fight_style: "KARATE",
        nation: "Sweden"
    },
    {
        character_name: "Law",
        full_name: "Marshall Law",
        char_id: 30,
        nickname: "The Legendary Dragon",
        synopsis: "Marshall Law is a skilled martial artist and friend of Paul Phoenix. He entered the first King of Iron Fist Tournament to win money to open his own dojo. After losing the tournament, he eventually opened a dojo, trained his son, and established a nationwide fast food chain. However, he suffered financial setbacks and entered subsequent tournaments to cover costs. Marshall also faced personal crises, such as his son causing a serious accident and losing students at his dojo. He teamed up with Paul and Steve Fox in the sixth tournament, but did not win. Marshall searched for a suitable replacement to run his dojo and traveled to China to find a skilled martial artist.",
        fight_style: "JEET KUNE DO",
        nation: "USA"
    },
    {
        character_name: "Lee",
        full_name: "Lee Chaolan",
        char_id: 31,
        nickname: "Silver-Haired Demon",
        synopsis: "Lee was orphaned at a young age and lived on the streets until he was adopted by Heihachi Mishima, who saw his potential as a fighter. He was raised alongside Heihachi's biological son, Kazuya, and trained in Mishima Karate and business. He eventually moved to San Francisco and gained a reputation as a skilled fighter, earning the nickname 'Silver-Haired Demon'. When Heihachi announced the first King of Iron Fist Tournament, Lee saw it as an opportunity to beat Kazuya and gain control of the Mishima Zaibatsu. However, he lost to Kazuya in the tournament and Kazuya went on to become CEO of the Mishima Zaibatsu.",
        fight_style: "MISHIMA STYLE COMBINED WITH MARTIAL ARTS",
        nation: "Japan"
    },
    {
        character_name: "Lei",
        full_name: "Lei Wulong",
        char_id: 32,
        nickname: "Super Police",
        synopsis: "Lei Wulong, the top detective of the Hong Kong International Police Force, entered the King of Iron Fist Tournament 2 to confront Kazuya Mishima about the Mishima Zaibatsu's Mafia connections, and defeated Bruce Irvin in the process. After the tournament, he suspected that the Mishima Zaibatsu staged Bruce's supposed death in another plane crash, but did not investigate further. He later investigated Bryan Fury's connections to drug dealers and participated in the King of Iron Fist Tournament 3 at Heihachi Mishima's request, despite being unsure of the reason. Lei was also investigating the mysterious disappearances of martial artists worldwide.",
        fight_style: "FIVE ANIMALS FORM",
        nation: "China"
    },
    {
        character_name: "Leo",
        full_name: "Leo Kliesen",
        char_id: 33,
        nickname: "",
        synopsis: "Leo's father was a famous spelunker who disappeared on an expedition, and Leo's mother, an executive at G Corporation, was murdered. After the police investigation was closed, Leo suspected Kazuya Mishima and attended the King of Iron Fist Tournament 6 to take revenge, but was unable to confront Kazuya. Leo later discovered that their mother had worked for the Mishima Zaibatsu and entered the King of Iron Fist Tournament 7 to learn more about her work.",
        fight_style: "BAJI QUAN",
        nation: "Germany"
    },
    {
        character_name: "Leroy",
        full_name: "Leroy Smith",
        char_id: 34,
        nickname: "Grandmaster of Drip",
        synopsis: "Leroy's family was killed in gang violence in New York when he was a child, leaving him injured and without a family. He was rescued by a passing trade ship and worked as a trader until he discovered Wing Chun in Hong Kong. Half a century later, Leroy returned to New York to seek revenge against the gangs responsible for his family's death and destroyed their power. He later learned that the Mishima Zaibatsu was behind the violence and joined the King of Iron Fist Tournament to confront Heihachi Mishima, who he held responsible.",
        fight_style: "WING CHUN",
        nation: "USA"
    },
    {
        character_name: "Lidia",
        full_name: "Lidia Sobieska",
        char_id: 35,
        nickname: "Prime Minister of the Republic of Poland",
        synopsis: "Lidia comes from a prominent political family in Poland, but her interest lies in traditional karate. Her father and grandfather were killed in an act of terrorism, which led her to pursue a career in law and become a six-time world karate champion. Lidia eventually became prime minister of Poland at 29, but her demands for the withdrawal of Mishima Zaibatsu's Tekken Force soldiers were refused by Heihachi Mishima. As a result, Lidia entered the King of Iron Fist Tournament to confront him directly.",
        fight_style: "TRADITIONAL KARATE",
        nation: "Poland"
    },
    {
        character_name: "Lili",
        full_name: "Emilie De Rochefort",
        char_id: 36,
        nickname: "Platinum Grace",
        synopsis: "Lili De Rochefort, the only daughter of a wealthy oil magnate, was kidnapped four years before the King of Iron Fist Tournament 5, which triggered her interest in fighting. Lili entered the tournament to put an end to her father’s business troubles caused by the Mishima Zaibatsu, but she was defeated by Asuka Kazama. Banned from leaving home, Lili formulated a plan to reclaim her father’s oil fields from the Mishima Zaibatsu and entered the King of Iron Fist Tournament 6. She later encountered Lars Alexandersson and Alisa Bosconovitch and provided them with a vehicle to assist in their conflict with the Mishima Zaibatsu. Lili entered the King of Iron Fist Tournament 7 without her father’s knowledge and was matched against Asuka Kazama.",
        fight_style: "GYMNASTICS AND STREET FIGHTING",
        nation: "Monaco"
    },
    {
        character_name: "Lucky Chloe",
        full_name: "Lucky Chloe",
        char_id: 37,
        nickname: "",
        synopsis: "Lucky Chloe is a cheerful and playful character who loves Japanese culture and cats, but her happy demeanor is just an act. She can be bratty, mean, and impulsive, as seen in various character endings. Despite this, she is confident in her fighting abilities and even challenges Eddy to a fight after he defeats multiple G Corporation guards.",
        fight_style: "FREESTYLE DANCE",
        nation: "Unknown"
    },
    {
        character_name: "Marduk",
        full_name: "Craig Marduk",
        char_id: 38,
        nickname: "Brutal Vale Tudo Fighter",
        synopsis: "Craig Marduk was a Vale Tudo champion who was banned from the sport due to a scandal. He later killed a professional wrestler named Armor King in a bar fight and was sentenced to ten years in prison. After being released early, Marduk was tricked by King II into fighting him in a tournament. Marduk lost and was hospitalized, but returned to the sport wearing Armor King's black jaguar mask and beat all his opponents. He taunted King, who accepted the challenge and defeated Marduk in another tournament. After the match, Marduk was attacked and saw his attacker was Armor King. He later discovered that the man he killed was Armor King's brother and was forgiven by the new Armor King.",
        fight_style: "VALE TUDO",
        nation: "Australia"
    },
    {
        character_name: "Master Raven",
        full_name: "Master Raven",
        char_id: 39,
        nickname: "",
        synopsis: "Very little is known about Master Raven. Nevertheless, the fighter appears to have a cold attitude and seems to take her mission seriously, as she says: \"Mission accomplished\" when winning a battle. Much like Raven before her, her true identity remains unknown and she uses a codename \"Master Raven\" suggesting that the name \"Raven\" is used as a class within the United Nations secret agent division to which they both belong.",
        fight_style: "NINJUTSU",
        nation: "Unknown"
    },
    {
        character_name: "Miguel",
        full_name: "Miguel Caballero Rojo",
        char_id: 40,
        nickname: "",
        synopsis: "Miguel, born into a conservative Spanish family, left home at 15 due to his wild nature, except for his younger sister whom he adored. Unable to attend her wedding, he watched as the Mishima Zaibatsu bombed the church, killing his sister. In vengeance, he swore to take down their leader, Jin Kazama, and joined a resistance movement during the King of Iron Fist Tournament 6.",
        fight_style: "UNTRAINED BRAWLING",
        nation: "Spain"
    },
    {
        character_name: "Negan",
        full_name: "Negan Smith",
        char_id: 41,
        nickname: "The Cold-Blooded",
        synopsis: "Negan has a charismatic, cocky, manipulative and brutal personality with a dark sense of humor. Negan carries a baseball bat wrapped in barbed wire which he named Lucille, after his late wife. During battle, he appears self confident and arrogant, smirking at his opponents in amusement before and after the fight. He has a penchant for provocation and power plays, the stronger resistance he faces, the more he seems to enjoy the showdown.",
        fight_style: "SELF TAUGHT",
        nation: "USA"
    },
    {
        character_name: "Nina",
        full_name: "Nina Williams",
        char_id: 42,
        nickname: "Silent Assassin",
        synopsis: "Nina and her younger sister are from a family of assassins hailing from the Republic of Ireland. Nina was trained in assassination arts by her father and in aikido by her mother. Anna was trained alongside Nina, and the two developed a deadly rivalry, often attempting to humiliate or kill one another.",
        fight_style: "AIKIDO AND KOPPOJUTSU",
        nation: "Ireland"
    },
    {
        character_name: "Noctis",
        full_name: "Noctis Lucis Caelum",
        char_id: 43,
        nickname: "Lucian Prince",
        synopsis: "Whilst being of aristocratic birth and bearing, Noctis treats his close friends as equals and is often informal with them. He is somewhat reserved and lacks in some social skills due to his isolated childhood upbringing, though is playful and more open with close friends he feels more comfortable around. He can be reckless and egotistical, and worries over others' opinions of him. Ultimately though, he wishes to protect and please his friends and has become more confident in himself.",
        fight_style: "WEAPON SUMMONING",
        nation: "Kingdom of Lucis"
    },
    {
        character_name: "Panda",
        full_name: "Panda",
        char_id: 44,
        nickname: "",
        synopsis: "Very intelligent, Panda seems to have an almost human-like empathy and thought process. She is shown to be very considerate to Xiaoyu when she is upset, as well as supportive towards her decisions. She sometimes shows a playful side, similar to Xiaoyu.",
        fight_style: "KUMA SHINKEN",
        nation: "China"
    },
    {
        character_name: "Paul",
        full_name: "Paul Phoenix",
        char_id: 45,
        nickname: "Hot-Blooded Destroyer",
        synopsis: "Paul Phoenix is an American fighter who was inspired to become the strongest fighter after watching Bear Killer Willy Williams as a child. He trained with Marshall Law and Lee Chaolan and remained undefeated until he fought Kazuya Mishima to a draw. Paul entered The King of Iron Fist Tournament twice and defeated Kuma but lost to Kazuya and had to forfeit due to traffic. In the third tournament, Paul defeated all opponents including Ogre but was unaware that Ogre had not been defeated and was ultimately defeated by Jin Kazama. Paul's claims of victory caused his dojo to go out of business, and he entered The King of Iron Fist Tournament 4 to seek his overdue victory but lost to Kuma.",
        fight_style: "MODIFIED JUDO",
        nation: "USA"
    },
    {
        character_name: "Shaheen",
        full_name: "Shaheen",
        char_id: 46,
        nickname: "",
        synopsis: "Shaheen is a former army soldier with exceptional one-on-one combat skills who currently works for a private military firm specializing in security services. After the mysterious death of his friend, who owned an oil company, Shaheen suspects foul play when the company is bought by G Corporation and its management resigns. Through investigations, he learns that Kazuya Mishima, a demonic man, is behind G Corp's actions. Despite his doubts, Shaheen embarks on a solo mission to infiltrate G Corp seeking revenge.",
        fight_style: "MILITARY FIGHTING STYLE",
        nation: "Saudi Arabia"
    },
    {
        character_name: "Steve",
        full_name: "Steve Fox",
        char_id: 47,
        nickname: "Stinging Hook",
        synopsis: "Heihachi Mishima, after witnessing the power of the Devil Gene in the second King of Iron Fist Tournament, began a genetic modification plan to replicate the gene's effects on humans. Using eggs from Nina Williams, the Mishima Zaibatsu created babies for experimentation, resulting in mostly failed attempts. One child, Subject NT01 (Steve), was able to escape with the help of his doctor, Emma Kliesen, who later adopted him. Steve became a middleweight boxing champion at 21 and aimed to uncover his birth parents and the reason behind his scar.",
        fight_style: "BOXING",
        nation: "United Kingdom"
    },
    {
        character_name: "Xiaoyu",
        full_name: "Ling Xiaoyu",
        char_id: 48,
        nickname: "Dancing Phoenix",
        synopsis: "Ling Xiaoyu, a talented martial artist, wanted to build a theme park in China and sought out Heihachi Mishima, owner of the Mishima Zaibatsu, for help. She stowed away on a yacht marked with the Zaibatsu's name and beat up the staff when discovered. Heihachi promised to help build her theme park if she won the King of Iron Fist Tournament 3. Though she lost, Xiaoyu became a ward of the Zaibatsu, attending school and making friends with Heihachi's grandson and her panda bodyguard. When she received a warning email about Heihachi's intentions, Xiaoyu entered the King of Iron Fist Tournament 4 to reunite with her missing friend Jin and uncover the truth about the Mishima Zaibatsu.",
        fight_style: "BAGUAZHANG AND PIGUAQUAN",
        nation: "Chinese"
    },
    {
        character_name: "Yoshimitsu",
        full_name: "Yoshimitsu",
        char_id: 49,
        nickname: "Space Ninja",
        synopsis: "Yoshimitsu's benevolence hasn't changed since the first Iron Fist Tournament. He enjoys helping people who are in need, as seen with Law and his family in Tekken. He also became the helper of Dr. Bosconovitch prior to Bryan Fury's betrayal of the Manji Clan in Tekken 5.",
        fight_style: "ADVANCED MANJI NINJUTSU",
        nation: "Japan"
    },
    {
        character_name: "Zafina",
        full_name: "Zafina",
        char_id: 50,
        nickname: "",
        synopsis: "Zafina, a spiritual warrior from the Middle East, was appointed as the protector of an imperial tomb after defeating a foreign army that attacked it. She later discovered an ancient prophecy that spoke of the release of a captive that would bring about the destruction of the world. Zafina encountered Azazel, a demon from the prophecy, and became aware of Lars Alexandersson and Jin Kazama's roles in preventing the catastrophe. After Azazel's supposed defeat, Zafina discovered that the demon had survived and sealed it in her body to prevent it from overpowering her. She sought to destroy Kazuya and Jin to prevent Azazel's power from taking over and sought out the Archers of Sirius for their help.",
        fight_style: "ANCIENT ASSASSINATION ARTS",
        nation: "Egypt"
    },
    {
        character_name: "Kunimitsu",
        full_name: "Kunimitsu II",
        char_id: 51,
        nickname: "",
        synopsis: "Loyal and loving to her family, Kunimitsu dedicated herself to her shinobi training, taking up her mother's Manji Ninja Arts as the main template for her fighting style. After eventually surpassing her mother, she took up her mother's title, admiring her, and became a phantom thief, pilfering various high-stake items for high-class clients to give her family funds for a comfortable life. When her mother fell ill, she learns of the phantom sword Yoshimitsu; the legendary blade her great-grandfather desired to replicate, but could not attain as her mother was defeated by Yoshimitsu. Determined to make her mother happy, she seeks after the very sword her mother covets.",
        fight_style: "MANJI NINJA ARTS",
        nation: "Japan"
    }
];

const getCharacters = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockCharacters);
        }, 1000);
    });
};

export default getCharacters;
