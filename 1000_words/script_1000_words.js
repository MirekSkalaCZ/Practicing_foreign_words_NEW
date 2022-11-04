/* Specific scripts for 1000_words.html */

const english_word = ["abdomen", "accessories", "accountant", "additive-free", "adhesive", "adopt", "adoption", "agitated", "air conditioner", "ancestors", "anger", "animal", "animal feed", "animal kingdom", "animal welfare", "ankle", "ant", "antique shop", "apprentice", "apron", "arm", "armchair", "arrival", "artery", "ash", "astronaut", "at home", "attack", "attic room", "aunt", "axe", "baby", "back garden", "bad", "baggage", "baker", "balcony", "ball", "bark", "barn", "barrel", "basketry", "bath", "bathroom", "bathroom cabinet", "be healthy", "beach", "bear", "beast", "beat the carpet", "bed", "bed", "bedroom", "bedside table", "bee", "beehive", "beech", "beekeeping", "belt", "bench", "best man", "bicycle", "bird", "bird's nest", "birch", "biscuit", "black currants", "blackberries", "bladder", "blanket", "blind", "blind street", "blood", "blossom", "blow bubbles", "blue jeans", "blueberries", "boater", "body", "bodybuilding exercises", "bog", "boiled egg", "bone", "book", "bookcase", "boring", "boss", "bow tie", "bowels", "bowl", "bowler", "boxer shorts", "boy", "bra", "braces", "brain", "brake", "branch", "brave", "bread", "breathing exercises", "bricklayer", "bride", "bridegroom", "bridesmaid", "briefs", "brittle", "broad-minded", "broom", "broth", "brother", "brother-in-law", "brush", "bucket", "bud", "build blocks", "bulb", "bun", "bus", "bus driver", "bushes", "butcher", "butter", "butterfly", "button", "cabbage", "café", "cake", "calf", "calm", "camel", "can", "cancel", "canister", "cap", "car", "carburettor", "carpet", "carport", "cat", "caterpillar", "cave", "cellar", "cells", "central heating", "ceramic", "cesspit", "cinema", "city", "city centre", "civil servant", "clean", "cleaner", "cleaning rag", "clearing", "clever", "cliff", "clock", "cloth", "clothes", "clothes store", "clothing", "coat", "cock", "cockroach", "coffee", "coffee table", "collecting stamps", "common-law marriage", "competition", "conditions", "conductivity", "cone", "coniferous forest", "cooker", "cooking", "corduroys", "corrupt", "countryside", "court shoes", "cousin", "cow", "cowardly", "crab", "crafts", "cranberries", "crayons", "cream", "crossing", "crossroads", "crow", "cucumber", "cultivate", "cup", "cupboard", "currency exchange", "curtain", "curtains", "cushion", "cycling", "dad", "daddy", "daisy", "dancer", "dancing", "dandelion", "dark-haired", "daughter", "daughter-in-law", "deciduous forest", "deck chair", "deer", "defender", "delay", "dentist", "department store", "departure", "desert", "destination", "devoid of charm", "dig", "digger", "dining room", "dining table", "dirty", "do a somersault", "do-it-yourself (DIY)", "doctor", "documents", "doe", "dog", "doghouse", "doing crosswords", "dolphin", "donkey", "door", "doorbell", "double bed", "doughnut", "downtown", "drawer", "drawing", "dress", "dressing gown", "dressmaker", "drill", "driver, chauffeur", "dry the dishes", "dryer", "duck", "duckling", "dumbbells", "dune", "dustbin", "duster", "dustpan and brush", "duty-free", "duvet", "ear", "earthworm", "elbow", "elephant", "emotion", "employee", "employer", "evening dress", "extremities", "eye", "eyebrow", "eyelashes", "face", "facilities", "factory", "fair-haired", "family", "family tree", "fan", "fashion shop", "fast", "fat", "father", "father-in-law", "feather", "feel good", "fence", "fertilize", "fibre", "field", "file", "fingers", "fire engine", "fireman", "fish", "fishing", "fitness equipment", "flea", "flip-flops", "florist", "flour", "flowerpot", "flowers", "foal", "folding bed", "food", "foods", "foolish", "foot", "football ground", "footwear", "forehead", "foreign language learning", "foreman", "forest", "fork", "fork", "foster parents", "fox", "freckled", "freelance", "freezer", "fridge", "fried egg", "friends", "frog", "front garden", "frown", "fruit", "frying pan", "fur", "furniture", "gallbladder", "gallery", "game", "garage", "garden", "gardener", "gardening", "garlic", "gate", "gear", "generous", "giraffe", "girl", "gland", "glass", "glass", "glasses", "gloves", "godfather", "godchild", "godmother", "good", "goose", "gooseberries", "gosling", "graceful", "grain", "grandaunt", "granddaughter", "grandfather", "grandchildren", "grandmother", "grandparents", "grandson", "granduncle", "grape", "grass", "grassland", "great-grandfather", "great-grandmother", "great-grandparents", "great-great-grandfather", "green belt", "greengrocer", "greenhouse", "grocer", "grove", "guardian", "guestroom", "guide", "gym", "gymnastics", "gymnastics", "hair", "hairdresser", "half-brother", "half-sister", "hall", "hammer", "hamster", "hand", "happy", "hat", "hay", "head  (master)", "head", "headgear", "health", "health food", "heart", "hedge", "hedgehog", "helmet", "henhouse", "herbs", "high heels", "high jump", "high street", "hiking", "hill", "hippo", "hitchhike", "hobbies", "hoe", "holiday", "honest", "hood", "horse", "horse-riding", "horseradish", "hose", "hospital", "hotel", "house", "househusband", "houseplant", "housewife", "hunting", "husband", "challenge", "championship", "chandelier", "change", "charming", "cheek", "cheeky", "cheerful", "cheerfulness", "cheese", "chef", "chemist's", "chest", "chestnut", "chicken", "chimney", "chimney sweep", "chimpanzee", "chin", "chipboard", "chocolate", "chop wood", "chore", "christening", "ice cream", "ice-skating", "identity card (ID)", "impatient", "impolite", "indoor activities", "industrious", "insecticide", "insurance", "interesting", "internal organs", "iron", "iron v", "ironing board", "irrigate", "island", "itinerary", "jacket", "jammies", "jar", "job", "jogging", "joint", "journey", "judge", "juggling", "jump rope", "jumper", "jumping rope", "jungle", "junk food", "kettle", "kid", "kidney", "kitchen", "kitchen-cum-dining room", "kitchen-cum-living room", "kitten", "knee", "knife", "knitting", "labourer", "ladder", "ladybird", "lamb", "lamp", "lampshade", "landscape", "lard", "larder", "lathe", "launder", "lawn", "lawn mower", "lawyer", "lazy", "leaf", "leaves", "lecturer", "leg", "leisure", "lever", "library", "life buoy", "lifeguard", "lighthouse", "lion", "lips", "liver", "living room", "lobster", "lollipop", "long-sleeved", "look good", "lorry", "lorry driver", "lose", "louse", "low-cal food", "lung", "lunge", "ma", "made of", "maid", "mammal", "manure", "market", "marriage", "massage", "mate", "material", "match", "matches", "mattress", "mattress", "metal", "metalwork", "metropolis", "midge", "milk", "milkshake", "mirror", "model", "mole", "molehill", "mongrel", "monkey", "mood", "mop", "moppet", "mother", "mother-in-law", "motivation", "mountain", "mouse", "mouth", "mum", "mummy", "muscle", "museum", "mushroom", "music shop", "my folks", "nails", "nails", "narrow-minded", "native city", "nature reserve", "neck", "needlework", "nephew", "nerve", "newborn", "next of kin", "niece", "night clothes", "nightclub", "nightdress", "nightingale", "nightshirt", "nose", "nurse", "nut", "oak", "oar", "oats", "old", "omelette", "on foot", "optimistic", "organic food", "orchard", "orphan", "ostrich", "outdoor activities", "outgoing", "outskirts", "ovary", "owl", "own goal", "pa", "paddle", "paint pot", "painter", "painting", "palm", "pancake", "panties", "parents-in-law", "parquet floor", "parsley", "passport", "pasta", "pastime", "pastries", "pastry-cook", "path", "patient", "pavement", "peak", "peas", "pebbles", "pedestrian zone", "pegs", "pelmet", "penguin", "penknife", "pepper", "personal assistant", "personality", "pessimistic", "pesticide", "pet", "petrol pump", "petticoat", "picture", "pig", "pigeon", "pillow", "pincers", "pine", "plain", "plane", "plank", "plant", "plastic", "plasticine", "plate", "play catch-up", "play with toys", "playing musical instruments", "pleated skirt", "plumber", "police car", "policeman", "policewoman", "polish", "polite", "pool", "postman", "pottery", "power point", "pram", "press-up", "put on", "pyjamas", "race", "radish", "rake", "rake leaves", "raspberries", "rat", "ravine", "reading", "relative", "relaxation", "relaxed", "remorse", "remote control", "reptile", "reserved", "resort", "respectful", "rhubarb", "rib", "rice", "ring around the rosie", "rinse", "rocking horse", "rocking chair", "roll", "roller-skating", "roof", "room", "root", "rose", "roundabout", "rowing boat", "rubber", "rubbish bin", "rucksack", "rude", "rug", "runner-up", "running", "rye", "sad", "sadness", "sailing", "sailing boat", "salmon", "sandcastle", "sandpit", "saucer", "saw", "saw", "sawdust", "scarf", "scenery", "scientist", "scissors", "scrambled eggs", "screw", "screwdriver", "scuba diver", "scuba-diving", "sea", "seafood", "seagull", "seahorse", "seaside", "seaweed", "secretary", "seeds", "seesaw", "self-employed", "semiconductor", "sensible", "sewing", "shame", "shed", "shed", "sheep", "sheet", "shelf", "shell", "ship", "shirt", "shoe shop", "shoemaker", "shoes", "shop", "shop assistant", "shorts", "shoulder", "shower", "shrimps", "shutters", "school", "sideboard", "sightseeing", "silly", "singer", "singing", "single parent", "sink", "sister", "sister-in-law", "skeleton", "skiing", "skin", "skirt", "sky", "sleeping", "sleeveless", "slide", "slippers", "slit dress", "small", "small town", "smiling", "snake", "snorkeling", "soap", "socks", "sofa", "soft drinks", "soil", "son", "son-in-law", "songbird", "soup", "spa", "spanner", "sparkling water", "sparrow", "spice", "spider", "spider web", "sponge", "spoon", "sport", "sport shop", "sportground", "sportsman", "spring", "squat", "squirrel", "stable", "standard lamp", "starfish", "stationery", "stay", "steam engine", "stepbrother", "stepdaughter", "stepfather", "stepchildren", "stepmother", "stepparents", "stepsister", "stepson", "stick", "still water", "stingy", "stomach", "stool", "straw", "strawberries", "street", "stretching", "striker", "strong", "study", "substitute", "suburbs", "suit", "suitcase", "summer", "sun", "sunbathing", "sunflower", "sunglasses", "sunscreen", "sunshade (parasol)", "swallow", "swan", "sweep", "sweets", "swimming", "swimsuit", "swimsuit", "swimwear", "switch", "swivel chair", "table", "tailor", "take off", "take off", "tall", "tap", "tap water", "tape measure", "tea trolley", "teacher", "teaspoon", "teeth", "television", "teller", "temper", "tender", "tennis court", "tense", "theatre", "thigh", "thin", "thinner", "thread", "thumb", "tick", "tidy up", "tie", "tiger", "tights", "tiles", "tire", "toad", "toadstool", "toaster", "toilet", "tomato", "tomcat", "tongue", "tool box", "tools", "top", "top hat", "tourist", "town", "townsman", "townswoman", "traffic jam", "traffic lights", "train", "trainers", "travel", "travel", "travelling", "tree", "tree trunk", "tricycle", "trip", "trolley (bus)", "trousers", "trunks", "tulip", "tuna", "turtle", "twig", "twin beds", "twins", "uncle", "underwear", "unhappy", "utility room", "V-neck sweater", "vaccination", "vacuum cleaner", "valley", "valve", "vegetable", "vein", "vertebra", "vest", "vice", "vineyard", "visa", "visit", "waiter", "waitress", "wall", "wallpaper", "washbasin", "washer", "washing machine", "washing powder", "wasp", "wasteland", "water heater", "waterfall", "watering can", "watch", "wave", "weak", "wear", "wed", "wedding", "wedding dress", "weed", "wetland", "wheat", "wheelbarrow", "widow", "widower", "wife", "wig", "wilderness", "willow", "win", "window", "wipe", "wolf", "womb", "wood", "woodpecker", "woodshed", "woodworking", "work out", "workbench", "worker", "workout", "workshop", "wrinkled", "writing poetry", "yoga", "young", "zebra", "zip"];

const czech_word = ["podbřišek", "doplňky", "účetní", "bez chemických přísad", "lepidlo", "adoptovat", "adopce", "rozrušený", "klimatizace", "předci", "hněv, zlost, vztek", "zvíře", "krmivo", "říše zvířat", "ochrana zvířat", "kotník", "mravenec", "starožitnictví", "učeň", "zástěra", "paže", "křeslo", "příjezd, přílet", "tepna", "jasan", "astronaut", "doma", "útok", "podkrovní pokoj", "teta", "sekera, sekyra", "miminko", "zahrada za domem", "špatný", "zavazadlo", "pekař", "balkón", "míč", "kůra", "stodola", "sud, barel", "pletení košíků", "vana", "koupelna", "koupelnová skříňka", "být zdravý", "pláž", "medvěd", "šelma", "klepat koberec", "postel", "záhon", "ložnice", "noční stolek", "včela", "včelí úl", "buk", "včelařství", "opasek", "lavice", "svědek", "jízdní kolo", "pták", "ptačí hnízdo", "bříza", "sušenka", "černý rybíz", "ostružiny", "měchýř", "přikrývka", "roleta", "slepá ulice", "krev", "květ, kvést", "dělat bubliny", "džíny", "borůvky", "slaměný klobouk", "tělo", "posilovací cviky", "močál", "vařené vejce", "kost", "rezervovat", "knihovna", "nudný", "šéf", "motýlek", "střeva", "mísa", "buřinka", "boxerky", "chlapec", "podprsenka", "šle", "mozek", "brzda", "větev", "statečný", "chléb", "dýchací cviky", "zedník", "nevěsta", "ženich", "družička", "slipy", "křehký", "tolerantní", "koště", "masový vývar", "bratr", "švagr", "kartáč", "kbelík", "pupen", "stavět kostky", "žárovka", "sladká žemle", "autobus", "řidič autobusu", "křoví", "řezník", "máslo", "motýl", "knoflík", "hlávkové zelí", "kavárna", "koláč", "lýtko", "klidný", "velbloud", "plechovka", "zrušit", "kanystr", "čepice", "auto", "karburátor", "koberec (na celou podlahu)", "přístřešek pro auto", "kočka", "housenka", "jeskyně", "sklep", "buňky", "ústřední topení", "keramika", "žumpa, septik", "kino", "větší město", "centrum města", "úředník", "čistý", "uklízečka", "hadr", "mýtina", "chytrý", "útes", "hodiny", "utěrka", "oblečení", "obchod s oděvy", "oblékání", "kabát", "kohout", "šváb", "káva", "konferenční stolek", "sbírání známek", "život ve společné domácnosti", "soutěž", "životní podmínky", "vodivost", "šiška", "jehličnatý les", "sporák", "vaření", "manšestrové kalhoty", "úplatný", "venkov, krajina", "cvičky", "bratranec, sestřenice", "kráva", "zbabělý", "krab", "ruční práce", "brusinky", "pastelky", "smetana", "přechod pro chodce", "křižovatka", "vrána", "okurka", "pěstovat", "šálek", "skříň, kredenc", "směnárna", "závěs", "záclony", "polštářek", "cyklistika", "tatínek", "tatínek", "sedmikráska", "tanečník, tanečnice", "tancování", "pampeliška", "tmavovlasý", "dcera", "snacha", "listnatý les", "lehátko", "jelen", "obrana", "zpoždění", "zubař", "obchodní dům", "odjezd, odlet", "poušť", "cílová stanice", "bez šarmu", "rýt", "bagr", "jídelna", "jídelní stůl", "špinavý", "dělat kotrmelec", "kutilství", "lékař, lékařka", "osobní doklady", "srna", "pes", "psí bouda", "luštění křížovek", "delfín", "osel", "dveře", "zvonek", "manželská postel", "kobliha", "v centru města, do centra", "šuplík", "kreslení", "šaty", "župan", "dámský krejčí", "vrtačka", "řidič", "utřít nádobí", "sušička", "kachna", "káčátko", "činky", "duna, přesyp", "popelnice", "prachovka", "lopatka a smetáček", "bezcelní, osvobozené od cla", "peřina", "ucho", "žížala", "loket", "slon", "emoce, cit", "zaměstnanec", "zaměstnavatel", "večerní šaty", "končetiny", "oko", "obočí", "řasy", "obličej, tvář", "zařízení, vybavenost", "továrna", "světlovlasý", "rodina", "rodokmen", "ventilátor", "módní dům, butik", "půst, postit se", "tlustý", "otec", "tchán", "peří", "cítit se dobře", "plot", "hnojit", "vláknina", "pole", "pilník", "prsty", "hasičský vůz", "hasič", "ryba", "rybaření", "posilovací stroje", "blecha", "žabky", "květinářství", "mouka", "květináč", "květiny", "hříbě", "sklápěcí lůžko", "jídlo, strava", "potraviny", "pošetilý", "chodidlo", "fotbalové hřiště", "obuv", "čelo", "učení se cizím jazykům", "mistr", "les", "vidlička", "vidle", "opatrovníci, pěstouni", "liška", "pihatý", "na volné noze", "mraznička, mrazák", "lednička", "volské oko", "přátelé", "žába", "předzahrádka", "zamračený výraz", "ovoce", "pánev na smažení", "kožešina", "nábytek", "žlučník", "galerie", "hra", "garáž", "zahrada", "zahradník, zahradnice", "zahradní práce", "česnek", "branka", "ozubené kolo", "velkorysý", "žirafa", "dívka", "žláza", "sklenice", "sklo", "brýle", "rukavice", "kmotr", "kmotřenec", "kmotra", "dobrý", "husa", "angrešt", "housátko", "elegantní", "obilí", "prateta", "vnučka", "dědeček", "vnoučata", "babička", "prarodiče", "vnuk", "prastrýc", "hroznové víno", "tráva", "pastvina", "pradědeček", "prababička", "pradědeček a prababička", "prapradědeček", "pás zeleně", "zelinářství", "skleník", "obchod s potravinami", "háj", "opatrovník", "pokoj pro hosty", "turistický průvodce", "tělocvična", "gymnastika", "gymnastika", "vlasy", "kadeřník", "nevlastní bratr", "nevlastní sestra", "předsíň", "kladivo", "křeček", "ruka", "šťastný", "klobouk", "seno", "vedoucí", "hlava", "pokrývka hlavy", "zdraví", "zdravá strava", "srdce", "živý plot", "ježek", "helma", "kurník", "bylinky", "obuv na vysokých podpatcích", "skok vysoký", "hlavní ulice, hlavní třída", "turistika", "kopec", "hroch", "cestovat stopem, stopovat", "koníčky, zájmy", "motyka", "dovolená, prázdniny", "poctivý", "digestoř", "kůň", "jezdectví", "křen", "hadice", "nemocnice", "hotel", "dům", "muž v domácnosti", "pokojová rostlina", "žena v domácnosti", "myslivost", "manžel", "výzva", "mistrovství", "lustr", "směnit, vyměnit", "půvabný", "tváře", "drzý", "veselý", "veselost", "sýr", "kuchař", "lékárna", "hrudník", "kaštan", "kuře", "komín", "kominík", "šimpanz", "brada", "dřevotříska", "čokoláda", "sekat dříví", "domácí práce, vykonávat domácí práce", "křtiny", "zmrzlina", "bruslení", "občanský průkaz", "netrpělivý", "nezdvořilý", "halové aktivity (uvnitř)", "pilný, svědomitý", "prostředek proti hmyzu", "pojištění", "zajímavý", "vnitřní orgány", "žehlička", "vyžehlit", "žehlicí prkno", "zavlažovat", "ostrov", "cestovní plán, trasa", "bunda", "pyžamo hovorově", "zavařovací sklenice", "povolání", "běhání", "kloub", "cesta (většinou delší, pouze tam)", "soudce", "žonglování", "skákat přes švihadlo", "svetr", "skákání přes švihadlo", "džungle", "nezdravá strava", "varná konvice", "dítě", "ledvina", "kuchyně", "kuchyně s jídelnou", "obytná kuchyně", "kotě", "koleno", "nůž", "pletení", "nekvalifikovaný pracovník", "žebřík", "beruška", "jehně", "lampa", "stínítko", "krajina", "vepřové sádlo", "spižírna", "soustruh", "vyprat", "trávník", "sekačka na trávu", "právník, advokát", "líný", "list", "listí", "lektor, přednášející", "noha (celá)", "volný čas", "páka", "knihovna (budova)", "záchranný kruh", "plavčík", "maják", "lev", "rty", "játra", "obývací pokoj", "humr", "lízátko", "s dlouhými rukávy", "vypadat dobře", "nákladní automobil", "řidič kamionu", "prohrát", "veš", "nízkokalorická strava", "plíce", "výpad", "maminka (zdrobnělina pro mother)", "vyrobeno z", "služebná", "savec", "hnojivo, hnůj", "trh", "manželství", "masáž, masírovat", "kamarád, kamarádka", "materiál", "zápas, utkání", "zápalky, sirky", "matrace", "žíněnka, matrace", "kov", "práce s kovem", "metropole", "komár", "mléko", "mléčný koktejl", "zrcadlo", "manekýnka, modelka", "krtek", "krtinec", "kříženec", "opice", "nálada", "mop, stírač na podlahu", "malé škvrně", "matka", "tchyně", "motivace", "hora", "myš", "ústa", "maminka (zdrobnělina pro mother)", "maminka (zdrobnělina pro mother)", "sval", "muzeum", "houba", "obchod s hudebninami", "moji příbuzní, moje rodina", "hřebíky", "nehty", "úzkoprsý", "rodné město", "přírodní rezervace", "krk", "vyšívání", "synovec", "nerv", "novorozenec", "nejbližší příbuzní", "neteř", "noční prádlo", "noční podnik, noční bar", "dámská noční košilka", "slavík", "pánská noční košile", "nos", "zdravotní sestra", "matice", "dub", "veslo", "oves", "starý", "omeleta", "pěšky", "optimistický", "biopotraviny", "sad", "sirotek", "pštros", "aktivity venku (v přírodě)", "otevřený", "okrajová část", "vaječník", "sova", "vlastní gól", "tatínek (zdrobnělina pro father)", "pádlo", "nádoba s barvou", "malíř pokojů", "malování", "dlaň", "palačinka", "dámské kalhotky", "tchán a tchyně", "parkety", "petržel", "cestovní pas", "těstoviny", "zábava, rozptýlení", "pečivo", "cukrář", "cesta", "trpělivý", "chodník", "vrchol", "hrách", "oblázky", "pěší zóna", "věšáky", "garnýž", "tučňák", "kapesní nůž", "paprika", "osobní asistent(ka)", "osobnost", "pesimistický", "prostředek proti škůdcům", "domácí mazlíček (zvířátko)", "benzinová pumpa", "spodnička", "obraz", "prase", "holub", "polštář", "štípací kleště", "borovice", "rovina", "hoblovat", "prkno", "rostlina", "plast", "modelína", "talíř", "hrát na honěnou", "hrát si s hračkami", "hraní na hudební nástroje", "skládaná sukně", "klempíř, instalatér", "policejní vůz", "policista", "policistka", "vyleštit", "zdvořilý", "bazén", "pošťák", "hrnčířství", "zásuvka (elektrická)", "dětský kočárek", "klik", "obléknout se", "pyžamo", "závod", "ředkvička", "hrábě", "hrabat listí", "maliny", "krysa", "rokle", "čtení", "příbuzný, příbuzná", "relaxace", "uvolněný", "výčitka svědomí", "dálkové ovládání", "plaz", "rezervovaný, chladný", "letovisko", "uctivý", "rebarbora", "žebro", "rýže", "kolo-kolo", "opláchnout, omýt", "houpací kůň", "houpací křeslo", "rohlík", "jízda na kolečkových bruslích", "střecha", "pokoj", "kořen", "růže", "kruhový objezd", "veslice (loďka)", "guma", "odpadkový koš", "batoh, ruksak", "hrubý", "kobereček/běhoun", "druhý za vítězem, poražený za vítězem", "běh", "žito", "smutný", "smutek", "plachtění", "plachetnice", "losos", "hrad z písku", "pískoviště", "podšálek", "pilka, pila", "řezat", "piliny", "šátek", "malebná krajina", "vědec", "nůžky", "míchaná vajíčka", "šroub", "šroubovák", "potápěč", "potápění s dýchacím přístrojem", "moře", "mořské plody", "racek", "mořský koník", "mořské pobřeží", "mořské řasy", "sekretářka", "semena", "houpačka", "samostatně výdělečně činný", "polovodič", "rozumný", "šití", "ostuda", "kůlna", "přístřešek", "ovce", "prostěradlo", "police/regál", "mušle", "loď", "košile", "obchod s obuví", "švec", "boty", "obchod", "prodavačka", "kraťasy", "rameno", "sprcha", "krevety", "okenice", "škola", "příborník", "prohlídka památek", "hloupý", "zpěvák, zpěvačka", "zpívání", "rodič samoživitel, svobodná matka", "dřez", "sestra", "švagrová", "kostra", "lyžování", "kůže", "sukně", "obloha", "spaní", "bez rukávů", "skluzavka", "pantofle", "šaty s rozparkem", "malý", "maloměsto", "usměvavý", "had", "šnorchlování", "mýdlo", "ponožky", "pohovka", "nealkoholické nápoje", "půda, zemina", "syn", "zeť", "zpěvný pták", "polévka", "lázně", "klíč", "perlivá voda", "vrabec", "koření", "pavouk", "pavučina", "mycí houba", "lžíce", "sport, sportovní odvětví", "obchod se sportovními potřebami", "sportoviště", "sportovec", "pružina, péro", "dřep", "veverka", "stáj", "stojací lampa", "hvězdice", "papírnictví", "pobyt", "parní stroj", "nevlastní bratr", "nevlastní dcera", "nevlastní otec, otčím", "nevlastní děti", "nevlastní matka, macecha", "nevlastní rodiče", "nevlastní sestra", "nevlastní syn", "hůl", "neperlivá voda", "lakomý", "žaludek", "stolička", "sláma", "jahody", "ulice", "protažení", "útočník", "silný", "pracovna", "náhradník, střídající hráč", "předměstí", "oblek", "kufr", "léto", "slunce", "opalování", "slunečnice", "sluneční brýle", "opalovací krém", "slunečník", "vlaštovka", "labuť", "zametat", "sladkosti", "plavání", "plavky", "dámské plavky", "koupací oblečení", "spínač, vypínač", "otáčecí židle", "stůl", "pánský krejčí", "vzlétnout", "svléknout", "vysoký", "vodovodní kohoutek", "voda z kohoutku", "svinovací metr", "servírovací stolek", "učitel, učitelka", "čajová lžička", "zuby", "televize, TV", "pokladník", "vznětlivost", "citlivý, něžný", "tenisový kurt", "napjatý", "divadlo", "stehno", "hubený", "ředidlo", "závit", "palec", "klíště", "uklidit", "vázanka, kravata", "tygr", "punčochové kalhoty", "dlaždice", "pneumatika", "ropucha", "muchomůrka", "opékač topinek, toaster", "toaleta", "rajče", "kocour", "jazyk", "box s nářadím", "nářadí", "vršek", "cylindr", "turista", "menší město", "obyvatel města", "obyvatelka města", "dopravní zácpa", "semafor", "vlak", "tenisky", "cestovat", "cestovat", "cestování", "strom", "kmen stromu", "tříkolka", "výlet", "trolejbus", "kalhoty", "pánské plavky", "tulipán", "tuňák", "želva", "větvička", "dvě stejné samostatné postele", "dvojčata", "strýc", "spodní prádlo", "nešťastný", "provozní místnost (na pračku, nářadí)", "svetr s výstřihem do v", "očkování", "vysavač", "údolí", "ventil", "zelenina", "žíla", "obratel", "nátělník, košilka", "svěrák", "vinice", "vízum", "navštívit", "číšník", "číšnice", "zeď", "tapeta", "umyvadlo", "podložka", "pračka", "prací prášek", "vosa", "pustina", "ohřívač vody", "vodopád", "konev", "hodinky", "vlna", "slabý", "nosit", "oženit se, vdát se", "svatba, sňatek", "svatební šaty", "plevel", "bažina", "pšenice", "trakař", "vdova", "vdovec", "manželka", "paruka", "divočina", "vrba", "zvítězit", "okno", "setřít", "vlk", "děloha", "dřevo", "datel", "kůlna na dříví", "pracování se dřevem", "trénovat", "pracovní stůl, deska", "dělník, dělnice", "trénink", "dílna", "vrásčitý", "psaní poezie", "jóga", "mladý", "zebra", "zdrhovadlo"];

/**** Dark mode ****/

let icon_dm = document.getElementById("icon_dm");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light"); 
}

let localData = localStorage.getItem("theme");

if(localData == "light") {
    icon_dm.src = "../images/moon.png";
    document.body.classList.remove("dark_theme");
}   else if (localData == "dark") {
    icon_dm.src = "../images/sun.png";
    document.body.classList.add("dark_theme");
}

icon_dm.addEventListener ("click", function(){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon_dm.src = "../images/sun.png";
        localStorage.setItem("theme", "dark");
    }   else {
        icon_dm.src = "../images/moon.png";
        localStorage.setItem("theme", "light");
    }
});

/**** Welcome Text ****/

const heading = document.getElementById("text");

const text = "Procvičování - 1000 anglických slovíček";

let idLetter = 1;

let delay = 150;

function printText(){
    heading.innerText = text.slice(0,idLetter)
    
    idLetter++;
    
    if(idLetter > text.length){
        idLetter = 1;
    }
    
    setTimeout(printText, delay);

}
    
printText();

/**** Toggle Windows ****/

let windows = document.querySelectorAll(".window");

for(let i = 1; i <= 2; i++){
    let btn = document.getElementById("btn" + i);

    let window = document.getElementById("window" + i);

    btn.onclick = function(){
        deleteActiveClass();
        window.classList.add("active");
    }

    function deleteActiveClass(){
        windows.forEach(function(allWindows){
            allWindows.classList.remove("active");
        });
    }
}

/**** Practicing ****/

/* Object Length */

/* Could be czech_word.length */

let arr_length = english_word.length;

/* Random number */

let btn_randomize = document.getElementById("randomize_btn");

let random_foreign = document.getElementById("random_foreign_word");

let random_native = document.getElementById("random_native_word");

/* Result text + second practice */

let practice_result = document.getElementById("practice_result");

let practice_form = document.getElementById("practice_form");

let native_word_practice = document.getElementById("native_word_practice");

/* Score */

var round_count = 0;

var score = 0;

var percents = 0;

btn_randomize.addEventListener("click", function(){
    /* Add round value + 1 */
    round_count++;
    /* Reset values */
    random_foreign.innerText = "";
    random_native.innerText = "";
    practice_result.innerHTML = "";
    native_word_practice.value = "";
    /* Generate Random Number */
    let random_number = Math.ceil((Math.random() * arr_length) - 1);  
    /* Show random word from array */
    random_foreign.innerText = english_word[random_number];
    random_native.innerText = czech_word[random_number];

    /**** Second Practice ****/
    practice_form.addEventListener("submit", function(e){

        e.preventDefault();

        if(native_word_practice.value == czech_word[random_number]){
            practice_result.innerHTML = "<span class='true'>Správná odpověď</span>";
            score++;
        }   else {
            practice_result.innerHTML = "<span class='false'>Špatná odpověď</span>";
        }

        document.getElementById("round_count").innerText = round_count;

        document.getElementById("score").innerText = score;

        percents = score * 100 / round_count;
        let rounded = percents.toFixed(1);

        document.getElementById("percents").innerText = rounded;
            
        });  
});

/**** Generate Word List ****/

function createList(){

    let list = "<table><tr><th>Cizí výraz</th><th>Český výraz</th></tr>"
    for (let x in english_word, czech_word) {
        list += "<tr><td>" + english_word[x] + "</td><td>" + czech_word[x] + "</td></tr>";
    }
    list += "</table>"

    document.getElementById("list").innerHTML = list;

};

createList();